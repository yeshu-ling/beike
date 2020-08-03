import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import axios from "axios"
// import "./assets/css/mui.min.css"
import "./assets/css/commen.css"
import "./assets/iconfonts/iconfont.js"
import "./assets/iconfonts/demo.css"
import "./assets/iconfonts/iconfont.css"
import "./mock/mockserver"
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
VueAMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
