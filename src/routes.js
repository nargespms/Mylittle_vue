import homecmp from './homecmp.vue';
import searchcmp from './searchcmp.vue';
import gallery from './gallery.vue';
import mainNewsContent from './components/newsContent/mainNewsContent.vue';



export default [
  { path: '/', component: homecmp },
  { path:'/search' , component : searchcmp },
  { path:'/gallery' , component : gallery },
  { path: '/news/:id', component: mainNewsContent }
]
