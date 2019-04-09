<template >
    <div class="news_info">
        <span>
            newscode : {{id}}  /
        </span>
        <!-- <span>
            newsCategory : {{ mynews.newsCategory }}  /
        </span> -->
        <!-- <time>newsPublisheDate : {{mynews.datePublished }}</time> -->
    </div>
</template>

<script>
  // import mainNewsData from '../../data/mainNewsData.json'

  export default {

      name: 'newsInfo',
      data() {
          return {
              // mynews:mainNewsData,
              id: '',
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
    }

  }
</script>

<style lang="scss" scoped>
  .news_info {

      background-color: #2ab7ae;
      padding: 6px;
      margin-bottom: 4px;
  }
</style>

