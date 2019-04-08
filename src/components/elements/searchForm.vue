<template>
  <div class="searchform_wrapper">
    <form v-on:submit.prevent="sendProps">
      <div class="categories_wrapper">
        <label>categories:</label>
        <select v-model="news.categories">
          <option v-for="category in categories" v-bind:key="category.id">{{category}}</option>
        </select>
      </div>

      <div class="type_wrapper">
        <label> type:</label>
        <select v-model="news.type">
          <option v-for="type in types" v-bind:key="type.id"> {{type}} </option>
        </select>
      </div>
      <button class="submit"> submit</button>

    </form>

    <div class="selectedItems">
      <p>selected category : {{news.categories}}</p>
      <p>selected type : {{news.type}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'searchForm',
  data() {
    return {
      news: {
        categories:'',
        type:'',
      },
      categories:['economics','sports','religion','culture','politic'],
      types : ['InfoGraphic','Film','Video','Reporst','Notes','Gallery']
    }
  },
  computed : {
    },
  methods: {
    sendProps() {
      this.$store.state.news = this.news;
    }
  }
}
</script>

<style lang="scss" scoped>
.searchform_wrapper {
  background-color: #fff;
  width:40%;
  float: right;
  border:1px solid #1a7a74;
  margin-top:24px;
  box-sizing: border-box;
  color:#1a7a74;
  form {
    padding:8px;
    .submit {
      background-color: #4dc0a0;
      border-radius:2px;
      padding:4px 12px;
      margin-top:16px;
      cursor:pointer;
    }
  }
}
.selectedItems {
  padding: 8px;
  color:#0d534e;
}
</style>

