<template>
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {print} from '../../lib/print';
import {doGet, doPost, doPut, doDelete, doHead} from '../../lib/http';
// import {PromisePool} from '@supercharge/promise-pool';
const PromisePool = require('@supercharge/promise-pool');

export default {
  name: 'App',
  components: {
  },

  async mounted() {
      console.log("Traffgen starting!");
      print("Hello from print()");
      

    //   let urls = ['https://google.com', 'https://lenta.ru', 'https://yandex.com'];

      let urls = [
'https://google.com',
'https://youtube.com',
'https://tmall.com',
'https://qq.com',
'https://sohu.com',
'https://baidu.com',
'https://360.cn',
'https://taobao.com',
'https://jd.com',
'https://yahoo.com',
'https://facebook.com',
'https://amazon.com',
'https://zoom.us',
'https://wikipedia.org',
'https://weibo.com',
'https://xinhuanet.com',
'https://sina.com.cn',
'https://live.com',
'https://reddit.com',
'https://microsoft.com',
'https://panda.tv',
'https://office.com',
'https://netflix.com',
'https://zhanqi.tv',
'https://okezone.com',
'https://vk.com',
'https://alipay.com',
'https://microsoftonline.com',
'https://myshopify.com',
'https://instagram.com',
'https://force.com',
'https://github.com',
'https://yahoo.co.jp',
'https://csdn.net',
'https://stackoverflow.com',
'https://huanqiu.com',
'https://naver.com',
'https://bongacams.com',
'https://bing.com',
'https://twitch.tv',
'https://google.com.hk',
'https://adobe.com',
'https://ebay.com',
'https://chaturbate.com',
'https://salesforce.com',
'https://apple.com',
'https://yy.com',
'https://aparat.com',
'https://aliexpress.com',
'https://amazon.in',

      ];

      await PromisePool.for(urls).withConcurrency(3).process(this.request);

      let req = doGet("http://httpbin.org/get");

      req.then(response => {
            console.log(response.ok);
            console.log(response.status);
            return response.arrayBuffer();
          })
         .then(data => console.log(data.byteLength));
  },

  methods:
  {
    async request(url)
    {
        return doGet(url).then(() => console.log(url));
    }
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
