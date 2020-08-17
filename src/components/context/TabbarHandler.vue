<template>
  <div id="tabbar-handler">
    <tab-bar>
      <tab-bar-li v-for="(item,index) in TabBarLists" :link="item.link" :key="index">
        <template v-slot:tabbarimg>
          <img :src="item.src" alt="">
        </template>
        <template v-slot:tabbarimg-active>
          <img :src="item.src_active" alt="">
        </template>
        <template v-slot:tabbartitle>
          <div>{{item.title}}</div>
        </template>
      </tab-bar-li>
    </tab-bar>
  </div>
</template>

<script>
const TabBar = ()=>import('components/comment/tabbar/Tabbar')
const TabBarLi = ()=>import('components/comment/tabbar/TabbarLi.vue')
let TabBarLists = [
{
  link:"/home",
  src_active:require("assets/img/tabbar/home-active.svg"),
  src:require("assets/img/tabbar/home.svg"),
  title:"首页"
},
{
  link:"/help",
  src_active:require("assets/img/tabbar/help-active.svg"),
  src:require("assets/img/tabbar/help.svg"),
  title:"帮助"
},
{
  link:"/ShopCart",
  src_active:require("assets/img/tabbar/shop-active.svg"),
  src:require("assets/img/tabbar/shop.svg"),
  title:"购物车"
},
{
  link:"/profile",
  src_active:require("assets/img/tabbar/my-active.svg"),
  src:require("assets/img/tabbar/my.svg"),
  title:"我的"
}
];
export default {
  name: 'Tabbarhandler',
  components:{
    TabBar,
    TabBarLi
  },
  data(){
    return {
      TabBarLists:TabBarLists
    }
  }
}
</script>
<style scoped>
#tabbar-handler{
  position:fixed;
  left:0;
  right:0;
  bottom: 0;
  background-color: #c3c3c3;
  height:49px;
  text-align: center;
  box-shadow: 0px -1px 1px rgba(100,100,100,.1);
  font-size:14px;
  z-index: 10;
}

</style>
