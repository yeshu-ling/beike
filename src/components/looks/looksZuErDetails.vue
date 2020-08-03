<template>
  <div style="background-color:#fff">
    <div class="mui-content">
			<header class="mui-bar mui-bar-nav">
				<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="history.back();"></a>
				<h1 class="mui-title">
					<img src="../../assets/img/logo.png" class="top-logo" >
				</h1>
			</header>
		</div>
    <!-- 轮播图 -->
		<div class="swiper-container lunbo">
		<ul class="swiper-wrapper" style="padding-left:0;height:272px">
			<li class="swiper-slide" width="100%">
				<img :src="detailzuer.lunbo01" width="100%" height="100%">
			</li>
			<li class="swiper-slide" height="100%">
				<img :src="detailzuer.lunbo02" width="100%" height="100%">
			</li>
			<li class="swiper-slide" height="100%">
				<img :src="detailzuer.lunbo03" width="100%" height="100%">
			</li>
		</ul>
		<div class="swiper-pagination sp01"></div>
    </div> 
    <!-- 描述 -->
    <div class="mui-content m-dec">
			<h4>
				<i id="title">{{detailzuer.title}}</i>
				<span>关注</span>
				<span class="iconfont icon-guanzhu m-dec-guan"></span>
				
			</h4>
			<ul class="clearboth m-dec-ul">
				<li class="fl">
					<p>价格</p>
					<p id="price">{{detailzuer.price}}</p>
				</li>
				<li class="fl">
					<p>户型</p>
					<p id="huxing">{{detailzuer.huxing}}</p>
				</li>
				<li class="fl">
					<p>面积</p>
					<p id="area">{{detailzuer.area}}</p>
				</li>
			</ul><br>
			<p class="m-new">
				<span>新上</span>
				<span>近地铁</span>
				<span>临时看房</span>
			</p>
			<ul class="clearboth m-table">
				<li class="fl">
					<p>面积：<span>{{detailzuer.area}}</span></p>
				</li>
				<li class="fl">
					<p>朝向：<span>南北</span></p>
				</li>
				<li class="fl">
					<p>维护：<span>今天</span></p>
				</li>
				<li class="fl">
					<p>入住：<span>随时入住</span></p>
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
					<p>用电：<span>民电</span></p>
				</li>
				<li class="fl">
					<p>燃气：<span>有</span></p>
				</li>
				<li class="fl">
					<p>采暖：<span>暂无数据</span></p>
				</li>
				<li class="fl all">
					<p>租期：
						<span>暂无数据</span>
						<span class="fr">咨询日期&gt;</span>
					</p>
				</li>
				<li class="fl all">
					<p>看房：
						<span>需提前预约</span>
						<span class="fr">咨询看房&gt;</span>
					</p>
				</li>
				<li class="fl all">
					<p>小区：
						<span id="position">{{detailzuer.position}}</span>
						<span class="fr">查看小区&gt;</span>
					</p>
				</li>
			</ul>
		</div>
    <!-- 真实房源 -->
    <div class="mui-content m-reahouse">
			<div class="m-reall">
				<h3>真实房源，假一赔百元<span>&gt;</span></h3>
				<p>房源验真编号：NJ2549068567819853824</p>
				<p>机构房源<span class="iconfont icon-mingpian1"></span>房源发布机构</p>
			</div>
		</div>
    <!-- 链家 -->
    <div class="mui-content m-home">
			<div class="lian-home">
				<div class="lian-left fl">
					<img src="../../assets/img/lianjia.jpg" width="100%" height="90%" >
				</div>
				<div class="lian-right fr">
					<h4>链家</h4>
					<p>链上一座城，租到一个家</p>
					<span class="lian">详情 &gt;</span>
					
				</div>
			</div>
		</div>
    <!-- 位置及周边 -->
    <div class="mui-content m-posi">
			<div class="m-posi-main">
				<h4>位置及周边</h4>
				<!-- <img src="../../assets/img/ditu.png" width="100%" > -->
				<map-del></map-del>
			</div>
		</div>
    <!-- 路线 -->
    <ul class="mui-table-view m-lu">
				<li class="mui-table-view-cell m-lu-li">
					<a class="mui-navigate-right">
						<span>常府街</span>
						<span>3号线</span>
						<span class="fr">267米</span>
					</a>
				</li>
				<li class="mui-table-view-cell m-lu-li">
					<a class="mui-navigate-right">
						 <span>夫子庙</span>
						 <span>3号线</span>
						 <span class="fr">871米</span>
					</a>
				</li>
				<li class="mui-table-view-cell m-lu-li">
					<a class="mui-navigate-right">
						 <span>张府园</span>
						 <span>1号线</span>
						 <span class="fr">910米</span>
					</a>
				</li>
			</ul>
      <!-- 房源简介 -->
      <div class="mui-content m-yuan">
				<h4>房源简介</h4>
				<ul class="mui-table-view mui-grid-view m-yuan-ul">
					<li class="mui-table-view-cell mui-media mui-col-xs-2">
						<a href="#">
							<img class="mui-media-object" src="../../assets/img/xi01.jpg">
							<div class="mui-media-body line-throw">洗衣机</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-2">
						<a href="#">
							<img class="mui-media-object" src="../../assets/img/xi02.jpg">
							<div class="mui-media-body line-throw">空调</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-2">
						<a href="#">
							<img class="mui-media-object" src="../../assets/img/xi03.jpg">
							<div class="mui-media-body line-throw">衣柜</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-2">
						<a href="#">
							<img class="mui-media-object" src="../../assets/img/xi04.jpg">
							<div class="mui-media-body line-throw">电视</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-2">
						<a href="#">
							<img class="mui-media-object" src="../../assets/img/xi05.jpg">
							<div class="mui-media-body line-throw">冰箱</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-2">
						<a href="#">
							<img class="mui-media-object" src="../../assets/img/xi06.jpg">
							<div class="mui-media-body line-throw">热水器</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-2">
						<a href="#">
							<img class="mui-media-object" src="../../assets/img/xi07.jpg">
							<div class="mui-media-body line-throw">床</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-2">
						<a href="#">
							<img class="mui-media-object" src="../../assets/img/xi08.jpg">
							<div class="mui-media-body line-throw">暖气</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-2">
						<a href="#">
							<img class="mui-media-object" src="../../assets/img/xi09.jpg">
							<div class="mui-media-body line-throw">宽带</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-2">
						<a href="#">
							<img class="mui-media-object" src="../../assets/img/xi10.jpg">
							<div class="mui-media-body line-throw">天然气</div>
						</a>
					</li>
				</ul>
			</div>
      <!-- 费用详情 -->
      <div class="mui-content m-fei">
				<div class="m-fei-main">
					<h4>费用详情 <span class="fr">咨询更多费用明细 &gt;</span></h4>
					<p>年租价<span>(当租金不足1年时租金可能会上浮，详情管家)</span></p>
					<ul class="clearboth m-fei-ul">
						<li class="fl">
							<p>付款方式</p>
							<p class="fet-zi">需咨询</p>
						</li>
						<li class="fl">
							<p>租金</p>
							<span>(元)</span>
							<p class="red" id="pricenum">{{detailzuer.pricenum}}</p>
						</li>
						<li class="fl">
							<p>押金</p>
							<span>(元)</span>
							<p id="pricenum2">{{detailzuer.pricenum2}}</p>
						</li>
						<li class="fl">
							<p>服务费</p>
							<span>(元)</span>
							<p>0</p>
						</li>
						<li class="fl">
							<p>中介费</p>
							<span>(元)</span>
							<p>需咨询</p>
						</li>
					</ul>
				</div>
			</div>
      <!-- 议价 -->
      <div class="mui-content m-home">
				<div class="lian-home">
					<div class="lian-left fl">
						<img :src="detailzuer.personimg" width="90%" height="90%" id="jinpeople">
					</div>
					<div class="lian-right fl">
						<h4 class="m-yi">约<span id="perscend">{{detailzuer.percend}}</span>的房东接受议价</h4>
						<p class="m-yi-p">联系经纪人帮您询问房东最低售价</p>
						<span class="kan">联系砍价 &gt;</span>	
					</div>
				</div>
			</div>
      <!-- 推荐经纪人 -->
      <div class="mui-content m-tui">
				<div class="m-jian-main">
					<h4>推荐经纪人</h4>
					<ul class="mui-table-view">
							<li class="mui-table-view-cell">
								<img src="../../assets/img/huangjijun.jpg" class="fl">
								<div class="m-jian-middle fl">
									<h4>陶皖凌<span class="iconfont icon-mingpian1"></span> </h4>
									<p>评分:5.0 | 47次评价</p>
								</div>
								<div class="m-jian-right fr">
									<span class="iconfont icon-xiaoxi"></span>
									<span class="iconfont icon-iconfontdianhua1 "></span>
								</div>
							</li>
							<li class="mui-table-view-cell">
								<img src="../../assets/img/ren02.jpg" class="fl">
								<div class="m-jian-middle fl">
									<h4>赵子琼<span class="iconfont icon-mingpian1"></span> </h4>
									<p>评分:4.2 | 17次评价</p>
								</div>
								<div class="m-jian-right fr">
									<span class="iconfont icon-xiaoxi"></span>
									<span class="iconfont icon-iconfontdianhua1 "></span>
								</div>
							</li>
							<li class="mui-table-view-cell">
								<img src="../../assets/img/ren07.jpg" class="fl">
								<div class="m-jian-middle fl">
									<h4>孙甜甜<span class="iconfont icon-mingpian1"></span> </h4>
									<p>评分:4.8 | 23次评价</p>
								</div>
								<div class="m-jian-right fr">
									<span class="iconfont icon-xiaoxi"></span>
									<span class="iconfont icon-iconfontdianhua1 "></span>
								</div>
							</li>
						</ul>
				</div>
			</div>
      <!-- 帮我出租 -->
      <div class="mui-content m-help">
				<div class="m-help-main">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							<h3 class="help">帮我出租</h3>
							<p class="hoster">我是业主，有好房出租</p>
							<p class="fangyuan">发布房源</p>
						</li>
						
					</ul>
					<p class="bian-num">房源编号：NJ2549068567819853824</p>
					<p>贝壳官方投诉电话：10106188</p>
				</div>
				
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
						<router-link to="/ermessage" tag="a">
							<span id="ask">在线咨询</span>
						</router-link>
					</li>
					<li class="fl">
						<a href="#">
							<span>电话咨询</span>
						</a>
					</li>
				</ul>
			</div>
  </div>
</template>
<script>
import MapDel from "./map.vue"
import {ZuErdetails} from "@/api/index.js"
import "@/assets/css/detailsCss/details.css"
import "@/assets/css/commen.css"
import "@/assets/css/mui.css"
import Swiper from "swiper"
import "@/assets/css/swiper.min.css"
export default {
  name: 'looksZuErdetail',
  data () {
    return {
      detailzuer:{}
    }
  },
  components: {
    MapDel,
  },
  computed:{},
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
		this.detailzuer = await ZuErdetails(id);
		console.log("detailzuer",this.detailzuer);
		localStorage.setItem("personimg",this.detailzuer.personimg)
		// 自动刷新页面
		if(localStorage.getItem('erisreload')){
			window.location.reload();
			localStorage.removeItem('erisreload');
		}
	}
}
</script>
<style scoped>
/* 顶部logo */
.top-logo{
	width: 6.25rem;
	margin-top: 0.625rem;
}
.m-dec{
	margin-top: 0.625rem;
	width: 100%;
	padding-left: 0.9375rem;
	padding-right: 0.9375rem;
	overflow: hidden;
	background-color: #fff;
}
.m-dec h4{
	font-size: 1.25rem;
}
.m-dec h4 span{
	float: right;
	font-weight: 100;
	font-size: 0.875rem;
}
.m-dec h4 span.m-dec-guan{
	display: inline-block;
	margin-right: 5px;
	font-size: 1.25rem;
}
.m-dec .m-dec-ul{
	width: 100%;
	height: 3rem;
	padding-left: 0rem;
}
.m-dec .m-dec-ul li{
	width: 24%;
	border-right: 0.03125rem solid #CCCCCC;
	margin-right: 1.5625rem;
}
.m-dec .m-dec-ul li:last-child{
	border: none;
}
.m-dec .m-dec-ul li p:nth-child(2){
	color: red;
	font-size: 1rem;
	font-weight: 700;
}
.m-dec .m-new{
	width: 100%;
}
.m-dec .m-new span{
	padding: 0.3125rem;
	padding-top: 0.125rem;
	padding-bottom: 0.125rem;
	border-radius: 0.1875rem;
	margin-right: 1.25rem;
	color: #0086B3;
	background-color: #92C2D8;
}
.m-dec .m-table{
	width: 100%;
}
.m-dec .m-table li{
	width: 50%;
}
.m-dec .m-table li p{
	font-size: 1rem;
}
.m-dec .m-table li span{
	color: #3C3C3C;
}
.m-dec .m-table li.all{
	width: 100%;
}
.m-dec .m-table li span.fr{
	color: #007AFF;
}
.mui-slider .mui-slider-group .mui-slider-item{
	height: 250px;
}
/* 真实房源 */
.m-reahouse{
	width: 100%;
}
.m-reahouse .m-reall{
	width: 100%;
	background: url(../../assets/img/del_bg-min.jpg) no-repeat;
	background-size: 25.9375rem 6.25rem;
	overflow: hidden;
	padding-left: 1.25rem;
}
.m-reahouse .m-reall h3{
	font-size: 1.25rem;
	margin-top: 1.25rem;
	color: #3C3C3C;
	margin-bottom: 0.625rem;
}
.m-reahouse .m-reall h3 span{
	color: #CCCCCC;
	margin-left: 15px;
}
.m-reahouse .m-reall p{
	color: #3C3C3C;
}
.m-reahouse .m-reall p span{
	margin-left: 0.9375rem;
	margin-right: 0.3125rem;
}
.m-reahouse .m-reall p:nth-of-type(1){
	line-height: 0.9375rem;
	margin-bottom: 0.3125rem;
}
/* 链家 */
.m-home{
	width: 100%;
	padding-left: 0.9375rem;
	padding-right: 0.9375rem;
	height: 5.625rem;
	background-color: #FFFFFF;
	margin-top: 1.25rem;
	margin-bottom: 1.25rem;
}
.m-home .lian-home{
	width: 100%;
	height: 100%;
	border-top: 0.03125rem solid #CCCCCC;
	border-bottom: 0.03125rem solid #CCCCCC;
	padding-top: 0.625rem;
}
.m-home .lian-home .lian-left{
	width: 20%;
	height: 4.375rem;
}
.m-home .lian-home .lian-left img{
	border-radius: 50%;
	border: 0.0625rem solid #CCCCCC;
}
.m-home .lian-home .lian-right{
	width: 73%;
	margin-left: 1.25rem;
	padding-top: 0.625rem;
	position: relative;
}
.m-home .lian-home .lian-right .lian{
	position: absolute;
	top: 30%;
	right: 0.625rem;
	display: inline-block;
	color: #CCCCCC;
	font-size: 1rem;
}
/* 位置及周边 */
.m-posi{
	width: 100%;
	height: 12.5rem;
}
.m-posi .m-posi-main{
	width: 100%;
	background-color: #fff;
}
.m-posi .m-posi-main h4{
	padding-left: 0.9375rem;
	margin-bottom: 0.9375rem;
}
/* 路线 */
.m-lu{
	width: 100%;
}
.m-lu .m-lu-li span:nth-child(2){
	font-size: 0.75rem;
	border: 0.0625rem solid #CCCCCC;
	padding:0.1875rem 0.3125rem;
}
.m-lu .m-lu-li span:nth-child(3){
	margin-right: 1.25rem;
}
.m-lu .m-lu-li::after{
	height: 0;
}
.m-yuan{
	width: 100%;
	overflow: hidden;
	background-color: #FFF;
}
.m-yuan h4{
	padding-left: 0.9375rem;
	margin-top: 0.625rem;
	margin-bottom: 0.625rem;
}
.m-yuan .m-yuan-ul{
	width: 100%;
	padding-left: 1.875rem;
}
.m-yuan .m-yuan-ul::before{
	height: 0;
}
.m-yuan .m-yuan-ul li{
	width: 19%;
}
.line-throw{
	text-decoration: line-through;
}
/* 费用详情 */
.m-fei{
	width: 100%;
	background-color: #FFFFFF;
}
.m-fei .m-fei-main{
	width: 100%;
	padding-left: 0.9375rem;
	padding-right: 0.9375rem;
	overflow: hidden;
}
.m-tui .m-jian-main h4,
.m-fei .m-fei-main h4{
	margin-top: 0.625rem;
	margin-bottom: 0.625rem;
}
.m-fei .m-fei-main h4 span{
	color: #007AFF;
	font-size: 0.875rem;
}
.m-fei .m-fei-main .m-fei-ul{
	width: 100%;
	padding-left: 1.25rem;
}
.m-fei .m-fei-main .m-fei-ul li{
	width: 20%;
}
.m-fei .m-fei-main .m-fei-ul li p{
	color: #3C3C3C;
	line-height: 0.625rem;
	margin-bottom: 0.1875rem;
}
.m-fei .m-fei-main .m-fei-ul li span{
	color: #CCCCCC;
	font-size: 0.75rem;
}
.m-fei .m-fei-main .m-fei-ul li:nth-child(1) .fet-zi{
	margin-top: 2.1875rem;
}
.m-fei .m-fei-main .m-fei-ul li p:nth-child(3){
	margin-top: 0.625rem;
}
.m-fei .m-fei-main .m-fei-ul li p.red{
	color: red;
}
/* 议价 */
.m-home .lian-right .m-yi{
	font-size: 0.9375rem;
}
.m-home .lian-right .m-yi-p{
	font-size: 0.8125rem;
}
.m-home .lian-right .kan{
	font-size: 0.75rem;
	float: right;
	position: absolute;
	top: 1.25rem;
	right: 0.3125rem;
	color: #0086B3;
	font-weight: 600;
}
/* 推荐经纪人 */
.m-tui{
	width: 100%;
	background-color: #FFFFFF;
}
.m-tui .m-jian-main{
	width: 100%;
	padding-left: 0.9375rem;
	overflow: hidden;
}
.m-tui .m-jian-main ul{
	width: 100%;
}
.m-tui .m-jian-main ul::before{
	height: 0;
}
.mui-table-view:after{
	height: 0;
}
.m-tui .m-jian-main ul li::after{
	height: 0;
}
.m-tui .m-jian-main ul li img{
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
}
.m-tui .m-jian-main ul li .m-jian-middle{
	margin-left: 0.625rem;
}
.m-tui .m-jian-main ul li .m-jian-middle h4{
	margin: 0;
	font-weight: 600;
}
.m-tui .m-jian-main ul li .m-jian-middle h4 span{
	margin-left: 0.625rem;
	font-weight: 100;
}
.m-tui .m-jian-main ul li .m-jian-right span{
	width: 2.5rem;
	height: 2.5rem;
	display: inline-block;
	color: #0062CC;
	background-color: lightblue;
	border-radius: 50%;
	text-align: center;
	line-height: 40px;
}
/* 帮我出租 */
.m-help{
	width: 100%;
	background-color: #FFFFFF;
	
	margin-bottom:1.25rem;
}
.m-help .m-help-main{
	width: 100%;
	margin-bottom: 50px;
	padding-left: 0.9375rem;
	padding-right: 0.9375rem;
	background-color: #EEEEEE;
}
.m-help ul{
	width: 100%;
	margin-top:20px;
}
.m-help ul li{
	width: 100%;
	text-align: center;
	background-color: #EEEEEE;
}
.m-help ul li .fangyuan{
	margin-left:50%;
	transform: translateX(-50%);
	width: 50%;
	margin-top: 1.25rem;
	padding: 0.625rem 1.25rem;
	border: 1px solid #3c3c3c;
	border-radius: 1.25rem;
	color: #3C3C3C;
	background-color: #FFFFFF;
}
.m-help .bian-num{
	margin-top: 1.25rem;
	color: #3c3c3c;
	
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
	margin-top:15px;
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
	background-color: orange;
	text-align: center;
	padding-top: 5px;
	border-radius: 5px;
}
.g-footer ul li:nth-child(4) a,
.g-footer ul li:nth-child(3) a{
	font-size: 14px;
	color: #FFFFFF;
}
.g-footer ul li:nth-child(4){
	width: 25%;
	height: 60%;
	background-color: orangered;
	margin-right: 0;
	text-align: center;
	padding-top: 5px;
	border-radius: 5px;
}
.g-footer ul li a{
	display: inline-block;
	text-align: center;
	font-size: 0.875rem;
	color: #000000;
}
.m-tui,
.m-yuan,
.m-fei,
.m-home{
	background-color: #fff!important;
}
.m-dec{
	background-color: #fff!important;
	margin-top: 0px;
}
.m-dec .m-table{
	padding-left: 20px;
}
.m-dec .m-dec-ul{
	margin-bottom: 0px;
}
.g-footer ul {
	margin-top: 0px;
}
.g-footer ul li:nth-child(4),
.g-footer ul li:nth-child(3){
	margin-top: 10px;
}
.m-dec .m-dec-ul li {
	width: 33%;
	margin-right: 0;
	padding-left: 10px;
	padding-right: 10px;
}
</style>
