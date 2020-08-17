<template>
  <div class="tabbar-li" @click="goActive()">
    <div v-show="isActive" class="tabbarimg-active">
      <slot name='tabbarimg-active'> 
        <!-- <img src="@/assets/img/tabbar/my-active.svg" alt=""> -->
      </slot>  
    </div>
    <div v-show="!isActive" class="tabbarimg">
      <slot name='tabbarimg'> 
        <!-- <img src="@/assets/img/tabbar/my.svg" alt=""> -->
      </slot>  
    </div>
    <div class="tabbartitle">
      <slot name='tabbartitle'> 
        <!-- <div>我的</div> -->
      </slot> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabbarLi',
  data(){
      return{
      }
  },
  props:{
    link:String
  },
  methods:{
    goActive(){
      this.$router.replace(this.link)
    }
  },
  computed:{
    isActive(){
      return this.$route.path === this.link?true:false
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar-li{
  flex:1
}
.tabbar-li .tabbarimg,.tabbarimg-active{
  margin-top:3px;
}
.tabbarimg>img,.tabbarimg-active>img{
  width:25px;
  height:25px;
  vertical-align:middle
}
</style>
