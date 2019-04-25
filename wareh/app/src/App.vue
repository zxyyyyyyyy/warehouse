<template>
  <div>
    <div id="app">
      <!-- 内容进行切换，页面不更新 -->
      <router-link to="/">首页</router-link>|
      <router-link to="/a">A页面</router-link>|
      <router-link to="/home">home</router-link>|
      <!-- <router-link to='/b'>B页面</router-link> -->
      <router-link :to="{name:'b',params:{name:'zs'}}">B页面</router-link>|
      <router-link to="/c/666">C页面</router-link>
      <router-link to="/b/888">B页面重定向C页面</router-link>
      <router-link to="/xxx">别名</router-link>
    </div>

    <transition name="fade">
      <!-- 用于占位  <router-view/> -->
      <router-view/>
      <!-- <router-view/>  包在transition里面 -->
    </transition>

    <!-- 上一页   下一页    返回首页 -->
    <button @click="goPrev()">&lt;</button>
    <button @click="goNext()">&gt;</button>
    <button @click="goHome()">home</button>


  </div>
</template>

<script>
export default {
  methods:{
    goPrev(){
      this.$router.go(-1);
    },
    goNext(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
};
</script>

<style >
/* 进来之前 */
.fade-enter {
  opacity: 0;
}
/* 进来之前到之后进行的动画 */
.fade-enter-active {
  transition: opacity 2s ease 1s;
}
/* 进来之后 */
.fade-enter-to {
  opacity: 1;
}
/* 离开之前 */
.fade-leave {
  opacity: 1;
}
/* 离开之前到之后的动画效果 */
.fade-leave-active {
  transition: opacity 2s ease;
}
/* 离开之后 */
.fade-leave-to {
  opacity: 0;
}
</style>