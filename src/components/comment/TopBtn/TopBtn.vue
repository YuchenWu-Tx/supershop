<template>
  <div class="topbtn">
    <img src="~assets/img/back-top.png" alt="">
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'TopBtn',
}
</script>
<style scoped>
  .topbtn{
    position:fixed;
    bottom:55px;
    right:10px;
    background-color: #fff;
    border-radius: 50%;
    width:40px;
    height:40px
  }
  .topbtn img{
    width: 40px;
		height: 40px;
  }
</style>