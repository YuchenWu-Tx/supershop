<template>
  <div class="block">
    <div class="imgcontainer">
      <img :src="titObj.imglink" alt="">
    </div>
    <div class="msgcontainer">
      <div class="title">{{titObj.title}}</div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'BlockMsg',
  props:{
    titObj:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .block{
    margin-top:10px;
    display:flex;
    .imgcontainer{
      width:30px;
      img{
        width:100%;
        height:30px
      }
    }
    .msgcontainer{
      margin-left:5px;
      flex:1;
      .title{
        line-height:30px;
        font-weight: 700;
        border-bottom: black 1.4px solid;
        margin-bottom: 10px;
      }
    }
  }
</style>