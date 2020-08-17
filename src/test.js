import Toast from "./toast.vue"
var test = {}

test.install = function(Vue){
  // 1.创建组件构造器
  const ToastConstructor = Vue.extend(Toast)
  // 2.new方式通过构造器创建一个组件对象
  const newToast = new ToastConstructor
  // 3.将组件对象挂载到div上，此时可获取 newToast.$el
  newToast.$mount(document.createElement('div'))
  // 4.将newToast.$el插入body中
  document.body.appendChild(newToast.$el)
  /* Vue.component(Toast.name,Toast) */
  Vue.prototype.$toast = newToast
}

export default test