

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import './scss/main.scss';
import Routes from './routes.js';
import VueResource from 'vue-resource';
import { store } from './store/store.js';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: Routes,
  /* doing this for destroying # symbol but it doesnt work*/
  // mode: 'history'

})

// FILTER
Vue.filter('snippet',function(value){
  return value.slice(0,200) + '...';
})

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#root',
  components: { App },
  template: '<App/>',
  router:router,


});
