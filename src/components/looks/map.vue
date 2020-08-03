<template>
    <div class="amap-page-container">
      <el-amap vid="amapDemo" :center="center"  :zoom="zoom" 
       class="amap-demo"  :events="events"></el-amap>
      <div class="toolbar">
        position: [{{ lng }}, {{ lat }}] address: {{ address }}
      </div>
    </div>
</template>
<style scoped>
  .amap-demo {
    height: 170px!important;
  }
</style>
<script>
  module.exports = {
    data: function() {
      let self = this;
      // 118.795514,31.995041
      // 121.59996, 31.197646(原先)
      return {
        zoom: 15,//缩放级别[移动端3-19]
        center: [118.795514,31.995041], //卡子门地铁口(中心位置的经纬度)
        address: '',
        events: {
          click(e) {
            let { lng, lat } = e.lnglat;
            self.lng = lng; //经度
            self.lat = lat; //纬度
              console.log("经纬度",self.lng,self.lat);
            // 这里通过高德 SDK 完成。
            var geocoder = new AMap.Geocoder({
              radius: 1000,
              extensions: "all"
            });        
            // 获取经纬度的方法
            geocoder.getAddress([lng ,lat], function(status, result) {
              if (status === 'complete' && result.info === 'OK') {
                if (result && result.regeocode) {
                  self.address = result.regeocode.formattedAddress;
                  console.log("address",self.address);
                  self.$nextTick();
                }
              }
            });        
          }
        },
        lng: 0,
        lat: 0
      };
    }
  };
</script>