<template>
  <div id="app">
    <common-header :selectMeau="selectMenu"></common-header>
    <div id="content">
      <router-view></router-view>
    </div>

    <common-footer :meau="menu" :selectMeau="selectMenu" @change="fn"></common-footer>
  </div>
</template>

<script>
// @代表src路径
  import CommonHeader from '@/components/CommonHeader.vue';
  import CommonFooter from '@/components/CommonFooter.vue';
  
  export default{
    data(){
      return{
        menu:[
          {
            name:"电影",
            path:"/movie",
            bg:"#f00"
          },
           {
            name:"音乐",
            path:"/music",
            bg:"#00ffee"
          },
           {
            name:"图书",
            path:"/book",
            bg:"#120ffc"
          },
           {
            name:"图片",
            path:"/photo",
            bg:"#cc2056"
          },
        ],
        selectMenu:{
          name:"电影",
            path:"/movie",
            bg:"#f00"
        }
      };
    },
    components:{
      CommonHeader,
      CommonFooter,
    },
    methods:{
      fn(index){
        // console.log(index);
        this.meau=this.selectMenu;
      }
    }
  };
</script>
  
<style scope>
 #content{
   margin: 1rem 0;
 } 
</style>