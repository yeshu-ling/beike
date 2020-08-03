<template>
  <div id="container">
		<header class="mui-bar mui-bar-nav">
			<router-link to="/message" tag="a" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></router-link>
			<h1 class="mui-title">经纪人</h1>
		</header>
		<ul class="content">
			<li v-for="(item,index) in messagelist" :key="index">
				<img :src="item.img" :class="{'imgleft':item.flagclass}"/>
				<span :class="{'spanleft':item.flagclass}">{{item.messagedetail}}</span>
			</li>
		</ul>
		<div class="footer">
			<div class="icon"> 
				<img :src="personimg" v-if="flag"   @click="changeF" id="icon" />
				<img :src="userimg" v-else @click="changeF"  id="icon">
			</div>
			<input id="text" type="text" v-model="message" @keyup="changemsg" placeholder="请输入信息..."> 
			<span id="btn" :class="{'send':flagfa}" @click="btn">发送</span> 
		</div>
	</div>
</template>

<script>
import "../../assets/css/messageWindow.css"
import "@/assets/css/commen.css"
import "@/assets/css/mui.css"
import "../../assets/fonts/mui.ttf"
export default {
  name: 'MessageWindow',
  data () {
    return {
	  message:'',
	  flag:true,
	  flagfa:false,
	  userimg:"",
	  personimg:"",
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
			}],
	messageone:{
		id:1,
		img:"",
		messagedetail:"",
		flagclass:true,
	},
	messagelist:[]
    }
  },
  methods:{
	  changeF(){
		  this.flag = !this.flag
	  },
	  changemsg(){
		if(this.message.length>0){
			this.flagfa = true
		}else{
			this.flagfa = false
		}
	  },
	  btn(){
// let list = localStorage.getItem("list");
		// console.log("list",list);
		// if(list){
			if(this.flag){
				this.messageone.id = 1,
				this.messageone.img = this.personimg;
				this.messageone.messagedetail = this.message;
				this.messageone.flagclass = true;
			}else{
				this.messageone.id = parseInt([this.messagelist.length])+1,
				this.messageone.img = this.userimg;
				this.messageone.messagedetail = this.message;
				this.messageone.flagclass = false;
			}
				this.messagelist.push(this.messageone);
				console.log("messagelist",this.messagelist);
				localStorage.setItem("list",JSON.stringify(this.messagelist));
				window.location.reload();
				
		// }else{
			// if(this.flag){
			// 	this.messageone.id = 1,
			// 	this.messageone.img = this.personimg;
			// 	this.messageone.messagedetail = this.message;
			// 	this.messageone.flagclass = true;
			// }else{
			// 	this.messageone.id = parseInt([this.messagelist.length])+1,
			// 	this.messageone.img = this.userimg;
			// 	this.messageone.messagedetail = this.message;
			// 	this.messageone.flagclass = false;
			// }
			// 	console.log("messageone",JSON.stringify(this.messageone));
			// 	this.messagelist.push(this.messageone);
			// 	console.log("messagelist",this.messagelist);
			// 	localStorage.setItem("list",JSON.stringify(this.messagelist));
			// 	window.location.reload();
	  },
	  getpersonimg(){
		let id = this.$route.query.id;
		let result = this.jinrenList.filter(item=>item.id==id)[0];
		this.personimg=result.img;
		this.userimg = JSON.parse(localStorage.getItem("users")).userimg;
		localStorage.setItem("renimg",this.personimg);
		console.log("this.personimgWindow",this.personimg);
	  },
  },
  created(){
	this.getpersonimg();
	// localStorage.setItem("msgisreload",true)
	console.log("renimg",localStorage.getItem("renimg"));
	// if(JSON.parse(localStorage.getItem("list"))){
	// 	this.messagelist = JSON.parse(localStorage.getItem("list"));
	// }else{
		this.messagelist = [
			{
				id:1,
				img:localStorage.getItem("renimg"),
				messagedetail:"您好",
				flagclass:true
			}
		];
	// }
	// console.log("thislist",this.messagelist);
  },
  watch:{

  }
}
</script>
<style scoped>
* {
			margin: 0;
			padding: 0;
			list-style: none;
			font-family: '微软雅黑'
		}

		#container {
			width: 100%;
			height: 100%;
			background: #FFFFFF;
			margin: 10px auto 0;
			position: relative;
			box-shadow: 0px 0px 16px #999;
			margin-top: 40px;
		}

		.header {
			background: #007AFF;
			height: 34px;
			color: #fff;
			height: 40px;
			line-height: 40px;
			font-size: 20px;
			padding: 0 10px;
		}

		.footer {
			position: fixed;
			bottom: 0px;
			width: 100%;
			height: 50px;
			background: #CCCCCC;
			padding: 5px 10px;
		}

		.footer input {
			width: 63%;
			height: 38px;
			outline: none;
			font-size: 16px;
			position: absolute;
			border-radius: 6px;
			right: 70px;
		}

		.footer span {
			display: inline-block;
			width: 62px;
			height: 38px;
			background: #ccc;
			font-weight: 900;
			line-height: 38px;
			cursor: pointer;
			text-align: center;
			position: absolute;
			right: 5px;
			top: 5px;
			border-radius: 6px;
		}

		.footer span:hover {
			color: #777;
			background: #ddd;
		}

		.icon {
			display: inline-block;
			background: #FFFFFF;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			cursor: pointer;
			/* overflow: hidden; */
		}

		img {
			width: 40px;
			height: 40px;
			border-radius: 50%;
		}

		.content {
			font-size: 20px;
			width: 100%;
			height: 662px;
			overflow: auto;
			padding: 5px;
			margin-bottom: 50px;
		}

		.content li {
			margin-top: 10px;
			padding-left: 10px;
			width: 100%;
			display: block;
			clear: both;
			overflow: hidden;
		}

		.content li img {
			float: left;
		}
		.content li span {
			background: #7cfc00;
			padding: 10px;
			border-radius: 10px;
			float: left;
			margin: 0px 10px 0 10px;
			border: 1px solid #ccc;
			box-shadow: 0 0 3px #ccc;
		}

		.content li img.imgleft {
			float: left;
		}

		.content li img {
			float: right;
			margin-right: 5px;
		}

		.content li span.spanleft {
			float: left;
			background: #fff;
		}

		.content li span {
			float: right;
			background: #7cfc00;
		}
</style>
