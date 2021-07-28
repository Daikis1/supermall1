<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },
    components: {},
    computed: {},
    beforeMount() {},
    mounted() {},
    methods: {},
    watch: {}
  }
</script>
<style scoped>
  .nav-bar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 44px;
    box-shadow: 0 1px 2px rgba(100,100,100,0.2);
  }
  .nav-bar .left,.right{
    width: 60px;
  }
  .nav-bar .center{
    flex: 1;
    margin: 0 5px;
  }
</style>