import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { i18n } from './locales'; // 引入 src/i18n/index，得到 i18n 实例
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

import { currency } from './utils/index';

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$video = videojs;
Vue.filter('currency', currency);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
