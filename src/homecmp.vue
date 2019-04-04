<template>
  <div>
    <myheader/>
    <div class="main_news_wrapper ">
        <!-- <mainNewsContent/> -->
        <NewsList/>
    </div>
    <div class="sidebar">
        <wrappertab/>
        <survey/>
    </div>
  </div>
</template>

<script>
import myheader from './components/header/myheader.vue';
import NewsList from './components/elements/NewsList.vue';
import wrappertab from './components/elements/wrappertab.vue';
import survey from './components/content/survey.vue';
// import mainNewsContent from './components/newsContent/mainNewsContent.vue';

export default {
 components: {
        myheader,
        NewsList,
        wrappertab,
        survey,
    },
}
</script>

<style lang="scss" scoped>
.sidebar {
    width: 40%;
    float: right;
    box-sizing: border-box;
    padding-right: 16px;
    margin-top: 24px;
    box-sizing: border-box;

}
.main_news_wrapper {
    width: 60%;
    float: right;
    background-color: #ccccc6;
    padding: 12px;
    box-sizing: border-box;
    margin-top: 24px;
}

</style>
