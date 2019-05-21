<template>
  <div class="fetchPost fetchPhoto">
    <ul>
      <li v-for="photo in photos" :key="photo.id">
        <h2 class="title">
          {{photo.title}}
        </h2>
        <img class="" :src="photo.thumbnailUrl"/>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios';

export default {
   data () {
    return {
      photos: [],
      url :'',
    }
  },
  created() {
    axios.get('http://jsonplaceholder.typicode.com/photos').then(response => {
      this.photos = response.data.slice(0,10);
      this.url = response.data.thumbnailUrl;
    })
  }
}
</script>

<style lang="scss">
.fetchPhoto {
  padding-left: 16px;
}
.fetchPost li {
	border-bottom: 1px solid #989898;
	padding: 8px;
	width: 50%;
	float: left;
	box-sizing: border-box;
	min-height: 255px;
}
</style>
