<template>
  <div class="g-footer">
    <a  :class="{'active':idx==1}" @click="change(1)">
        <span class="mui-icon mui-icon-home"></span>
        <router-link to="/" tag="span">首页</router-link>
    </a>
    <a :class="{'active':idx==2}" @click="change(2)">
        <span class="iconfont icon-zixun"></span>
        <router-link to="/looksfa" tag="span">看点</router-link>
    </a>
    <a :class="{'active':idx==3}" @click="change(3)">
        <span class="iconfont icon-xiaoxi"></span>
        <router-link to="/message" tag="span">消息</router-link>
    </a>
    <a :class="{'active':idx==4}" @click="change(4)">
        <span class="iconfont icon-wode"></span>
        <router-link to="/my" tag="span">我的</router-link>
    </a>
</div>
</template>

<script>
import "../assets/css/footer.css"
export default {
  name: 'HelloWorld',
  data () {
    return {
      flag1:true,
      idx:1
    }
  },
methods:{
  change(i){
    this.idx = i;
    // console.log("thisidx",this.idx);
  }
}
}
</script>
<style scoped>

</style>
