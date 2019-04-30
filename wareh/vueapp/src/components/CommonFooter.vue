<template>
  <div class="footer">
    <ul class="footer-list" :style="{background:selectMeau.bg}">
      <li v-for="(obj,index) in meau" :key="index" @click="$emit('change')">
        <router-link :to="obj.path">{{obj.name}}</router-link>
        </li> 
    </ul>
  </div>
</template>

<script>
export default {
    props:["meau","selectMeau"]
};
</script>

<style  scoped>
.footer {
  position: fixed;
  bottom: 0px;
  height: 1rem;
  background: #f00;
  line-height: 1rem;
  width: 100%;
}
.footer-list {
    display: flex;
}
.footer-list li{
    flex:1;
    text-align: center;
}
.footer-list a{
    outline: none;
    color: #000;

}
.footer-list a.router-link-active{
    color: #fff;
} 
</style>