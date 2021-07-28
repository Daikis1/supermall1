<template>
    <div class="tar-bar">
      <slot></slot>
    </div>
</template>
<script>
  export default {
    name:'TabBar',
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
  .tar-bar{
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    text-align: center;
    flex: 1;
    background-color: #f2f2f2;
    box-shadow: 0 -1px 2px rgba(100,100,100,0.2);
  }
</style>