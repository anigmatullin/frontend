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
        apiurl: "http://192.168.122.254:8080",
        url: "",
        hostname: '',
        uptime: '',
        dns: [],
        interfaces: [],
        routes: [],

        getparams: {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json'
          },
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      },

        postparams: {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
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

    doGet(url)
    {
      let apiurl = '/get';
      let body = {url: url};
      body = JSON.stringify(body);
      let params = {...this.postparams};
      params.body = body;

      return fetch(apiurl, params);
    },

    updateInterfaces()
    {
      let url = this.apiurl + '/api/sysinfo/interfaces';
      this.doGet(url)
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
