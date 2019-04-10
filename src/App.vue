<template>
  <div class="main_outer_wrapper con12">
        <router-view></router-view>
    </div>
</template>


<script>
import homecmp from './homecmp.vue';
import searchcmp from './searchcmp.vue';
import gallery from './gallery.vue';


export default {
 components: {
        homecmp,
        searchcmp,
        gallery,
    },
}
</script>

<style lang="scss" scoped>


</style>

