<template>
  <div>
    <myheader/>
    <posts/>
    <photos/>
  </div>
</template>

<script>
import myheader from './components/header/myheader.vue';
import posts from './components/elements/posts.vue'
import photos from './components/elements/photos.vue'

export default {
   components: {
      myheader,
      posts,
      photos
    },

}
</script>

