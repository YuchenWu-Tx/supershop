<template>
  <div class="goods-list-item" @click='itemLink'>
    <img :src="goodsitem.image" alt="" @load='goodsitemload' >
    <div class="goods-list-price">
			<div class="text-pink">￥{{goodsitem.price}}</div>
			<div><i class="collect-icon"></i><span>{{goodsitem.cfav}}</span></div>
		</div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  methods:{
    goodsitemload(){
      this.$bus.$emit('goodsitemload')
    },
    itemLink(){
      this.$router.push('/details/'+this.goodsitem.iid)
    }
  }
};
</script>

<style lang='less'scoped>
  img{
		width: 100%;
		border-radius: 4px;
	}
	.goods-list-item {
		width: 49%;
		padding-top: 6px;
		font-size: 14px;
		.goods-list-price {
			display: flex;
			justify-content: space-around;
      margin: 6px 0;
      line-height: 20px;
			.collect-icon {
				display: inline-block;
				width: 20px;
				height: 20px;
				background: url(~assets/img/home/collect_icon.png) no-repeat;
				background-size: cover;
				vertical-align: bottom;
			}
		}
	}
</style>
