import TopBtn from "components/comment/TopBtn/TopBtn.vue"

//返回顶部
export const scrollTopMixin = {
  data() {
    return {
      // isShowBackTop: false,
    };
  },
  components: {
    TopBtn,
  },
  methods: {
    backTop() {
      //返回顶部
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
};
