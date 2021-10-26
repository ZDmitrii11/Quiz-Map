import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import router from "./router/routers.js"
import store from '../store/store.index'
import VueGeolocation from "vue-browser-geolocation/src";


Vue.config.productionTip = false
Vue.use(VueGeolocation)
Vue.use(VueGoogleMaps,{
  load: {
    key:'AIzaSyABAS1KYjzyMgAYb9Q1fiY1hne8PaHOavc',
    libraries: 'places',
    installComponents:false,
  },
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
