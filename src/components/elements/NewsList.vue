<template>
  <div>
      <ul>
          <li class="listnews" v-for="item in items" v-bind:key="item._id">
            <h3 class="uptitle">{{item.uptitle}}</h3>
             <router-link class="title" v-on:click="Sendnews" v-bind:to="'/news/' + item._id" ><h2 v-on:click="Sendnews">{{ item.title }}</h2></router-link>
            <p>{{item.about}}</p>

          </li>
      </ul>
  </div>
</template>

<script>
import listOfNews from '../../data/listOfNews.json';

export default {
  name:'listOfNews',
  data(){
    return {
      items : listOfNews,
      id:this.$route.params.id,
      // item: {},
    }
  },
  methods : {
    Sendnews() {
      // this.id = this.item._id;
      // console.log(this.id);
      // console.log(this.$route.params.id);
      this.$store.state.allnews = this.items;
    }
  }
}
</script>

<style lang="scss" scoped>
  .listnews {
    padding:8px;
    border-bottom:1px solid #989898;
    .title {
      color:darkslategrey;
      font-size: 14px;
      padding:8px 0px;
      display: block;
    }
    .uptitle {
      font-size: 16px;
      color:#1a7a74;
    }
  }
</style>
