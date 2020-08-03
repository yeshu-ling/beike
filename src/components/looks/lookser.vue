<template>
  <div class="mui-content m-main">
    <div class="mui-slider">
      <looks-header></looks-header>
    </div>
    <div class="mui-slider-group">
      <div class="mui-slider-item mui-control-content m-ershou">
        <!-- 具体内容 -->
        <div class="m-container">
          <ul class="clearboth er-ttop">
            <li class="fl">
              <span class="iconfont icon-moxingxunlian"></span>
              <span>3大算法模型</span>
            </li>
            <li class="fl">
              <span class="iconfont icon-xinhao"></span>
              <span>15项数据指标</span>
            </li>
            <li class="fl">
              <span class="iconfont icon-duigou"></span>
              <span>经纪人推荐</span>
            </li>
          </ul>
          <div id="erF-div">
            <router-link :to="{path:'/zuerdetails',query:{id:item.wid}}" tag="div" class="m-er-main erF" v-for="(item,index) in erlistTop" :key="index">
              <div class="m-er-main-top clearboth">
                <div class="er-top-left fl">
                  <img :src="item.imgone" width="100%" height="100%" />
                </div>
                <div class="er-top-right fl">
                  <img :src="item.imgtwo" width="98%" height="50%" />
                  <img :src="item.imgthree" width="98%" height="50%" />
                </div>
              </div>
              <div class="m-er-main-middle">
                <h4>
                  {{item.title}}
                  <span class="area">{{item.area}}</span>
                  <span class="fr">{{item.price}}</span>
                </h4>
                <p>{{item.desc}}</p>
              </div>
              <div class="m-er-main-bottom clearboth">
                <div class="er-bottom-left fl">
                  <img :src="item.peopleimg" class="fl jin" />
                  <div class="bottom-desc fl">
                    <h4>{{item.peoplename}}</h4>
                    <p>房源动态找我咨询</p>
                  </div>
                </div>
                <div class="er-bottom-right fr">
                  <span class="iconfont icon-xiaoxi"></span>
                  <span class="iconfont icon-iconfontdianhua1"></span>
                </div>
              </div>
            </router-link>
          </div>

          <!-- 根据浏览过的推荐 -->
          <div class="er-tui">
            <span class="circle">
              <span class="circleinner"></span>
            </span>
            <h4>根据您浏览过的房源推荐</h4>
            <ul class="clearboth">
              <li class="fl">
                <a href="#">
                  <img src="../../assets/img/tui01.jpg" width="98%" height="60%" />
                  <h4>莫愁海棠里</h4>
                  <p>鼓楼/凤凰西街</p>

                  <p class="text-bot">
                    <span class="tui-bot">#</span>
                    凤凰西街区域...
                  </p>
                </a>
              </li>
              <li class="fl">
                <a href="#">
                  <img src="../../assets/img/tui02.jpg" width="98%" height="60%" />
                  <h4>鸿都大厦</h4>
                  <p>鼓楼/凤凰西街</p>
                  <p class="text-bot">
                    <span class="tui-bot">#</span>
                    凤凰西街区域优质小区
                  </p>
                </a>
              </li>
              <li class="fl">
                <a href="#">
                  <img src="../../assets/img/tui03.jpg" width="98%" height="60%" />
                  <h4>龙凤玫瑰园</h4>
                  <p>鼓楼/凤凰西街</p>

                  <p class="text-bot">
                    <span class="tui-bot">#</span>
                    凤凰西街区域关注度...
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div id="erS-div">
            <router-link :to="{path:'/zuerdetails',query:{id:item.wid}}" tag="div" class="m-er-main erS" v-for="(item,index) in erlistBtn" :key="index">
              <div class="m-er-main-top clearboth">
                <div class="er-top-left fl">
                  <img :src="item.imgone" width="100%" height="100%" />
                </div>
                <div class="er-top-right fl">
                  <img :src="item.imgtwo" width="98%" height="50%" />
                  <img :src="item.imgthree" width="98%" height="50%" />
                </div>
              </div>
              <div class="m-er-main-middle">
                <h4>
                  {{item.title}}
                  <span class="area">{{item.area}}</span>
                  <span class="fr">{{item.price}}</span>
                </h4>
                <p>{{item.desc}}</p>
              </div>
              <div class="m-er-main-bottom clearboth">
                <div class="er-bottom-left fl">
                  <img :src="item.peopleimg" class="fl jin" />
                  <div class="bottom-desc fl">
                    <h4>{{item.peoplename}}</h4>
                    <p>房源动态找我咨询</p>
                  </div>
                </div>
                <div class="er-bottom-right fr">
                  <span class="iconfont icon-xiaoxi"></span>
                  <span class="iconfont icon-iconfontdianhua1"></span>
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
import "../../assets/css/mui.css"
import LooksHeader from "./looksHeader.vue";
export default {
  name: "LooksEr",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getErlistTop", "getErlistBtn"]),
  },
  computed: {
    ...mapState(["erlistTop", "erlistBtn"]),
  },
  mounted() {
    this.getErlistTop(), this.getErlistBtn();
  },
  components:{
      LooksHeader
  }
};
</script>
<style scoped>
.mui-control-content {
  display: block;
}
</style>
