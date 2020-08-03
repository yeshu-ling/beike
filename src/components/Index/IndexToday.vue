<template>
  <div class="mui-content m-jin">
		<div class="jin-top">
			<ul class="clearboth">
				<li class="fl" :class="{'actives':idx==1}" @click="changeIdx(1)">
					<a href="javascript:;" id="today">今日必看</a>
				</li>
				<li class="fl" :class="{'actives':idx==2}" @click="changeIdx(2)">
					<a href="javascript:;" id="hot">热卖新房</a>
				</li>
				<li class="fl" :class="{'actives':idx==3}" @click="changeIdx(3)">
					<a href="javascript:;" id="jiang">降价急售</a>
				</li>
				<li class="fl" :class="{'actives':idx==4}" @click="changeIdx(4)">
					<a href="javascript:;" id="er">二手攻略</a>
				</li>
			</ul>
		</div>
		<!-- 第一张 -->
		<div class="content" v-show="flag[1].flag1">
			<ul class="clearboth">
				<li class="fl">
					<div class="libox">
						<p class="first">二手</p>
						<p class="second">200万内</p>
						<p class="third">红山一居推荐</p>
					</div>
					
				</li>
				<li class="fl">
					<div class="libox">
						<p>二手</p>
						<p class="second">精选一居室</p>
						<p class="third">聚焦秦淮好房</p>
					</div>
					
				</li>
				<li class="fl">
					<div class="libox">
						<p>二手</p>
						<p class="second">低总价推荐</p>
						<p class="third">月苑两居好房</p>
					</div>
				</li>
			</ul>
		</div>
		<!-- 第二部分 -->
		<div class="content02" v-show="flag[2].flag1">
			<ul class="clearboth">
				<li class="fl">
					<div class="libox">
						<p class="first">独家优惠</p>
						<p class="second">立减3万元</p>
						<p class="third">央企>金茂悦</p>
					</div>
				</li>
				<li class="fl">
					<div class="libox">
						<p>年终大促</p>
						<p class="second">100好盘</p>
						<p class="third">千套特价好房</p>
					</div>
				</li>
				<li class="fl">
					<div class="libox">
						<p>无理由退</p>
						<p class="second">最长7天</p>
						<p class="third">贝壳新房保障</p>
					</div>
				</li>
			</ul>
		</div>
		<!-- 第三部分-->
		<div class="content03" v-show="flag[3].flag1">
			<ul class="clearboth">
				<li class="fl">
					<div class="libox">
						<p class="first">值得买</p>
						<p class="second">85万/套</p>
						<p class="third">主城特惠房</p>
					</div>
				</li>
				<li class="fl">
					<div class="libox">
						<p>近地铁</p>
						<p class="second">9号线优选</p>
						<p class="third">64小区</p>
					</div>
				</li>
				<li class="fl">
					<div class="libox">
						<p>降价榜</p>
						<p class="second">直降75万</p>
						<p class="third">限时急售</p>
					</div>
				</li>
			</ul>
		</div>
		<!-- 第四部分 -->
		<div class="content04" v-show="flag[4].flag1">
			<ul class="clearboth">
				<li class="fl">
					<div class="libox">
						<p class="first">优选房</p>
						<p class="second">主城核心区</p>
						<p class="third">Top5小区</p>
					</div>
				</li>
				<li class="fl">
					<div class="libox">
						<p class="first">刚需房</p>
						<p class="second">经典小二居</p>
						<p class="third">首付30万</p>
					</div>
				</li>
				<li class="fl">
					<div class="libox">
						<p class="first">值得买</p>
						<p class="second">单价2字头</p>
						<p class="third">精装省税房</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import "../../assets/css/indexCss/headerSearch.css";
import "../../assets/css/mui.css"
export default {
  name: 'Index',
  data () {
    return {
	  idx:1,
	  flag:[
		  {flag1:false},//表示首个元素
		  {flag1:true},
		  {flag1:false},
		  {flag1:false},
		  {flag1:false},
	  ]
    }
  },
  methods:{
	  changeIdx(i){
		  this.idx=i;
		//   this.flag[i] = true;
		  for(let n = 1;n < 5;n++){
			  if(n==i){
				   this.flag[n].flag1 = true;
			  }else{
				  this.flag[n].flag1 = false;
			  }
		  }
		  console.log("idx",this.idx);
	  }
  }
}
</script>
<style scoped>
.m-jin{
    background-color: #ffffff;
}
</style>
