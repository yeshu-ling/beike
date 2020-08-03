<template>
  <div class="box">
    <div class="mui-content">
        <header class="mui-bar mui-bar-nav">
            <router-link to="/login" tag="a" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="history.back();"></router-link>
            <h1 class="mui-title">注册账号</h1>
        </header>
    </div>
    <div class="mui-content m-reject m-box">
			<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<input type="text" v-model="newUser.username" value="" placeholder="请输入账号" id="phone" />
					</li>
					<li class="mui-table-view-cell">
						<input type="password" v-model="newUser.password" placeholder="请输入密码" id="password" />
					</li>
					<li class="mui-table-view-cell">
						<input type="email" v-model="newUser.emails" placeholder="请输入邮箱" id="emails" />
					</li>
					<li class="mui-table-view-cell lasttext">
						<div class="left fl" :class="{'active':flag}" @click="change">
							<span class="mui-icon mui-icon-checkmarkempty"></span>
						</div>
						<div class="right fl">
							<span>为保障您的个人隐私权益，请在点击同意按钮前认真阅读下方协议：《贝壳隐私协议》及《贝壳用户服务协议》</span>
						</div>
						<p class="login-in" v-if="flag1" @click="reject">注册</p>
						<p class="reject" v-else @click="reject">注册</p>
					</li>
				</ul>
		</div>
  </div>
</template>
<script>
import "../assets/css/mui.css"
import "../assets/css/loginCss/reject.css"
import {rejeict} from "@/api/index"
import {mapState} from "vuex"
export default {
  name: 'Index',
  data () {
    return {
	  newUser:{
		  
	  },
	  flag1:false,
	  flag:false,
    }
  },
  components:{
     
  },
  computed:{
	//   ...mapState(["newUser"])
  },
  methods:{
	  async reject(){
		  let newUser = await rejeict(this.newUser.username,this.newUser.password,this.newUser.emails);
		  console.log("newuser",newUser)
		  alert(newUser.msg);
		  localStorage.setItem("islogload",true)
		  this.$router.push("/login");
	  },
	  change(){
		  this.flag = !this.flag;
	  }
  },
  watch:{
	  flag(){
		  if(this.flag && this.newUser.username && this.newUser.password && this.newUser.emails){
			  this.flag1 = true;
		  }else{
			  this.flag1 = false;
		  }
	  }
  }
}
</script>
<style scoped>
.box{
    background-color: #fff;
    height: 490px;
    overflow: scroll;
}
</style>
