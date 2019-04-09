import homecmp from './homecmp.vue';
import searchcmp from './searchcmp.vue';
import mainNewsContent from './components/newsContent/mainNewsContent.vue';


export default [
  { path: '/', component: homecmp },
  { path:'/search' , component : searchcmp },
  { path: '/news/:id', component: mainNewsContent }
]
