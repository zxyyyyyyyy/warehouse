<template>
    <div>
<v-touch
  class="img-box" :style="{backgroundImage:'url('+url+')'}">
    </v-touch>
    </div>
</template>

<script>
import Vue from 'vue';
import VueTouch from 'vue-touch';
Vue.use(VueTouch,{name:'v-touch'})
    export default {
        data() {
            return {
                idx:this.$route.params.index
            }
        },
       computed:{
           url(){
               return this.$store.state.photoData[this.idx].src
           }
       },
       methods: {
           
           
       }, 
    }
</script>

<style  scoped>
.img-box{
    position: absolute;
    left: 0px;
    top: 1rem;
    bottom: 1rem;
    right: 0px;
    background: #000 0 center no-repeat;
    background-size: contain;
}
</style>