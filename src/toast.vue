<template>
  <div class="toast" v-show='isShow'>
    <div>{{message}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name:'Toast',
  data(){
    return {
      isShow:false,
      message:'',
      flagtime:false
    }
  },
  methods:{
    Show(value,time=2000){
      if(this.flagtime) return 0
      console.log(value)
      this.flagtime = true
      this.isShow = true
      this.message = value
      let timing = setTimeout(()=>{
        this.isShow = false
        this.message = ""
        this.flagtime = false
        timing = null
      },time)
      
    }
  }
}
</script>
<style scoped>
.toast{
  position:fixed;
  top:50%;
  left:50%;
  transform: translate( -50%, -50%);
  z-index: 999;
  background-color: rgba(0,0,0,.75);
  text-align: center;
  padding:8px 15px;
  color:white;
  border-radius:10%
}
</style>