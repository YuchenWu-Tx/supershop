<template>
  <div class='wrapper' ref='wrapper'>
    <div class='content'>
      <slot></slot>  
    </div>		
  </div>
</template>	
<script>
// @ is an alias to /src
  import BScroll from 'better-scroll'
  export default {
    name: 'BScroll',
    data(){
      return{
        scroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default:1,
      },
      pullUpLoad:{
        default:false
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType: this.probeType,
        pullUpLoad:this.pullUpLoad
        /* scroll-x:false */
      })
      if(this.probeType === 2 || this.probeType === 3){
				this.scroll.on('scroll',(position) => {
          this.$emit('scroll',position)
				})
      }
			//监听上拉事件
			if(this.pullUpLoad){
				this.scroll.on('pullingUp',()=> {
          this.$emit('pullingUp')
				})
      }
    },
    methods:{
      scrollTo(x, y, time){
				this.scroll && this.scroll.scrollTo(x, y, time || 500)
			},
			finishPullUp() {
				this.scroll && this.scroll.finishPullUp()
			},
			refresh(){
        console.log('refresh')
        this.scroll && this.scroll.refresh()
      },
      scrollToEle(el,time){
        this.scroll && this.scroll.scrollToElement(el,time)
      }
    }
  }
</script>
<style scoped>
.wrapper{
  height:calc(100vh - 100px);
  width:100%;
  overflow: hidden;
}
</style>