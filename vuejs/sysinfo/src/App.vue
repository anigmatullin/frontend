<template>
<div>
  <sysinfo v-bind:url="url"  v-bind:hostname="hostname"  v-bind:uptime="uptime" />
  <dns v-bind:servers="dns"/>
  <interfaces  v-bind:interfaces="interfaces"/>
  <routes  v-bind:routes="routes"/>
</div>
</template>

<script>
import sysinfo from '../../components/sysinfo.vue'
import interfaces from '../../components/interfaces.vue'
import routes from '../../components/routes.vue'
import dns from '../../components/dns.vue'

export default {
  name: 'App',
  data()
  {
    let ret = {
        authtoken: "",
        accesstoken: "",
        authurl: "http://idp.go4labs.local:8082/auth",
        apiurl: "http://api.go4labs.local:8080",

        url: "",
        hostname: '',
        uptime: '',
        dns: [],
        interfaces: [],
        routes: [],

        ajaxparams: {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'include', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json'
          },
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      },

        postparams: {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'include', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json'
          },
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      }
    };

    return ret;
  },
  

    async mounted()
    {
        let authenticated = false;
        let tokensLoaded = this.loadToken();

        if (tokensLoaded) {
            console.log(this.accesstoken);
            authenticated = await this.appLogin();
            console.log("auth: " + authenticated);
        }

        if (!authenticated) {
            
            console.log("trying to authenticate");
            console.log(this.authurl);

            //show auth form by redirect to /auth route
                                //send user/pass
                                //check results
            await this.authenticate();
        }

        console.log("Mounted!");
        let $el = document.getElementById("menu-system");
        $el.classList.add("active");

        this.updateSysinfo();
        this.updateDNS();

        this.updateRoutes();
        this.updateInterfaces();

        // setInterval(this.updateInterfaces, 1000);
        // setInterval(this.updateRoutes, 60 * 1000);
        // setInterval(this.updateSysinfo, 60 * 1000);
        // setInterval(this.updateDNS, 60 * 1000);
    },

  methods: {

    loadToken()
    {
        let authtoken = localStorage.getItem('authtoken');
        let accesstoken = localStorage.getItem('accesstoken');

        if (!authtoken || !accesstoken) {
            return false;
        }

        this.authtoken = JSON.parse(authtoken);
        this.accesstoken = JSON.parse(accesstoken);

        return true;
    },

    async authenticate()
    {
        //
        let promise = fetch(this.authurl, this.postparams)
            .then( response => response.json())
            .then( data => {
                this.authtoken = data;
                localStorage.setItem('authtoken', JSON.stringify(data));
                console.log(JSON.parse(localStorage.getItem('authtoken')));
                return fetch(this.authurl + "/1", this.postparams);
            })
            .then( response => response.json())
            .then( data => {
                this.accesstoken = data;
                localStorage.setItem('accesstoken', JSON.stringify(data));
            })
            .then( () => this.appLogin());

        return promise;
    },

    async appLogin()
    {
        //send this.accesstoken
        let url = this.apiurl + "/login";
        let params = {...this.postparams};
        params.body = JSON.stringify(this.accesstoken);
        console.log(params);

        let response = await fetch(url, params);
        let json = await response.json();

        console.log(json);
        return response.ok;
    },

    updateInterfaces()
    {
      let url = this.apiurl + '/api/sysinfo/interfaces';
      fetch(url, this.ajaxparams)
        .then( response => response.json() )
        .then( json => this.interfaces = json );
    },

    updateRoutes()
    {
      let url = this.apiurl + '/api/sysinfo/routes';
      fetch(url, this.ajaxparams)
        .then( response => response.json() )
        .then( json => this.routes = json );
    },

    updateDNS()
    {
      let url = this.apiurl + '/api/sysinfo/dns';
      fetch(url, this.ajaxparams)
        .then( response => response.json() )
        .then( json => this.dns = json );

    },

    updateSysinfo()
    {
        let url = this.apiurl + '/api/sysinfo/system';
        fetch(url, this.ajaxparams)
            .then( response => response.json() )
            .then( json => {
            this.hostname = json.hostname;
            this.uptime = json.uptime;
        });
    }

  },

  components: {
    sysinfo,
    interfaces,
    routes,
    dns
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
