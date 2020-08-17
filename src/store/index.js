import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addnewCart(state,cartLi){
      state.cartList.push({id:cartLi,count:1,imageLink:'http://localhost:500/serverimg/timg.jpg',price:99,check:false,title:'最可爱的小猫猫',detail:'这是一只从按都按时南大街扩散的空间爱上你'})
    },
    addCount(state,oldPro){
      oldPro.count++
    }
  },
  actions: { 
    addCart(context,cartid){
      var oldPro = context.state.cartList.find((item)=>{
        return item.id === cartid
      })
      /* console.log(oldPro) */
      if(oldPro){
        context.commit('addCount',oldPro)
      }else{
        context.commit('addnewCart',cartid)
      }
    }
  },
  modules: {
  }
})
