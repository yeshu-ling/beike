<template>
  <div>
      <div class="mui-content">
			<header class="mui-bar mui-bar-nav">
				<h1 class="mui-title">消息</h1>
			</header>
		</div>
        <div class="mui-content">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media mui-message">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left circle" src="../../assets/img/zu03.png">
						<div class="mui-media-body">
							<span class="ding">订阅号</span><span class="fr time">昨天20:38</span>
							<p class="mui-ellipsis">贝壳房帮帮:不玩虚的！100%中将！速看！</p>
						</div>
						
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left circle" src="../../assets/img/avatar.png">
						<div class="mui-media-body">
						   未知用户<span class="fr time">02月07日 17:21</span>
							<p class="mui-ellipsis">【自动回复】您好，非常感谢您关注我的房源。请...</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media" id="shao" v-for="(item,index) in jinrenList" :key="index">
					<router-link :to="{path:'/messageContent',query:{id:item.id}}">
						<img class="mui-media-object mui-pull-left circle shaoimg" :src="item.img">
						<div class="mui-media-body">
							<span class="shao">{{item.name}}</span><span class="dectimation">{{item.dectimation}}</span> <span class="fr time">{{item.time}}</span>
							<p class="mui-ellipsis" id="shaoinner">{{item.message}}</p>
						</div>
					</router-link>
				</li>
				
			</ul>
		</div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import "../../assets/css/messageCss/message.css"
import "../../assets/css/mui.css";
export default {
  name: "LooksFa",
  data() {
    return {
		jinrenList:[
			{
				id:1,
				img:require("../../assets/img/shaona.jpg"),
				name:"邵娜",
				dectimation:"秦虹路店A组",
				time:"02月07日 17:41",
				message:"OK"
			},
			{
				id:2,
				img:require("../../assets/img/wangxiaolong.jpg"),
				name:"王晓龙",
				dectimation:"长虹路店A组",
				time:"02月07日 17:38",
				message:"好的，谢谢"
			},
			{
				id:3,
				img:require("../../assets/img/huangjijun.jpg"),
				name:"黄基俊",
				dectimation:"雅居乐花园店A组",
				time:"02月07日 17:28",
				message:"加拉"
			},
			{
				id:4,
				img:require("../../assets/img/shiyimin.jpg"),
				name:"史奕鸣",
				dectimation:"银城兰溪郡店A组",
				time:"02月07日 16:22",
				message:"OK"
			},
		]
	};
  },
  methods: {
   
  },
  computed: {
    
  },
  created(){
	//   localStorage.removeItem("list");
	//   if(localStorage.getItem('msgisreload')){
	// 	  window.location.reload();
	// 	  localStorage.removeItem("msgisreload")
	//   }
  },
};
</script>
<style scoped>

.mui-control-content {
  display: block;
}
.m-fa .fa-logomin .fa-logomin-li {
  margin-left: 5px;
  margin-right: 0.3rem;
}

</style>
