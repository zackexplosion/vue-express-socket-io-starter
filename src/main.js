import Vue from 'vue'
import Vuex from 'vuex'
import 'ant-design-vue/dist/antd.css'
import * as AntDesignVue from 'ant-design-vue';

import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.use(Vuex)

Vue.use(AntDesignVue)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
