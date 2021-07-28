<template>
  <div id="home">
    <home-nav></home-nav>
    <home-banner :banner = 'banner'></home-banner>
  </div>
</template>
<script>
  import HomeNav from './homecomponent/homeNav.vue'
  import HomeBanner from './homecomponent/homeBanner.vue'
  import {getHome} from '../../network/home'
  export default {
    name:'Home',
    data(){
      return {
        banner:[],
        recommend:[]
      }
    },
    components: {
      HomeNav,
      HomeBanner
    },
    created(){
      // 请求数据
      getHome().then(res => {
        console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>
<style scoped>
  @import '../../assets/font/iconfont.css';
  @import '../../css/home/home.css'
</style>