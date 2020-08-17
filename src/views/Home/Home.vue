<template>
  <div id="home" class="home">
    <!-- 顶部栏 -->
    <nav-bar class="home-nav">
      <template #nav-middle>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- 控制条 -->
    <tab-control class="home-tab-control"
                  @tabItemClick="tabItemClick"
                  :titles="controlTitles"
                  ref='tabcontrol1' v-show="isTabShow"
    ></tab-control>
    <!-- 轮播图 -->
    <b-scroll @pullingUp='pullingUp' 
    @scroll='scrolling'
    ref='scroll' 
    class='b-scroll'
    :probeType="3"
    :pullUpLoad="{threshold: -100}">
      <template class='content'>
        <shop-swiper/>
        <!-- 首页推荐 -->
        <home-recommend :recommends="home_recommends"></home-recommend>
        <!-- 首页特色 -->
        <home-feature ref='feature'/>
        <!-- 小导航控制 -->
        <tab-control 
          @tabItemClick="tabItemClick"
          :titles="controlTitles"
          ref='tabcontrol2'
        ></tab-control>
        <goods-list :goodslist="goods_list[currentType].list"></goods-list>
      </template>
    </b-scroll>
    <top-btn @click.native='backTop'></top-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "components/comment/Navbar/Navbar.vue"
import TabControl from "components/context/TabControl.vue"
import GoodsList from "components/context/Goodslist/GoodsList.vue"
import BScroll from "components/comment/BScroll/BScroll.vue"
// import TopBtn from "components/comment/TopBtn/TopBtn.vue"

import ShopSwiper from "./childCom/ShopSwipers.vue"
import HomeFeature from "./childCom/HomeFeature.vue"
import HomeRecommend from "./childCom/HomeRecommend.vue"

import {/* getHomeMulitData */getHomeGoods} from "@/network/home.js"

import {scrollTopMixin} from '@/common/mixins.js'
export default {
  mixins:[scrollTopMixin],
  name: 'Home',
  components: {
    NavBar,
    BScroll,
    ShopSwiper,
    HomeFeature,
    HomeRecommend,
    TabControl,
    GoodsList,
    // TopBtn
  },
  created(){
    for(let key in this.goods_list){
      getHomeGoods(key,this.goods_list[key].page).then((res)=>{
        var arr=this.goods_list[key].list.concat(res.data)
        this.goods_list[key].list = arr
        this.goods_list[key].page++
      })
    }
  },
  mounted(){
    const scrollrefresh = this.deshake(this.$refs.scroll.refresh,500)
    this.$bus.$on('goodsitemload',()=>{
      scrollrefresh()
    })
  },
  activated() {
    this.$refs.scroll.refresh();
		this.$refs.scroll.scrollTo(0, this.saveY, 0)
	},
	deactivated() {
		//保存Y值
		this.saveY = this.$refs.scroll.scroll.y
		//取消全局的事件监听
		// this.$bus.$off('itemImgLoad',this.itemImgLister)
  },
  data(){
    return{
      home_recommends:[
        {
          image:require("assets/img/home/swiper_night.jpg"),
          title:"十点抢券"
        },
        {
          image:require("assets/img/home/swiper_night.jpg"),
          title:"十点抢券"
        },
        {
          image:require("assets/img/home/swiper_night.jpg"),
          title:"十点抢券"
        },
        {
          image:require("assets/img/home/swiper_night.jpg"),
          title:"十点抢券"
        }
      ],
      controlTitles:["流行","时尚","热门"],
      goods_list:{
        "pop":{page:1,list:[]},
        "fasion":{page:1,list:[]},
        "hot":{page:1,list:[]}
      },
      currentType:"pop",
      isTabShow:false,
      TaboffsetTop:0,
      saveY:0
    }
  },
  methods:{
    /* 事件监听 */
    tabItemClick(index){
			switch(index){
				case 0: 
				this.currentType = 'pop'
				break;
				case 1:
				this.currentType = 'fasion'
				break;
				case 2:
				this.currentType = 'hot'
				break;
      }
      this.$refs.tabcontrol1.currentIndex = index
      this.$refs.tabcontrol2.currentIndex = index
    },
    pullingUp(){
      getHomeGoods(this.currentType,this.goods_list[this.currentType].page).then((res)=>{
        var arr=this.goods_list[this.currentType].list.concat(res.data)
        this.goods_list[this.currentType].list = arr
        this.goods_list[this.currentType].page++
        this.$refs.scroll.finishPullUp()
      })
    },
    /* backtop(){
      this.$refs.scroll.scrollTo(0,0);
    }, */  //混入 
    scrolling(position){
      this.TaboffsetTop = this.$refs.tabcontrol2.$el.offsetTop
      this.isTabShow = (-position.y) > this.TaboffsetTop;
    },
    /* 防抖函数 */
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
  },
  
}
</script>
<style >
  .home{
    margin-bottom: 49px;
    position:relative;
  }
	.home-nav {
		color: #fff;
		background-color: deeppink;
	}
  .home-tab-control{
    position:sticky;
    top:44px;
    z-index: 9;
  }
  .b-scroll{
    position: absolute;
    top:44px;
  }
</style>
