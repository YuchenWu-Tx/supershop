<template>
  <div id="app">
    <tabbar-handler/>
    <keep-alive exclude="Details">
      <router-view/>
    </keep-alive>
    
  </div>
</template>
<script>
// @ is an alias to /src
import TabbarHandler from '@/components/context/TabbarHandler'


export default {
  name: 'App',
  components: {
    TabbarHandler,
    
  }
}
</script>

<style>
@import "./assets/css/main.css";
*{
  margin:0px;
  padding:0px
}
</style>
