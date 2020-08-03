<template>
  <div class="mui-content m-main">
    <div class="mui-slider">
      <looks-header></looks-header>
    </div>
    <div class="mui-slider-group">
      <div class="mui-slider-item mui-control-content m-fa">
        <!-- 顶部图标导航 -->
        <div class="m-container">
          <ul class="mui-table-view mui-grid-view fa-logomin">
            <li class="mui-table-view-cell mui-media mui-col-xs-2 fa-logomin-li">
              <a href="#">
                <img class="mui-media-object" src="../../assets/img/min02.png" />
                <div class="mui-media-body">楼市新政</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-2 fa-logomin-li">
              <a href="#">
                <img class="mui-media-object" src="../../assets/img/min03.png" />
                <div class="mui-media-body">本地</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-2 fa-logomin-li">
              <a href="#">
                <img class="mui-media-object" src="../../assets/img/min01.png" />
                <div class="mui-media-body">购房资源</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-2 fa-logomin-li">
              <a href="#">
                <img class="mui-media-object" src="../../assets/img/min05.png" />
                <div class="mui-media-body">风险地图</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-2 fa-logomin-li">
              <a href="#">
                <img class="mui-media-object" src="../../assets/img/min04.png" />
                <div class="mui-media-body">百科</div>
              </a>
            </li>
          </ul>
          <!-- 看点头条 -->
          <div class="fa-tou">
            <div class="fa-tou-left fl">
              <h3>看点头条</h3>
            </div>
            <div class="fa-tou-right fl">
              <ul class="fa-ul">
                <li class="fa-ul-li">一勺言！四个地产ETF清单</li>
                <li class="fa-ul-li">租金降了:没有什么永垂不朽！</li>
              </ul>
            </div>
          </div>
          <!-- 资讯简介 -->
          <div id="fa-div">
            <!-- <router-link tag="li" :to="{path:'/goods',query:{id:item.id}}" v-for="(item,index) in allshops" :key="index"> -->
            <router-link :to="{path:'/fadetails',query:{id:item.id}}" tag="div" class="fa-zi fadetails" v-for="(item,index) in falist" :key="index">
              <div class="fa-zi-top">
                <div class="fa-top-left fl">
                  <img :src="item.img" width="100%" height="85%" />
                </div>
                <div class="fa-top-right fl">
                  <h4>{{item.title}}</h4>
                  <p>{{item.desc}}</p>
                  <span class="datatime">{{item.time}}</span>
                </div>
              </div>
              <div class="fa-zi-middle">
                <div class="fa-middle-left fl">
                  <h4>{{item.innertitle}}</h4>
                  <p>{{item.innerdesc}}</p>
                </div>
                <div class="fa-middle-right fl">
                  <img :src="item.imgfa" width="100%" height="100%" />
                </div>
              </div>
              <div class="fa-zi-bottom">
                <span class="hot">{{item.hot}}</span>
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
  name: "LooksFa",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getFalist"]),
  },
  computed: {
    ...mapState(["falist"]),
  },
  mounted() {
    this.getFalist();
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
.m-fa .fa-logomin .fa-logomin-li{
  margin-left: 5px;
  margin-right: 0.3rem;
}
</style>
