<template>
<div class="output"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {print} from '../../lib/print';
import {doGet, doPost, doPut, doDelete, doHead} from '../../lib/http';
import PromisePool from "@supercharge/promise-pool";
// const PromisePool = require('@supercharge/promise-pool');

@Options({
  components: {},

  async mounted() {
      console.log("Traffgen starting!");
      print("Hello from print()");
      

    //   let urls = ['https://google.com', 'https://lenta.ru', 'https://yandex.com'];

      let urls = [
'google.com',
'youtube.com',
'tmall.com',
'qq.com',
'sohu.com',
'baidu.com',
'360.cn',
'taobao.com',
'jd.com',
'yahoo.com',
'facebook.com',
'amazon.com',
'zoom.us',
'wikipedia.org',
'weibo.com',
'xinhuanet.com',
'sina.com.cn',
'live.com',
'reddit.com',
'microsoft.com',
'panda.tv',
'office.com',
'netflix.com',
'zhanqi.tv',
'okezone.com',
'vk.com',
'alipay.com',
'microsoftonline.com',
'myshopify.com',
'instagram.com',
'force.com',
'github.com',
'yahoo.co.jp',
'csdn.net',
'stackoverflow.com',
'huanqiu.com',
'naver.com',
'bongacams.com',
'bing.com',
'twitch.tv',
'google.com.hk',
'adobe.com',
'ebay.com',
'chaturbate.com',
'salesforce.com',
'apple.com',
'yy.com',
'aparat.com',
'aliexpress.com',
'amazon.in',

      ];

      await PromisePool.for(urls).withConcurrency(5).process(this.request);

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
    async request(url: string)
    {
        return doGet(url).then(response => console.log(url));
    }
  }
})
export default class App extends Vue {}
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
