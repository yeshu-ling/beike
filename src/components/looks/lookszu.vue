<template>
  <div class="mui-content m-main">
    <div class="mui-slider">
      <looks-header></looks-header>
    </div>
    <div class="mui-slider-group">
      <div class="mui-slider-item mui-control-content" id="d1">
        <!-- 具体内容 -->
        <!-- 品质租房 -->
        <div class="m-container" id="zu-div">
            <router-link :to="{path:'/zuerdetails',query:{id:item.wid}}" tag="div" class="mui-content m-pin" v-for="(item,index) in zulist" :key="index">
                <div class="pin-top clearboth">
                    <div class="pin-top-left fl">
                        <img :src="item.nameimg" class="fl">
                        <div class="top-desc fl">
                            <h4>{{item.name}}</h4>
                            <p>房源详细信息找我咨询</p>
                        </div>
                    </div>
                    <div class="pin-top-right fr">
                        <span class="iconfont icon-xiaoxi"></span>
                        <span class="iconfont icon-iconfontdianhua1 "></span>
                    </div>
                </div>
                <div class="pin-middle">
                    <h4>[户型介绍]</h4>
                    <span class="hu-desc">{{item.descp}}</span>
                    <div class="zuimg">
                        <ul class="clearboth">
                            <li class="fl">
                                <span class="zutext">租房</span>
                                <a href="#">
                                    <img :src="item.img01" width="100%" height="100%" >
                                </a>
                            </li>
                            <li class="fl">
                                <a href="#">
                                    <img :src="item.img02" width="100%" height="100%" >
                                </a>
                            </li>
                            <li class="fl">
                                <a href="#">
                                    <img :src="item.img03" width="100%" height="100%" >
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="pin-bottom">
                    <div class="pin-bottom-left fl">
                        <h4 class="zhengzu">{{item.tiele}}</h4>
                        <p class="area">{{item.area}}</p>
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
    ...mapActions(["getZulist"]),
  },
  computed: {
    ...mapState(["zulist"]),
  },
  mounted() {
      this.getZulist()
  },
  components: {
    LooksHeader,
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
