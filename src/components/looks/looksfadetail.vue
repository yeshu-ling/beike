<template>
  <div>
    <div class="mui-content">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="history.back();"></a>
            <h1 class="mui-title"></h1>
            <span class="mui-icon mui-icon-upload"></span>
        </header>
    </div>
	<div class="mui-content m-title">
		<h2 id="title">{{detailFa.title}}</h2>
		<div class="m-box">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="detailFa.falogo" id="falogo">
						<div class="mui-media-body louzheng">
							<span id="fatitle">{{detailFa.fatitle}}</span>
							<p class="mui-ellipsis" id="fatime">{{detailFa.fatime}}</p>
							<span class="guan">
								＋关注
							</span>
						</div>
						
					</a>
				</li>
				
			</ul>
		</div>
	</div>
	<div class="mui-content m-text">
		<p class="img">
			<img :src="detailFa.faimg" id="faimg" width="100%" height="100%"/>
		</p>
		<h4>
			<span class="title"><span>端午市场数据</span></span>
		</h4>
		<p class="innertext">
			<span class="fatext" v-for="index in 9" :key="index">
				{{detailFa.fatext}}
			</span>
		</p>
		<h4>
			<span class="title"><span>专项整治</span></span>
		</h4>
		<p class="innertext">
			<span class="fatext" v-for="index in 9" :key="index">
				{{detailFa.fatext}}
			</span>
		</p>
		<h4>
			<span class="title"><span>城市建设</span></span>
		</h4>
		<p class="innertext">
			<span class="fatext"  v-for="index in 9" :key="index">
				{{detailFa.fatext}}
			</span>
		</p>
		<ul class="endul">
			<li class="fl endli">二手房</li>
			<li class="fl endli">其他</li>
			<li class="fl endli">全国</li>
			<li class="fl endli">公用</li>
			<li class="fr endlir">热度5871</li>
		</ul>
	</div>
        <!-- 为您推荐 -->
        <div class="mui-content m-jian">
			<h4 class="m-jian-title">为您推荐</h4>
			<div class="m-jianbox">
				<div class="jianleft fl">
					<img class="jianimg" src="../../assets/img/zu01-2.jpg" width="100%" height="100%">
				</div>
				<div class="jianright fr">
					<div class="jianbody">
						华阳佳园华明苑2002年商品....
						<p>3室2厅/101.8㎡/南</p>
						<p>VR房源</p>
						<p>475万<span class="jian-price">46660.1元/平</span> </p>
					</div>
				</div>
				<div class="m-zixun">
					<ul class="fr clearboth">
						<li class="fl">打电话</li>
						<li class="fl">在线问</li>
					</ul>
				</div>
			</div>
			<div class="m-jianbox">
				<div class="jianleft fl">
					<img class="jianimg" src="../../assets/img/zu07.jpg" width="100%" height="100%">
				</div>
				<div class="jianright fr">
					<div class="jianbody">
						名称世纪园 3室2厅 南
						<p>3室2厅/99.2㎡/南</p>
						<p>VR房源</p>
						<p>458万<span class="jian-price">46169.4元/平</span> </p>
					</div>
				</div>
				<div class="m-zixun">
					<ul class="fr clearboth">
						<li class="fl">打电话</li>
						<li class="fl">在线问</li>
					</ul>
				</div>
			</div>
			<div class="m-jianbox">
				<div class="jianleft fl">
					<img class="jianimg" src="../../assets/img/zu02-1.jpg" width="100%" height="100%">
				</div>
				<div class="jianright fr">
					<div class="jianbody">
						全新装修，品牌家电，拎包入住
						<p>3室1厅/99.19㎡/南 北</p>
						<p>VR房源</p>
						<p>475万<span class="jian-price">47887.9元/平</span> </p>
					</div>
				</div>
				<div class="m-zixun">
					<ul class="fr clearboth">
						<li class="fl">打电话</li>
						<li class="fl">在线问</li>
					</ul>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import {Fadetails} from "@/api/index.js"
import "@/assets/css/detailsCss/fadetails.css"
import "@/assets/css/commen.css"
import "@/assets/css/mui.css"
export default {
  name: 'FaDetails',
  data () {
    return {
      detailFa:{}
    }
  },
  computed:{
	
  },
	async created(){
		let id = this.$route.query.id;
		this.detailFa = await Fadetails(id);
		// console.log("fadetails",this.detailFa);
	}
}
</script>
<style scoped>
.m-jian,
.m-text,
.m-title {
	background-color: #fff!important;
}
.m-jian{
	margin-top: -5px;
	margin-bottom: 40px;
}
</style>
