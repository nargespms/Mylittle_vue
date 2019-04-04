<template>
  <div class="searchList_wrapper">
    <ul class="searchList">
      <li v-for="news in newsList" v-bind:key="news._id">
        <h3 class="uptitle">{{news.uptitle}}</h3>
        <h2 class="title">{{news.title}}</h2>
        <p>{{news.about}}</p>
      </li>
    </ul>

  </div>
</template>

<script>
import newslist from './../../data/listOfNews.json'

export default {
  data() {
    return {
      newsList : newslist,
    }
  }
}
</script>

<style lang="scss" scoped>
.searchList_wrapper {
  width:75%;
  margin: 24px auto;
  background-color: #fff;
}
.searchList {
  padding:8px;
  border:1px solid #1a7a74;
  li {
    border-bottom:1px solid #989898;
    padding:8px ;
    &:last-child {
      border-bottom:none;
    }
    .title {
      color:darkslategrey;
      font-size: 18px;
      padding:8px 0px;
    }
    .uptitle {
      font-size: 16px;
      color:#1a7a74;
    }
  }
}
</style>
