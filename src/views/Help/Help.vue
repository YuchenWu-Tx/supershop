<template>
  <div class="help">
    <div class="text">
      <p>留言请至CSDN</p>
    </div>
    <button @click="toBlog" class='btn'>跳转博客</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Help',
  methods:{
    toBlog(){
      window.location = 'https://blog.csdn.net/weixin_41644449'
    }
  }
}
</script>
<style scoped>

.text{
    margin-top:50px;
    width: 300px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    background-image: -webkit-linear-gradient(left,blue,#66ffff 10%,#cc00ff 20%,#CC00CC 30%, #CCCCFF 40%, #00FFFF 50%,#CCCCFF 60%,#CC00CC 70%,#CC00FF 80%,#66FFFF 90%,blue 100%);
    -webkit-text-fill-color: transparent;/* 将字体设置成透明色 */
    -webkit-background-clip: text;/* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
    -webkit-background-size: 200% 100%; 
    -webkit-animation: masked-animation 4s linear infinite;
    font-size: 35px;
}
@keyframes masked-animation {
  0% {
      background-position: 0  0;
  }
  100% {
      background-position: -100%  0;
  }
}
.btn {
  margin:100px auto;
  position: relative;
  left:50%;
  transform: translate(-50%);
  background: #eb94d0;
  /* 创建渐变 */
  background-image: -webkit-linear-gradient(top, #eb94d0, #2079b0);
  background-image: -moz-linear-gradient(top, #eb94d0, #2079b0);
  background-image: -ms-linear-gradient(top, #eb94d0, #2079b0);
  background-image: -o-linear-gradient(top, #eb94d0, #2079b0);
  background-image: linear-gradient(to bottom, #eb94d0, #2079b0);
  /* 给按钮添加圆角 */
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  text-shadow: 3px 2px 1px #9daef5;
  -webkit-box-shadow: 6px 5px 24px #666666;
  -moz-box-shadow: 6px 5px 24px #666666;
  box-shadow: 6px 5px 24px #666666;
  font-family: Arial;
  color: #fafafa;
  font-size: 27px;
  padding: 19px;
  text-decoration: none;
}
/* 悬停样式 */
.btn:hover {
  background: #2079b0;
  background-image: -webkit-linear-gradient(top, #2079b0, #eb94d0);
  background-image: -moz-linear-gradient(top, #2079b0, #eb94d0);
  background-image: -ms-linear-gradient(top, #2079b0, #eb94d0);
  background-image: -o-linear-gradient(top, #2079b0, #eb94d0);
  background-image: linear-gradient(to bottom, #2079b0, #eb94d0);
  text-decoration: none;
}

</style>