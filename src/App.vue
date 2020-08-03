<template>
  <div id="app">
    <page-footer v-show="$route.meta.isShow"></page-footer>
    <router-view/>
  </div>
</template>

<script>
import PageFooter from "./pages/pagefooter.vue"
export default {
  name: 'App',
  components:{
    PageFooter
  }
}
</script>

<style>
#app {
  
}
</style>
