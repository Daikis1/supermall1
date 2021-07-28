<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left" class="nav-left">...</div>
      <div slot="center" class="nav-center">
        <input type="text" placeholder="请输入您想搜索的物品">
      </div>
      <div slot="right" class="nav-right"><span>登录</span></div>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from '../../components/commer/navbar/NavBar.vue'
  export default {
    name:'Home',
    props:[''],
    data () {
      return {

      };
    },
    components: {
      NavBar
    },
  }
</script>
<style scoped>
  #home .home-nav .center{
    width: 100%;
  }
  #home .home-nav .center input{
    width: 95%;
    height: 30px;
    text-indent: 10px;
    margin: 0 6px;
    border-radius: 15px;
    border: none;
  }
</style>