<template>
  <div class="fetchPost">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2 class="title">
          {{post.title}}
        </h2>
        <p class="content">
          {{post.body}}
        </p>

      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios';

export default {
   data () {
    return {
      posts: [],
    }
  },
  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts').then(response => {
      this.posts = response.data.slice(0,10);
    })
  }
}
</script>

<style lang="scss" >
 .title {
      color:darkslategrey;
      font-size: 18px;
      padding:8px 0px;
    }
.fetchPost {
  background-color: #fff;
  padding:8px;
  border:1px solid #1a7a74;
  width: 40%;
  float:left;
  margin-top: 12px;
  margin-right: 12px;
  li {
    border-bottom:1px solid #989898;
    padding:8px ;
    &:last-child {
      border-bottom:none;
    }
  }
}
</style>
