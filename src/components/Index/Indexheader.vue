<template>
  <div class="mui-content m-top">
		<div class="search">
			<div class="searchall">
				<div class="desctionall">
					<select name="" class="desction">
						<option value="nj" class="desction">南京</option>
						<option value="bj" class="desction">北京</option>
						<option value="sz" class="desction">苏州</option>
					</select>
				</div>
				<div class="input">
					<input type="text" name="" id="" value="" />
					<div class="an">
						<span class="mui-icon mui-icon-search "></span>
						<span>安府圆</span>
					</div>
				</div>
			</div>
			<div class="ditu">
				<a href="#">
					 <span class="iconfont icon-ditu"></span>
					 <span class="text">地图</span>
				</a>
			</div>
		</div>
		
	</div>
</template>

<script>
import "../../assets/css/indexCss/headerSearch.css";
import "../../assets/css/mui.css"
export default {
  name: 'IndexHeader',
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>

</style>
