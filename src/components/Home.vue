<template>
  <div class="main" :style="{'min-height':contentHeight+'px'}">
    <h2 class="title">2017新春团拜会中奖名单</h2>
    <div class="content">
      <ul>
        <li v-for="item in luckier">{{item}}</li>
      </ul>
    </div>
    <div class="submit">
      <button class="button" @click="lottery">
        <span v-if="status">开始</span>
        <span v-else>停止</span>
      </button>
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
        },
        status(){
          return this.$store.state.status;
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