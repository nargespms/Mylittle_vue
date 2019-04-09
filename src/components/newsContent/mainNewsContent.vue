<template>
    <div class="main_news_content ">
        <newsInfo/>
        <news/>
        <sendComment/>
        <commentsList/>
    </div>
</template>

<script>
  import newsInfo from './newsInfo.vue';
  import news from './news.vue';
  import sendComment from './sendComment.vue';
  import commentsList from './commentsList.vue';

  export default {
      name: 'mainNewsContent',
      components: {
          newsInfo,
          news,
          sendComment,
          commentsList,
      }
  }
</script>

<style lang="scss" scoped>
.main_news_content {
  width: 50%;
  margin: auto;
}
</style>


