<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/Home' activeColor="deepPink">
        <img slot="item-icon" src="../../../assets/images/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/images/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/Category' activeColor="deepPink">
        <img slot="item-icon" src="../../../assets/images/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/images/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/Cart' activeColor="deepPink">
        <img slot="item-icon" src="../../../assets/images/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/images/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/Profile' activeColor="deepPink">
        <img slot="item-icon" src="../../../assets/images/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/images/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>

import TabBar from '../../commer/TabBar/TabBar.vue'
import TabBarItem from '../../commer/TabBar/TabBarItem.vue'

export default {
  name: "",
  props: [""],
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>
<style lang='' scoped>
</style>