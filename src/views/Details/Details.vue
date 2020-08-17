<template>
  <div class="details">
    <dt-navbar @indexChange='navbarIndex'></dt-navbar>
    <b-scroll ref='scroll'>
      本商品编号：{{iid}}
      <dt-swiper ref='aa'></dt-swiper>
      <dt-swiper ref='bb'></dt-swiper>
      <dt-swiper ref='cc'></dt-swiper>
      <dt-swiper ref='xx'></dt-swiper>
      
      <goods-list :goodslist="recommendGoods"></goods-list>
    </b-scroll>
    <top-btn @click.native='backTop'></top-btn>
    <dt-bot-bar @addCart='addCart'></dt-bot-bar>
    <!-- <toast ref='toast'></toast> -->
  </div>
</template>

<script>
var data = [{
    iid:'001',
    image:'http://localhost:500/serverimg/timg.jpg',
    price:'99',
    cfav:'128'
    },
    {
      iid:'002',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'23',
      cfav:'128'
    },
    {
      iid:'003',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'33',
      cfav:'128'
    },
    {
      iid:'004',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'66',
      cfav:'123'
    },
    {
      iid:'005',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'93',
      cfav:'143'
    },
    {
      iid:'006',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'99',
      cfav:'428'
    },{
      iid:'007',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'93',
      cfav:'628'
    },{
      iid:'008',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'88',
      cfav:'228'
    },{
      iid:'009',
      image:'http://localhost:500/serverimg/timg.jpg',
      price:'22',
      cfav:'56'
  }]
// @ is an alias to /src
import BScroll from "components/comment/BScroll/BScroll.vue"
import GoodsList from "components/context/Goodslist/GoodsList.vue"

import DtNavbar from './childCom/DetailNavbar'
import DtSwiper from './childCom/DetailsSwiper'
import DtBotBar from './childCom/DetailBotBar'
import {scrollTopMixin} from '@/common/mixins.js'


export default {
  name: 'Details',
  mixins:[scrollTopMixin],
  components:{
    DtNavbar,
    BScroll,
    DtSwiper,
    GoodsList,
    DtBotBar,
  },
  created(){
    console.log(this.$route)
  },
  data(){
    return {
      recommendGoods:data,
      /* iid:this.$route.params.id */
    }
  },
  mounted(){
    const scrollrefresh = this.deshake(this.$refs.scroll.refresh,500)
    this.$bus.$on('goodsitemload',()=>{
      scrollrefresh()
    })
  },
  methods:{
    deshake(fns,delay){
      let timer = null
      return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
          fns.apply(this,args)
          console.log(...args)
        },delay)
      }
    },
    navbarIndex(index){
      let type = 'aa'
      switch(index){
        case 0:
          type = 'aa'
          break;
        case 1:
          type = 'bb'
          break;
        case 2:
          type = 'cc'
          break;
        case 3:
          type = 'xx'
          break;
      }
      let el = this.$refs[type].$el
      this.$refs.scroll.scrollToEle(el,500)
    },
    addCart(){
      this.$toast.Show('加入购物车成功')
      this.$store.dispatch('addCart',this.iid)
    }
  },
  computed:{
    iid(){
      return this.$route.params.id
    }
  }
}
</script>
<style scoped>

</style>