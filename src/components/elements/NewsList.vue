<template>
  <div>
      <ul>
          <li class="listnews" v-for="item in items" v-bind:key="item._id">
            <h3 class="uptitle">{{item.uptitle}}</h3>
            <h2 class="title">{{item.title}}</h2>
            <p>{{item.about}}</p>

          </li>
      </ul>
  </div>
</template>

<script>
import listOfNews from '../../data/listOfNews.json'

export default {
  name:'listOfNews',

  data(){
    return {
      items : listOfNews

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
      font-size: 18px;
      padding:8px 0px;
    }
    .uptitle {
      font-size: 16px;
      color:#1a7a74;
    }
  }
</style>
