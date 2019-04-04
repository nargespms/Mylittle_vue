<template>
  <div>
    <myheader/>
    <searchList/>
  </div>
</template>

<script>
import myheader from './components/header/myheader.vue';
import searchList from './components/elements/searchList.vue'

export default {
   components: {
        myheader,
        searchList,
    },
}
</script>

