import Vue from 'vue'
import Vuex from 'vuex'
import 'ant-design-vue/dist/antd.css'
import * as AntDesignVue from 'ant-design-vue';

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.use(Vuex)

Vue.use(AntDesignVue)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
