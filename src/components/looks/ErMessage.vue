<template>
  <div id="container">
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"  @click="returnhis"></a>
			<h1 class="mui-title">经纪人</h1>
		</header>
		<ul class="content">
			<li v-for="(item,index) in detailmessagelist" :key="index">
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
	detailmessageone:{
		id:1,
		img:"",
		messagedetail:"",
		flagclass:true,
	},
	detailmessagelist:[]
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
      returnhis(){
        //   window.location.reload();
		  localStorage.removeItem("detailist");
			window.history.back(0);
      },
	  btn(){
		let detailist = localStorage.getItem("detailist");
		console.log("detailist",detailist);
		if(detailist){
			if(this.flag){
				this.detailmessageone.id =parseInt([this.detailmessagelist.length])+1,
				this.detailmessageone.img = this.personimg;
				this.detailmessageone.messagedetail = this.message;
				this.detailmessageone.flagclass = true;
			}else{
				this.detailmessageone.id = parseInt([this.detailmessagelist.length])+1,
				this.detailmessageone.img = this.userimg;
				this.detailmessageone.messagedetail = this.message;
				this.detailmessageone.flagclass = false;
			}
				this.detailmessagelist.push(this.detailmessageone);
				console.log("detailmessagelist",this.detailmessagelist);
				localStorage.setItem("detailist",JSON.stringify(this.detailmessagelist));
				window.location.reload();
				
		}else{
			if(this.flag){
				this.detailmessageone.id = 1,
				this.detailmessageone.img = this.personimg;
				this.detailmessageone.messagedetail = this.message;
				this.detailmessageone.flagclass = true;
			}else{
				this.detailmessageone.id = parseInt([this.detailmessagelist.length])+1,
				this.detailmessageone.img = this.userimg;
				this.detailmessageone.messagedetail = this.message;
				this.detailmessageone.flagclass = false;
			}
				console.log("messageone",JSON.stringify(this.detailmessageone));
				this.detailmessagelist.push(this.detailmessageone);
				console.log("detailmessagelist",this.detailmessagelist);
				localStorage.setItem("detailist",JSON.stringify(this.detailmessagelist));
				window.location.reload();
				
		}
	  },
	  getpersonimg(){
		// let id = this.$route.query.id;
		// let result = this.jinrenList.filter(item=>item.id==id)[0];
		this.personimg=localStorage.getItem("personimg")
		this.userimg = JSON.parse(localStorage.getItem("users")).userimg;
		console.log("this.personimgWindow",this.personimg);
	  },
  },
  created(){
	this.getpersonimg();
	localStorage.setItem("erisreload",true);
	if(JSON.parse(localStorage.getItem("detailist"))){
		this.detailmessagelist = JSON.parse(localStorage.getItem("detailist"));
	}else{
		this.detailmessagelist = [
			{
				id:1,
				img:localStorage.getItem("personimg"),
				messagedetail:"您好",
				flagclass:true
			}
		];
	}
	
	console.log("thislist",this.detailmessagelist);
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
