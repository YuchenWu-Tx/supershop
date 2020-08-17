<template>
  <div class="goodslist">
    <goods-list-item v-for="(item,index) in goodslist" :goodsitem="item" :key="index"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem"
export default {
  name: 'GoodsList',
  props:{
    goodslist:{
      type:Array,
      default() {
        return [];
      },
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
.goodslist{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding:0 6px;
  
}

</style>