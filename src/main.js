// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// External Packages
import lodash from 'lodash';
import Axios from 'axios';
import {apiHost} from './data/config'

Vue.config.productionTip = false

// Global Vue Configurations
Vue.prototype._ = lodash;
Vue.prototype.$http = Axios;
Vue.prototype.$http.$root = apiHost;
Vue.prototype.$window = window;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
