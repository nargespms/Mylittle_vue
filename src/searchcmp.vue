<template>
  <div>
    <myheader/>
    <searchList/>
    <searchForm/>
  </div>
</template>

<script>
import myheader from './components/header/myheader.vue';
import searchList from './components/elements/searchList.vue'
import searchForm from './components/elements/searchForm.vue'

export default {
   components: {
        myheader,
        searchList,
        searchForm,
    },
}
</script>

