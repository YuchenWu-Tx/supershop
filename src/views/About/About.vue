<template>
  <div class="about">
    <b-scroll ref="scroll">
      <all-block></all-block>
    </b-scroll>
  </div>
</template>

<script>
import AllBlock from "./childCom/AllBlock.vue"
import BScroll from "components/comment/BScroll/BScroll.vue"
// @ is an alias to /src
export default {
  name: 'About',
  components:{
    AllBlock,
    BScroll
  },
  mounted(){
    console.log(this.$refs.scroll.$el)
    this.$refs.scroll.$el.style.cssText='height:calc(100vh - 49px)'
  }
}
</script>
<style scoped>
.about{
  padding:0px 10px;
  background-color: #f2f2f2;
}
</style>