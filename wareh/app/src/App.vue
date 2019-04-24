<template>
  <div>
    <div id="app">
      <!-- 内容进行切换，页面不更新 -->
      <router-link to="/home">首页</router-link>|
      <router-link to='/a'>A页面</router-link>|
      <router-link to='/b'>B页面</router-link>
    </div>
    <!-- 用于占位  <router-view/> -->
    <router-view/>  
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>