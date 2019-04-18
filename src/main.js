// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from '@/router';
import VueResource from 'vue-resource';
import VueEvents from '@/plugins/events';

Vue.config.productionTip = false;

Vue.use(VueEvents);

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: `
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view" />
    </transition>
  </div>`
});
