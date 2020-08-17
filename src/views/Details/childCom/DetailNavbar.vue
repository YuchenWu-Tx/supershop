<template>
  <div class="detailnavbar">
    <navbar>
      <template #nav-left>
        <div @click="backFn">
          <img src="~assets/img/fanhui.png" alt class="back-icon" />
        </div>
      </template>
      <template #nav-middle>
        <div class="nav-center-content">
          <div
            v-for="(item,index) in navtitle"
            :key="index"
            class="nav-center-item"
            :class="{active: currentIndex === index}"
            @click="itemClick(index)"
          >{{item}}</div>
        </div>
      </template>
    </navbar>
  </div>
</template>

<script>
// @ is an alias to /src\
import Navbar from "components/comment/Navbar/Navbar.vue";
export default {
  name: "DetailNavbar",
  components: {
    Navbar,
  },
  data() {
    return {
      navtitle: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('indexChange',index)
    },
    backFn(){
      this.$router.go(-1)
    }
  },
};
</script>
<style scoped>
.back-icon {
  width: 28px;
  height: 28px;
  vertical-align: middle;
}
.nav-center-item {
  flex: 1;
}
.nav-center-content {
  display: flex;
  font-size: 13px;
}
.active {
  color: var(--color-high-text);
}
.nav-bar {
  border-bottom: 1px solid #ececec;
}
</style>