<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" title="item.title">
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
  import { Swiper, SwiperItem } from '../../../components/commer/swiper/index'
  export default {
    name:'',
    props:{
      banner:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data () {
      return {

      };
    },
    components: {
      Swiper,
      SwiperItem
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