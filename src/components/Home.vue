<template>
  <div class="main" :style="{'min-height':contentHeight+'px'}">
    <h2 class="title">2017新春团拜会</h2>
    <div class="content">
    {{luckier}}
    </div>
    <div class="submit">
      <button class="button" @click="lottery">开始抽奖</button>
    </div>
    <!-- <el-footer/> -->
  </div>
</template>

<script>
    //import ElFooter from './Footer';
    import app from '../assets/js/common';

    let home = {
      name: 'home',
      computed:{
        contentHeight(){
          return document.body.scrollHeight;
        },
        luckier(){
          return this.$store.state.luckier;
        }
      },
      methods: {
        lottery(){
          this.$store.commit('lottery');
        }
      },
      // components: {
      //   ElFooter
      // }
    };
    export default home;
</script>

<style lang="less">
  @import '../less/home.less';
</style>