import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

 export const store = new Vuex.Store({
  // the global state
  state : {
     news: [

     ],
     allnews: {},
     singlenews:{}
  },

})
// console.log(state);
