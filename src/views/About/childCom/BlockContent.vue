<template>
  <div class="">
    <div class="subhead">
        <div class="time">{{blockmsg.time}}</div>
        <div class="address">{{blockmsg.address}}</div>
        <div class="work">{{blockmsg.work}}</div>
      </div>
      <div class="context">
        <slot name='context'>
        </slot>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'BlockContent',
  props:{
    blockmsg:{
      type:Object,
      defalut(){
        return {}
      }
    }
  }
}
</script>
<style scoped>
  .subhead{
    margin-top:10px;
    display:flex;
    justify-content:space-around;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
  }
  .context{
    font-size: 13px;
    line-height: 16px;
  }
</style>