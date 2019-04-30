<template>
  <div class="header" :style="{background:selectMeau.bg}">
    <div>
      <span class="header-btn">首页</span>
      <span class="header-title">{{selectMeau.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
    props:['selectMeau']
};
</script>

<style scope>
.header {
  height: 1rem;
  line-height: 1rem;
  background: #ff0000;
  color: #fff;
  position: fixed;
  top: 0px;
  width: 100%;

}

.header-title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>