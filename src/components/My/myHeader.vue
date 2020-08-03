<template>
  <div class="mui-content m-top">
			<div class="m-name">
				<div class="left fl">
					<img :src="userimg" v-if="flag" width="85%" height="100%" id="userimg"/>
					<img src="@/assets/img/user.png" v-else width="85%" height="100%" id="userimg"/>
				</div>
				<div class="right fl">
					<h4 id="phone" v-if="flag">{{phone}}</h4>
					<h4 id="phone" v-else>暂无登录</h4>
					<p>
						<router-link to="/user" tag="a">查看并编辑个人资料</router-link>
					</p>
				</div>
			</div>
			<span class="iconfont icon-shezhi function"></span>
		</div>
</template>
<script>
import "../../assets/css/myCss/my.css"
export default {
  name: 'MyHeader',
  data () {
    return {
	  userimg:"",
	  phone:"",
	  flag:false,
    }
  },
  components:{
      
  },
  created(){
	  if(localStorage.getItem("users")){
		  this.flag = true;
		  this.userimg = JSON.parse(localStorage.getItem("users")).userimg;
		  this.phone = JSON.parse(localStorage.getItem("users")).phone;
		  console.log("userimg",this.userimg);
	  	  console.log("phone",this.phone)
	  }else{
		  this.userimg="@/assets/img/user.png";
	  }
	  
	  
  }
}
</script>
<style scoped>

</style>
