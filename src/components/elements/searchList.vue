<template>
  <div class="searchList_wrapper">
      <div class="input_params_search" v-if="(selects != 0)">
        <h4> selected type : {{selects.type}} </h4>
        <h4> selected categories : {{selects.categories}}</h4>
      </div>


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
    },
    // for retrived data from searchform from store
    selects(){
      // console.log(this.$store.state.news.categories);
      return this.$store.state.news;
      // console.log(this.$store.news);
    }
  },


}
</script>

<style lang="scss" scoped>
.searchList_wrapper {
  width:60%;
  margin-top: 24px;
  float:left;
  padding-right:16px;
  box-sizing: border-box;
  .input_params_search {
    color:darkslategrey;
    background-color: #fff;
    padding:8px;
    border:1px solid #1a7a74;
    margin-bottom: 8px;
  }
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
