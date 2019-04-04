<template>
  <div class="searchList_wrapper">
    <ul class="searchList">
      <input type="text " v-model="search" placeholder="search news">
      <li v-for="news in filteredNews" v-bind:key="news._id">
        <h3 class="uptitle">{{news.uptitle}}</h3>
        <h2 class="title">{{news.title}}</h2>
        <p>{{news.about | snippet }}</p>
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
      search: '',
    }
  },
  computed: {
    filteredNews : function(){
      return this.newsList.filter(news => {
        return news.title.match(this.search);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.searchList_wrapper {
  width:60%;
  margin-top: 24px;
  float:right;
  padding-left:16px;
  box-sizing: border-box;
}
.searchList {
  background-color: #fff;
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
