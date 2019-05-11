<template>
    <div>
        <transition-group name="fade" tag="ul" class="slide-box">
         <li class="slide-item" v-for="(img,index) in imgs" :key="index" v-show="index == idx ">
                <img :src="img"/>
            </li>
     
        </transition-group>
        
           
    </div>
</template>

<script>
    export default {
        props:['imgs'],
        data(){
            return{
                idx:0
            }
        }
    }
</script>

<style  scoped>
.slide-box{
    position: relative;
}
.slide-item{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 4rem;
}
.slide-item img{
    width: 100%;
    height: 100%;
}
.slide-item:first-child{
    /* z-index: 2; */
    display: block;
}

/* 过渡动画 */
.fade-enter{
    transform: translateX(-100%);
}
.fade-enter-active{
    transform: transform 1s;
}
.fade-enter-to{
    transform: translateX(0) ;
}
.fade-leave{
    transform: translateX(0) ;
}
.fade-leave-active{
    transform: transform 1s;
}
.fade-leave-to{
    transform: translateX(100%) ;
}
</style>