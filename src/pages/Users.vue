<template>
  <div>
      <div class="mui-content">
			<header class="mui-bar mui-bar-nav">
				<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="history.back();"></a>
				<h1 class="mui-title">我的个人信息</h1>
			</header>
		</div>
        <div class="mui-content m-message">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						头像
						<img :src="userimg" v-if="flag" class="fr" id="userimg" >
						<img src="../assets/img/user.png" v-else class="fr" id="userimg" >
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						 昵称
						 <span class="fr texts" v-if="flag" id="username">{{username}}</span>
						 <span class="fr texts" v-else id="username">暂未登录</span>
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						 手机号
						 <span class="fr texts" v-if="flag" id="phone">{{phone}}</span>
						 <span class="fr texts" v-else id="phone">暂未登录</span>
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						 我的邀请码
						 <span class="fr texts" v-if="flag">{{application}}</span>
						 <span class="fr texts" v-else>暂未登录</span>
					</a>
				</li>
			</ul>
		</div>
        <div class="mui-content m-idcard">
			<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							身份认证
							<span class="fr texts">未实名认证</span>
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							 注销服务
							 <span class="fr texts">注销后无法恢复</span>
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							 第三方账号设置
						</a>
					</li>
				</ul>
		</div>
        <p class="tui">
			<router-link to="/login">
				退出登录
			</router-link>
		</p>
  </div>
</template>
<script>
import "../assets/css/mui.css"
import "../assets/css/myCss/mymessage.css"
export default {
  name: 'Index',
  data () {
    return {
	  userimg:"",
	  username:"",
	  phone:"",
	  application:"",
	  flag:false
    }
  },
  components:{
     
  },
  created(){
	  if(localStorage.getItem("users")){
		  this.flag = true;
		  this.userimg = JSON.parse(localStorage.getItem("users")).userimg;
		  this.username = JSON.parse(localStorage.getItem("users")).username;
		  this.phone = JSON.parse(localStorage.getItem("users")).phone;
		  this.application = JSON.parse(localStorage.getItem("users")).application;
	  }
  }
}
</script>
<style scoped>

</style>
