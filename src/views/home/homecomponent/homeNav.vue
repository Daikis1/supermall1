<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="left" class="nav-left"><i class="iconfont">&#xe60f;</i></div>
      <div slot="center" class="nav-center">
        <i class="iconfont zoom">&#xe60b;</i>
        <input type="text" placeholder="请输入您想搜索的物品">
      </div>
      <div slot="right" class="nav-right"><span>登录</span></div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from '../../../components/commer/navbar/NavBar.vue'
  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },
    components: {
      NavBar
    },
    computed: {},
    beforeMount() {},
    mounted() {},
    methods: {},
    watch: {}
  }
</script>
<style scoped>

</style>