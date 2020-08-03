<template>
  <div style="background-color:#fff">
      <index-header></index-header>
      <small-logo></small-logo>
      <index-advise></index-advise>
      <index-help></index-help>
      <index-message></index-message>
      <index-today></index-today>
  </div>
</template>

<script>
import IndexHeader from "@/components/Index/Indexheader.vue"
import SmallLogo from "@/components/Index/IndexSmallLogo.vue"
import IndexAdvise from "@/components/Index/Indexadvise.vue"
import IndexHelp from "@/components/Index/Indexhelp.vue"
import IndexMessage from "@/components/Index/IndexMessage.vue"
import IndexToday from "@/components/Index/IndexToday.vue"
export default {
  name: 'Index',
  data () {
    return {
      
    }
  },
  components:{
      IndexHeader,
      SmallLogo,
      IndexAdvise,
      IndexHelp,
      IndexMessage,
      IndexToday
  },
  created(){
    localStorage.setItem('msgisreload',true);
    localStorage.setItem('myreload',true);
    if(localStorage.getItem('indexreload')){
      window.location.reload();
      localStorage.removeItem('indexreload');
    }
  }
}
</script>
<style scoped>

</style>
