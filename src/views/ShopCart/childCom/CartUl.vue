<template>
  <div class="cart-ul">
    <cart-item v-for="(item,index) in cartList" :cartItem='item' :key="index"></cart-item>  
  </div>
</template>

<script>
// @ is an alias to /src
import CartItem from './CartLiItem.vue'
export default {
  name: 'CartUl',
  computed:{
    cartList(){
      console.log(this.$store.state.cartList)
      return this.$store.state.cartList
    }
  },
  components:{
    CartItem
  }
}
</script>
<style scoped>

</style>