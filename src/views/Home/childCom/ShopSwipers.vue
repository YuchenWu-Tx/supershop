<template>
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in imgLists" :key="index">
        <img :src="item.url" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>

import { Swipe, SwipeItem } from 'mint-ui';
/* var swiperName = Swiper.name */
export default {
  name: 'ShopSwipers',
  components:{
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem
  },
  data(){
    return{
      imgLists: [
        {
          url: require("assets/img/home/swiper_night.jpg")
        },
        {
          url: require("assets/img/home/swiper_sea.jpg")
        },
        {
          url: require("assets/img/home/swiper_yun.jpg")
        },
        {
          url: require("assets/img/home/swiper_sun.jpg")
        }
      ],
    }
  }
}
</script>
<style scoped>
@import "../../../../node_modules/mint-ui/lib/style.min.css";

.swiper{
  width:100%;
  overflow: hidden;
}
.mint-swipe {
  height: 200px;
}
img{
  width:100%;
  height:100%
}

</style>
