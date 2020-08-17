<template>
  <div class="shopcart">
    <nav-bar class="cart-nav">
      <template #nav-middle>
        <div>购物车</div>
      </template>
    </nav-bar>
    <b-scroll>
      <cart-ul></cart-ul>
    </b-scroll>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "components/comment/Navbar/Navbar.vue"
import BScroll from "components/comment/BScroll/BScroll.vue"

import CartUl from "./childCom/CartUl"
export default {
  name: 'ShopCart',
  components:{
    NavBar,
    BScroll,
    CartUl
  }
}
</script>
<style scoped>
  .cart-nav {
		color: #fff;
		background-color: deeppink;
	}
</style>