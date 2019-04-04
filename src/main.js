

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import './scss/main.scss';
import Routes from './routes.js'

Vue.use(VueRouter);

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
  el: '#root',
  components: { App },
  template: '<App/>',
  router:router,


});
