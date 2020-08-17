<template>
	<div class="flex bot-bar-wrap">
		<div class="bot-bar-item" @click="botRes(0)">
			<p><img src="~assets/img/detail/icon01.png" alt=""></p>
			<p>客服</p>
		</div>
		<div class="bot-bar-item" @click="botRes(1)">
			<p><img src="~assets/img/detail/icon02.png" alt=""></p>
			<p>店铺</p>
		</div>
		<div class="bot-bar-item" @click="botRes(2)">
			<p><img src="~assets/img/detail/icon03.png" alt=""></p>
			<p>收藏</p>
		</div>
		<div class="btn cart-btn" @click="addCart">加入购物车</div>
		<div class="btn buy-btn" @click="botRes(3)">购买</div>
	</div>
</template>

<script>
	export default {
		name: "DetailBotBar",
		methods: {
			addCart() {
				this.$emit('addCart','123')
			},
			botRes(index){
				switch(index){
					case 0:this.$toast.Show('客服今日请假，请明日再来')
					break;
					case 1:this.$toast.Show('店铺请返回首页')
					break;
					case 2:this.$toast.Show('收藏功能正在更新')
					break;
					case 3:this.$toast.Show('花呗还完了嘛')
					break;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.bot-bar-wrap {
		height: 49px;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
    background-color: #fff;
    z-index:100;
		.bot-bar-item {
			width: 16%;
			font-size: 12px;
			color: #333;
			text-align: center;
			img{
				width: 22px;
				height: 22px;
				margin: 4px 0;
				vertical-align: middle;
			}
		}
		.btn {
			width: 26%;
			font-size: 13px;
			line-height: 49px;
			text-align: center;
		}
		.cart-btn {
			background-color: #F9CD0B;
			line-height: 49px;
		}
		.buy-btn {
			color: #fff;
			background-color: var(--color-high-text);
		}
	}
</style>

