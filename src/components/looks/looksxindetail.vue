<template>
  <div style="background-color:#fff">
      <div class="mui-content">
			<header class="mui-bar mui-bar-nav">
				<router-link to="/looksxin" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></router-link>
				<h1 class="mui-title">
					<img src="../../assets/img/logo.png" class="top-logo" width="40%">
				</h1>
			</header>
		</div>
<div class="mui-content">
	<div class="swiper-container lunbo">
		<ul class="swiper-wrapper" style="padding-left:0">
			<li class="swiper-slide">
				<img :src="detailXin.lunbo3" width="100%">
			</li>
			<li class="swiper-slide">
				<img :src="detailXin.lunbo2" width="100%">
			</li>
			<li class="swiper-slide">
				<img :src="detailXin.lunbo1" width="100%">
			</li>
		</ul>
		<div class="swiper-pagination sp01"></div>
    </div> 
</div>	
    <!-- 标题以及居室详情 -->
    <div class="box">
			<div class="boxred">
				<span class="bilook fl">
					<span class="mui-icon mui-icon-camera"></span>
					<span>必看好房</span>
				</span>
				<ul class=" biul fr">
					<li class="fl">
						<span class="mui-icon mui-icon-checkmarkempty"></span>
						<span>得房率高</span>
					</li>
					<li class="fl">
						<span class="mui-icon mui-icon-checkmarkempty"></span>
						<span>品质小区</span>
					</li>
					<li class="fl">
						<span class="mui-icon mui-icon-checkmarkempty"></span>
						<span>店长推荐</span>
					</li>
				</ul>
			</div>
			<!-- 标题 -->
			<div class="mui-content desc-title">
				<h3 class="title" id="title">{{detailXin.title}}</h3>
				<p class="money">
					<span class="hui">惠</span>
					<span class="hon">618惠住季·万元红包限时领</span>
					<span class="fr">&gt;</span>
				</p>
				<ul class="clearboth priceul">
					<li class="fl">
						<span id="price">{{detailXin.price}}</span><br>
						<span>售价</span>
					</li>
					<li class="fl">
						<span id="huxing">{{detailXin.huxing}}</span><br>
						<span>房型</span>
					</li>
					<li class="fl">
						<span id="area">{{detailXin.area}}</span><br>
						<span>建筑面积</span>
					</li>
				</ul>
				<p class="VR">
					VR语音带看 无需奔走，专人答疑
					<span class="xian">线上带看</span>
				</p>
				<ul class="clearboth m-table">
					<li class="fl">
						<p>单位：<span>{{detailXin.price}}</span></p>
					</li>
					<li class="fl">
						<p>挂牌：<span>2020.05.16</span></p>
					</li>
					<li class="fl">
						<p>朝向：<span>南</span></p>
					</li>
					<li class="fl">
						<p>楼型：<span>板楼</span></p>
					</li>
					<li class="fl">
						<p>楼层：<span>中楼层/6层</span></p>
					</li>
					<li class="fl">
						<p>电梯：<span>无</span></p>
					</li>
					<li class="fl">
						<p>车位：<span>暂无数据</span></p>
					</li>
					<li class="fl">
						<p>用水：<span>民水</span></p>
					</li>
					<li class="fl">
						<p>装修：<span>简装</span></p>
					</li>
					<li class="fl">
						<p>年代：<span>2003年建成</span></p>
					</li>
					<li class="fl">
						<p>用途：<span>普通住宅</span></p>
					</li>
					<li class="fl">
						<p>权属：<span>商品房</span></p>
					</li>
					<li class="fl all">
						<p>小区：
							<span id="positions">{{detailXin.position}}</span>
							<span class="fr">&gt;</span>
						</p>
					</li>
					<li class="fl all">
						<p>其他：
							<span>梯户比</span>
							<span class="fr">&gt;</span>
						</p>
					</li>
					<li class="fl all">
						<p>首付预算：
							<span id="position">净首付159.1万,月供、税点...</span>
							<span class="fr">&gt;</span>
						</p>
					</li>
				</ul>
			</div>
		</div>
    <!-- 好房亮点 -->
    <div class="mui-content liang">
			<div class="liang-top">
				<h4><span class="iconfont icon-zufangfenqi"></span> 好房亮点</h4>
				<p class="ruxuan">凤凰西街共57套房源入选 &gt;</p>
			</div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../assets/img/min07.png">
						<div class="mui-media-body">
							得票率高
							<p class="mui-ellipsis">凤凰西街商圈3室在售房源平均得房率82.6%，本房得票率85.6%</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../assets/img/min08.png">
						<div class="mui-media-body">
							品质小区
							<p class="mui-ellipsis">封闭式管理，非常安全；绿化率35.0%，环境优美</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
    <!-- 房源介绍 -->
    <div class="mui-content fangyuan">
			<h4>房源介绍</h4>
			<div class="mui-slider fangyuanproduce">
			<div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a class="mui-control-item mui-active" href="#id1">
						核心卖点
					</a>
					<a class="mui-control-item" href="#id2">
						户型介绍
					</a>
					<a class="mui-control-item" href="#id3">
						小区介绍
					</a>
					<a class="mui-control-item" href="#id4">
						交通出行
					</a>
				</div>
			</div>
			
			  <div class="mui-slider-group">
				<!--第一个内容区容器-->
				<div class="mui-slider-item mui-control-content" id="id1">
				  <p>满五年不唯一，小区中间位置，中间楼层，东边户三室两厅</p>
				</div>
				<!--第二个内容区-->
				<div class="mui-slider-item mui-control-content" id="id2">
				  <p>此房为三南一北的三居室，有两个房间朝南，一房朝北，客厅朝东的窗户，户型很正，有地下室</p>
				</div>
				<div class="mui-slider-item mui-control-content" id="id3">
				  <p>华阳佳园有五个区域分别是 华彩苑 华贵苑 华明苑 华清苑 华聚苑 小区已经出新了现实看着还不错的广场</p>
				</div>
				<div class="mui-slider-item mui-control-content" id="id4">
				  <p>小区有四个门和各路公交车站，距离二号线云锦路站大概1.3公里。</p>
				</div>
			  </div>
			</div>
		</div>
    <!-- 户型解读 -->
    <div class="mui-content huxing clearboth">
			<h4>户型解读</h4>
			<div class="hu-left fl">
				<h2>9.1</h2>
				<p>户型测评：<span>卓越</span></p>
			</div>
			<div class="hu-right fl">
				<ul>
					<li>
						<span>空间尺度</span>
						<span class="lineT"></span>
						<span class="lineB"></span>
						<span>8.3</span>
					</li>
					<li>
						<span>通透采光</span>
						<span class="lineT"></span>
						<span class="lineB"></span>
						<span>9.7</span>
					</li>
					<li>
						<span>房屋功能</span>
						<span class="lineT"></span>
						<span class="lineB"></span>
						<span>8.9</span>
					</li>
				</ul>
			</div>
			<p class="advantage">查看户型优缺点</p>
		</div>
    <!-- 安心承诺服务 -->
    <div class="mui-content anxin">
			<ul>
				<li>安心承诺服务</li>
				<li>服务用心，让您安心</li>
			</ul>
			<span class="mui-icon mui-icon-forward right"></span>
		</div>
    <!-- 华阳嘉铭园 -->
    <div class="mui-content huayang">
			<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							<span id="titles">{{detailXin.title}}</span>
							<span class="fr text">小区详情</span>
						</a>
					</li>
					<li class="mui-table-view-cell second">
						<h4>参考均价：<span id="junprice">{{detailXin.junprice}}</span></h4>
						<span class="shou">在售房源：3套</span>
						<img src="../../assets/img/fax07-2.png" class="fr">
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							 同小区成交(11)
						</a>
					</li>
					<li class="mui-table-view-cell">
						 <p><span class="circle"></span>3室1厅/101.8㎡/南北</p>
						 <p>单价42712元/平，2020.05.27成交</p>
						 <span class="price fr">435万</span>
					</li>
					<li class="mui-table-view-cell">
						<p><span class="circle"></span> 3室1厅/101.8㎡/南北</p>
						<p>单价42712元/平，2020.05.27成交</p>
						<span class="price fr">435万</span>
					</li>
				</ul>
		</div>
    <!-- 底部咨询 -->
    <div class="g-footer">
			<ul class="clearboth">
				<li class="fl">
					<a href="#">
						<span class="mui-icon mui-icon-star"></span>
						<span>收藏</span>
					</a>
				</li>
				<li class="fl"> 
					<a href="#">
						<span class="mui-icon mui-icon-compose"></span>
						<span>约看房</span>
					</a>
				</li>
				<li class="fl">
					<router-link to="/xinmessage" tag="a">
						<span id="ask">在线问</span>
					</router-link>
				</li>
				<li class="fl">
					<a href="#">
						<span>打电话</span>
					</a>
				</li>
			</ul>
		</div>
  </div>
</template>
<script>
import {Xindetails} from "@/api/index.js"
import "@/assets/css/detailsCss/xin-details.css"
import "@/assets/css/commen.css"
import "@/assets/css/mui.css"
import Swiper from "swiper"
import "@/assets/css/swiper.min.css"
export default {
  name: 'looksxinDetail',
  data () {
    return {
      detailXin:{}
    }
  },
  methods:{
        initSwiper(){
            new Swiper('.lunbo', {
                 pagination: {
                    el: '.sp01',
                },
		        paginationClickable: true,
		        autoplay:true,
		        loop:"ture",
		        speed:500,
		        autoplayDisableOnInteraction : false,
		    });
        }
    },
    mounted(){
		this.initSwiper();
		
    },
  async created(){
		let id = this.$route.query.id;
		this.detailXin = await Xindetails(id);
		console.log("detailXin",this.detailXin);
		localStorage.setItem("xinimg",this.detailXin.personimg);
		let flagxin = false;
		// 自动刷新页面
		if(localStorage.getItem("xinisreload")){
			window.location.reload();
			localStorage.removeItem("xinisreload")
		}
	}
}
</script>
<style scoped>
.top-logo{
	margin-top: 10px;
}
.mui-slider .mui-slider-group.mui-slider-loop{
	height: 250px;
}
.lunbo{
	height: 250px;
}
/* 必看好房 */
.box{
	position: relative;
	width: 100%;
	z-index: 999;
}
.boxred{
	width: 100%;
	height: 30px;
	border-radius: 20px 20px 0 0;
	background-color: red;
	position: absolute;
	top: -30px;
}
.boxred .bilook{
	color: #FFFFFF;
	font-size: 15px;
	font-weight: 700;
	margin-top: 3px;
	margin-left: 10px;
}
.boxred .biul{
	width: 70%;
	height: 100%;
	padding-left: 0;
	margin: 0;
	margin-top: 3px;
	
}
.boxred .biul li{
	font-size: 12px;
	color: #fff;
	padding-left: 10px;
}
/* 标题 */
.desc-title{
	background-color: #fff;
}
.desc-title .title{
	padding: 15px;
	font-size: 22px;
	overflow: hidden;
}
.desc-title .money{
	width: 80%;
	height: 30px;
	margin: 0 auto;
	background-color: rgba(255,0,0,0.1);
	line-height: 30px;
	padding: 0 5px;
	padding-right:15px ;
}
.desc-title .money .hui{
	padding: 3px;
	color: #fff;
	background-color: red;
}
.desc-title .money .hon{
	margin-left: 5px;
	color: red;
}
.desc-title .money .fr{
	color: red;
}
/* 售价 */
.desc-title .priceul{
	width: 100%;
	height: 50px;
	margin: 0 auto;
	padding-left: 0;
	text-align: center;
	margin-top: 10px;
}
.desc-title .priceul li{
	width: 33%;
	height: 80%;
	border-right: .5px solid #CCCCCC;
	font-size: 16px;
}
.desc-title .priceul li span:nth-child(1){
	color: red;
}
.desc-title .priceul li span:nth-child(3){
	font-size: 12px;
	color: #C7C7CC;
}
.desc-title .priceul li:nth-child(3){
	border: none;
}
/* vr */
.desc-title .VR{
	width: 80%;
	height: 30px;
	margin: 0 auto;
	background-color: rgba(0,0,255,0.1);
	line-height: 30px;
	padding: 0 5px;
	padding-right:15px ;
	font-size: 13px;
	font-weight: 700;
	color: #3C3C3C;
}
.desc-title .VR .xian{
	height: 25px;
	line-height: 25px;
	margin-top: 3px;
	font-size: 12px;
	color: #007AFF;
	padding: 0px 5px;
	border: .5px solid #007AFF;
	background-color: #fff;
	float: right;
}
/* 表格 */
.m-table{
	width: 100%;
	height: 260px;
}
.m-table li{
	width: 50%;
}
.m-table li p{
	font-size: 1rem;
}
.m-table li span{
	color: #3C3C3C;
}
.m-table li.all{
	width: 100%;
	padding-right: 13px;
}
.m-table li span.fr{
	color: #ccc;
}
#position{
	color: red;
}
.mui-content .liang-top{
	width: 100%;
	height: 70px;
	background-color: #FFf;
	padding-left: 30px;
	padding-top: 10px;
}
.mui-content .liang-top h4 span{
	font-size: 30px;
	color: red;
	margin-right: 5px;
}
.mui-table-view::before,
.mui-table-view::after{
	height: 0;
}
.mui-table-view li::before,
.mui-table-view li::after{
	height: 0;
}
.mui-slider .mui-segmented-control.mui-segmented-control-inverted ~ .mui-slider-group .mui-slider-item{
	border: 0;
}
.fangyuan{
	background-color: #FFFFFF;
}
.fangyuan h4{
	padding-left: 30px;
}
.mui-slider{
	width: 95%;
	margin: 0 auto;
}
.fangyuanproduce{
	width: 90%;
	/* margin-left: 20px; */
	padding-left: 10px;
	padding-right: 10px;
}
.mui-slider .mui-scroll-wrapper .mui-scroll .mui-control-item{
	padding: 0 10px;
}
/* 户型解读 */
.huxing{
	width: 100%;
	height: 130px;
	background-color: #FFFFFF;
}
.huxing h4{
	padding-left: 30px;
}
.huxing .hu-left{
	width: 30%;
	height: 80%;
	text-align: center;
}
.huxing .hu-left h2{
	color: red;
}
.huxing .hu-left p{
	font-size: 12px;
	color: #3c3c3c;
}
.huxing .hu-left p span{
	color: #007AFF;
}
.huxing .hu-right{
	width: 60%;
}
.huxing .hu-right ul{
	padding-left: 20px;
	margin: 0;
	border-left: .5px solid #CCCCCC;
}
.huxing .hu-right ul li{
	position: relative;
}
.huxing .hu-right ul li span{
	font-size: 12px;
}
.huxing .hu-right ul li span:nth-child(2){
	display: inline-block;
	width: 90px;
	height: 5px;
	background-color: #007AFF;
	position: absolute;
	top: 50%;
	left: 50px;
	border-radius: 3px;
}
.huxing .hu-right ul li span:nth-child(3){
	display: inline-block;
	width: 120px;
	height: 5px;
	background-color: #CCCCCC;
	border-radius: 3px;
}
.huxing .hu-right ul li:nth-child(2) span:nth-child(2){
	width: 115px;
}
.huxing .hu-right ul li:nth-child(3) span:nth-child(2){
	width: 105px;
}
.advantage{
	width: 80%;
	height: 30px;
	line-height: 30px;
	color: #007AFF;
	font-size: 16px;
	margin: 0 auto;
	margin-top: 80px;
	background-color: rgba(0,0,255,0.1);
	text-align: center;
}
.anxin{
	margin: 0 auto;
	margin-top: 10px;
	width: 90%;
	height: 50px;
	position: relative;
	/* background-color: #007AFF; */
	padding: 10px 5px;
}
.anxin ul{
	padding: 0;
	margin: 0;
}
.anxin ul li{
	color: #FFFFFF;
	margin-bottom: 0px;
	padding-left: 10px;
}
.anxin ul li:nth-child(1){
	text-align: left;
	letter-spacing: 2px;
	color: red;
}
.anxin ul li:nth-child(2){
	font-size: 12px;
	color: #3c3c3c;
}
.anxin .right{
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 20px;
	color: #fff;
}
/* 华阳嘉铭园 */
.huayang{
	width: 100%;
	height: 300px;
	margin-bottom: 40px;
}
.huayang ul li a .text{
	font-size: 12px;
	padding-right: 20px;
	color: #3C3C3C;
}
.huayang ul li.second{
	position: relative;
}
.huayang ul li.second h4{
	font-size: 14px;
	width: 80%;
}
.huayang ul li.second h4 span{
	color: red;
}
.huayang ul li.second .shou{
	font-size: 13px;
	color: #CCCCCC;
}
.huayang ul li.second img{
	width: 30%;
	height: 70%;
	position: absolute;
	top: 10px;
	right: 20px;
}
.huayang ul li p{
	font-size: 14px;
	color: #3c3c3c;
}
.huayang ul li p:nth-child(2){
	font-size: 12px;
	color: #CCCCCC;
	padding-left: 15px;
}
.huayang ul li p .circle{
	display: inline-block;
	width: 10px;
	height: 10px;
	background-color: #CCCCCC;
	border-radius: 50%;
	margin-right: 10px;
}
.huayang ul li .price{
	position: absolute;
	top: 10px;
	right: 10px;
	color: red;
	
}
/* 底部咨询 */
.g-footer{
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	/* justify-content: space-around; */
	width: 100%;
	height: 3.125rem;
	background-color: white;
	z-index: 1000;
	
}
.g-footer ul{
	width: 100%;
	height: 100%;
	padding: 0;
	padding-left: 10px;
	margin-top:0px;
}
.g-footer ul li:nth-child(1){
	width: 16%;
	margin-right: 10px;
	
}
.g-footer ul li:nth-child(2){
	width: 20%;
	margin-right: 10px;
}
.g-footer ul li:nth-child(3){
	width: 25%;
	height: 60%;
	margin-right: 10px;
	background-color: #FFFFFF;
	border: 1px solid red;
	text-align: center;
	padding-top: 5px;
	border-radius: 5px;
	margin-top: 10px;
}
.g-footer ul li:nth-child(3) a{
	font-size: 14px;
	font-weight: 700;
	color: red;
}
.g-footer ul li:nth-child(4) a{
	font-size: 14px;
	color: #FFFFFF;
	font-weight: 700;
}
.g-footer ul li:nth-child(4){
	width: 25%;
	height: 60%;
	background-color: red;
	margin-right: 0;
	text-align: center;
	padding-top: 5px;
	border-radius: 5px;
	margin-top: 10px;
}
.g-footer ul li a{
	display: inline-block;
	text-align: center;
	font-size: 0.875rem;
	color: #000000;
}
/* 轮播图 */
.banner{width: 100%;}
.banner ul li img{width: 100%;display: block;}
.banner .sp01 >>> span{background-color: #fff;opacity: .7;}
.banner .sp01 >>> .swiper-pagination-bullet-active{background-color: white;background-color: #ffe037; opacity: 1;}
.boxred .biul li{
  padding-left: 2px;
}
.desc-title{
  background-color:#fff;
}
.m-table {
  padding-left: 20px;
}
.huxing,
.fangyuan,
.liang{
  background-color: #fff!important;
}
.mui-slider .mui-segmented-control.mui-segmented-control-inverted ~ .mui-slider-group .mui-slider-item{
  border: none;
}
.ruxuan{
 font-size: 14px;
}
.huxing .hu-right{
  width: 65%;
}
.huxing .hu-left{
  height: 50%;
}
</style>
