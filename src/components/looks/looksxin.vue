<template>
  <div class="mui-content m-main">
    <div class="mui-slider">
      <looks-header></looks-header>
    </div>
    <div class="mui-slider-group">
      <div class="mui-slider-item mui-control-content" id="c1">
        <!-- 具体内容 -->
        <div class="m-container">
          <div id="xin-div">
            <router-link :to="{path:'/xindetails',query:{id:item.id}}" tag="div" class="mui-content m-pin" v-for="(item,index) in xinlist" :key="index">
              <div class="pin-top clearboth">
                <div class="pin-top-left fl">
                  <img :src="item.personimg" class="fl" />
                  <div class="top-desc fl">
                    <h4>{{item.personname}}</h4>
                    <p>705人咨询过他</p>
                  </div>
                </div>
                <div class="pin-top-right fr">
                  <span class="iconfont icon-xiaoxi"></span>
                  <span class="iconfont icon-iconfontdianhua1"></span>
                </div>
              </div>
              <div class="pin-middle">
                <h4>[户型介绍]</h4>
                <span class="hu-desc">{{item.desc}}</span>
                <div class="zuimg">
                  <ul class="clearboth">
                    <li class="fl">
                      <span class="zunew">新房</span>
                      <a href="#">
                        <img :src="item.imgone" width="100%" height="100%" />
                      </a>
                    </li>
                    <li class="fl">
                      <a href="#">
                        <img :src="item.imgtwo" width="100%" height="100%" />
                      </a>
                    </li>
                    <li class="fl">
                      <a href="#">
                        <img :src="item.imgthree" width="100%" height="100%" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="pin-bottom pin-bottom03">
                <div class="pin-bottom-left fl">
                  <h4 class="zhengzu">
                    {{item.name}}
                    <span class="zhu">住宅</span>
                    <span class="zhu">在售</span>
                  </h4>
                  <p class="area">{{item.position}}</p>
                  <span class="fl lookhouse">{{item.lookone}}</span>
                  <span class="fl lookhouse">{{item.looktwo}}</span>
                  <span class="fl lookhouse">{{item.lookthree}}</span>
                </div>
                <div class="pin-bottom-right fr">
                  <p class="price">{{item.price}}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import "../../assets/css/looksCss/lookcss.css";
import "../../assets/css/mui.css";
import LooksHeader from "./looksHeader.vue";
export default {
  name: "LooksFa",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getXinlist"]),
  },
  computed: {
    ...mapState(["xinlist"]),
  },
  mounted() {
    this.getXinlist();
  },
  components: {
    LooksHeader,
  },
  created(){
    if(localStorage.getItem("xinisreload")){
			window.location.reload();
			localStorage.removeItem("xinisreload")
		}
  }
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
