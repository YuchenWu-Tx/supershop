<template>
  <div class="cart-item flex">
    <div class="cart-list-left flex">
			<input type="checkbox" class="check" v-model="cartItem.check" >
			<img :src="cartItem.imageLink" alt="" class="goods-img">
		</div>
    <div class="cart-list-right">
			<div class="goods-name one-txt-cut">{{cartItem.title}}<br>商品编号：{{cartItem.id}}</div>
			<div class="goods-info flex">
				<span class="price">￥{{cartItem.price}}</span><span>x{{cartItem.count}}</span>
			</div>
			</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'CartLiItem',
  props:{
    cartItem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>
<style lang='less' scoped>
.cart-item{
  padding:10px;
  border-bottom: 1px solid #ececec;;
}
.cart-list-left {
	width: 26%;
	align-items: center;
	.check {
		width: 20px;
		height: 20px;
		overflow: hidden;
		border-radius: 100%;
		border: 1px solid #ececec;
	}
	.check:checked {
		background: url(~assets/img/detail/check_active.png)no-repeat center;
		background-size: cover;
	}
	.goods-img {
		width: 76px;
		height: 99px;
		overflow: hidden;
		border: 1px solid #ececec;
		margin:0 10px;
		border-radius: 6px;
		vertical-align: middle;
  }
}
.cart-list-right {
		width: 73%;
		position: relative;
		.goods-name {
			width: 100%;
			font-size: 13px;
		}
		.goods-info {
			justify-content: space-between;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			.price {
				color: #F9CD0B;
			}
		}
	}
</style>