<template>
    <div class="content">
      <div v-if="id = this.id">

        news id = {{id}}
        <!-- {{Chosen}} -->
        <!-- {{filterchosen}} -->
        <!-- <div v-for="news in Chosen" :key="news.id" >
          {{news.title}}
        </div> -->
      </div>
      <!-- <button class="increase" v-on:click="fontSize++">
          increase
          <i class="fa fa-plus-square" aria-hidden="true"></i>
      </button>
      <button class="decrease" v-on:click="fontSize--">
          decrease
          <i class="fa fa-minus-square" aria-hidden="true"></i>
      </button>
      Font size is: {{ fontSize }}
      <div> -->
          <!-- news uptitle -->
          <!-- <h2 class="newsUptitle">
              {{news.uptitle}}
          </h2> -->

          <!-- news title -->
          <!-- <h1 class="newsTitle">
              {{news.title}}
          </h1> -->

              <!-- newscontent -->
          <!-- <div class="newsContent" v-bind:style="{ fontSize: fontSize + 'px' }">
              {{news.content}}
          </div> -->

          <!-- <div class="keywords">
              <i class="fa fa-tag  fa-rotate-90" aria-hidden="true"></i>
              <ul>
                  <li v-for="tag in news.tags" v-bind:key="tag.index">
                      <span>{{tag}}</span>
                      <i class="fa fa-circle" aria-hidden="true"></i>
                  </li>
              </ul>
          </div> -->

      <!-- </div> -->
    </div>
</template>

<script>

// import listOfNews from '../../data/listOfNews.json';


export default {
    name:'news',
    data() {
        return {
            // news :listOfNews,
            fontSize: 14,
            id:'',
        }
    },
    created :function() {

        console.log(this.$route.path);
        let id = this.$route.path.split("/",3);
        console.log(id[2]);
        this.id = id[2];

    },
    computed : {
      Chosen() {
        return this.$store.state.allnews;
      },
      filterchosen: function(){
        return this.Chosen.filter(news => {
          return news._id.match(this.id);
        })
      }
    }
}
</script>

<style lang="scss">
  .newsUptitle {
    font-size: 16px;
    margin: 4px 0px;
  }
  .newsTitle {
    font-size: 18px;
    color: #30285c;
  }
  .newsPrimaryPic_wrapper {
      display: block;
      margin: auto;
      width: 85%;
      img {
          width: 100%;
      }
  }
  .newsLead {
    padding: 8px;
    background-color: #8c8484;
  }
  .newsContent {
      line-height: 26px;
  }
  .keywords {
      margin: 7px 0px;
      border: 1px solid #edecec;
      padding: 5px;
      ul {
          overflow: auto;
          li {
              float: left;
          }
      }
      i {
          color: #41b883;
          float: left;
          font-size: 17px;
      }
      .fa-circle {
          float: left;
          font-size: 7px;
          margin-top: 6px;
          padding: 0px 2px;
      }
      span {
          float: left;
          padding: 0px 4px;
      }
      .fa-tag {
          margin-top: 6px;
          padding-right: 6px;
          box-sizing: border-box;
      }
  }
</style>


