<template>
    <div class="outer_main_header ">
        <div class="logo_wrapper">
            <logo/>
        </div>
        <div class="main_navigation">
            <uppermenu/>
        </div>

    </div>
</template>

<script>
  import logo from './logo.vue'
  import uppermenu from './uppermenu.vue'

  export default {
    components: {
      logo,
      uppermenu,
    },
  }
</script>

<style lang="scss" scoped>
  .outer_main_header {
      background-color:#15243e;
  }
</style>


