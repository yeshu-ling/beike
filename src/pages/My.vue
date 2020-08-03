<template>
  <div>
      <my-header></my-header>
      <my-content></my-content>
  </div>
</template>

<script>
import MyHeader from "@/components/My/myHeader.vue"
import MyContent from "@/components/My/myContent.vue"
// import "../assets/css/mui.css"
export default {
  name: 'Index',
  data () {
    return {
      
    }
  },
  components:{
      MyHeader,
      MyContent
  },
  created(){
    if(localStorage.getItem('myreload')){
      window.location.reload();
      localStorage.removeItem('myreload');
    }
  }
}
</script>
<style scoped>

</style>
