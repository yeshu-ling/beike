<template>
  <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
	<div class="mui-scroll">
		<a to="/looksfa" class="mui-control-item" :class="{'mui-active':idx==1}" @click="change(1)" >
			<router-link to="/looksfa" tag="span">发现</router-link>
		</a>
		<a to="/lookser" class="mui-control-item" :class="{'mui-active':idx==2}" @click="change(2)">
			<router-link to="/lookser" tag="span">必看二手</router-link>
		</a>
		<a to="/looksxin" class="mui-control-item" :class="{'mui-active':idx==3}" @click="change(3)">
			<router-link to="/looksxin" tag="span">优选新房</router-link>
		</a>
		<a to="/lookszu" class="mui-control-item" :class="{'mui-active':idx==4}" @click="change(4)">
			<router-link to="/lookszu" tag="span">品质租房</router-link>
		</a>
	</div>
</div>
</template>

<script>
export default {
  name: 'LooksHeader',
  data () {
    return {
      idx:1
    }
  },
  methods:{
	  change(i){
		  this.idx = i;
	  }
  }
}
</script>
<style scoped>
li{
	list-style: none;
}
</style>
