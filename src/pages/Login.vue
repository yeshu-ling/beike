<template>
  <div class="box">
    <div class="mui-content">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="history.back();"></a>
            <h1 class="mui-title">账号密码登录</h1>
            <router-link to="/rejeict" tag="a" class="reject" >注册</router-link>
        </header>
    </div>
    <!-- 请输入手机号和密码 -->
    <div class="mui-content m-phone">
        <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <input type="text" v-model="name" id="phone" value="" placeholder="请输入账号"/>
                </li>
                <li class="mui-table-view-cell">
                    <input type="password" v-model="password" id="password" placeholder="请输入密码" />
                </li>
                <li class="mui-table-view-cell lastli ">
                    <p class="text1">为保障您个人隐私权益，请在点击同意按钮前请认真阅读下方协议：</p>
                    <p class="xieyi" id="xieyi"><span class="gou" :class="{'active':flag}" @click="change"><span class="mui-icon mui-icon-checkmarkempty"></span></span>《贝壳隐私协议》 及 《贝壳用户服务协议》</p>
                </li>
            </ul>
    </div>
    <div class="mui-content m-login">
            <p class="login1" @click="login" v-if="flag1">同意协议并登录</p>
			<p class="login" @click="login" v-else>同意协议并登录</p>
			<ul class="clearboth">
				<li class="fl forget">
					<a href="#">手机快捷登录</a>
				</li>
				<li class="fl">
					<a href="findpwd.html">忘记密码</a>
				</li>
			</ul>
		</div>
  </div>
</template>
<script>
import {Login} from "@/api/index.js"
import "../assets/css/mui.css"
import "../assets/css/loginCss/login.css"
export default {
  name: 'Index',
  data () {
    return {
        name:"",
        password:"",
        flag1:false,
        flag:false,
    }
  },
  components:{
     
  },
  methods:{
      async login(){
          const results = await Login(this.name,this.password);
          if(results.errNum==0){
              alert(results.msg)
              localStorage.setItem("users",JSON.stringify(results.result))
              this.$router.replace("/")
          }else{
              alert(results.msg)
          }
      },
      change(){
          this.flag = !this.flag;
      }
  },
  watch:{
    flag(){
        if(this.flag && this.name && this.password){
            this.flag1 = true;
        }else{
            this.flag1 = false;
        }
    }
  },
  created(){
      localStorage.setItem("indexreload",true);
      if(localStorage.getItem('islogload')){
          window.location.reload();
          localStorage.removeItem('islogload');
      }
  }
}
</script>
<style scoped>
.box{
    height: 490px;
    background-color: #ffffff;
    overflow: scroll;
}
/* .m-phone ul li input,
.mui-table-view,
.mui-content{
    background-color: #efeff4;
} */
</style>
