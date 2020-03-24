<template>
    <div>
        <button @click="getData">获取数据</button>
        <button @click="delData">清除数据</button>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                {{index+1}}:{{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                list:[],
            }
        },
        methods: {
            delData:function(){
                this.list=[];
            },
            ajax(){
                // let movieUrl = "https://bird.ioliu.cn/v1?url=http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10"
                //  //第一步：创建XMLHttpResquest对象
                //  //创建这个对象有兼容性问题，
                //  //首先判断window下有没有XMLHttpResquest对象，如果有new一个新对象
                //  //上面的是比较新的浏览器，对于早期的IE浏览器兼容一下
                //  let xmlHttp;
                //  if(window.XMLHttpRequest){
                //      xmlHttp = new XMLHttpRequest;
                //  }else{
                //      xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
                //  }
                //  //第二步：发送请求
                //  //第一个参数是发送请求的方式，第二个参数是请求地址URL，
                //  //第三个参数是是否异步，一般都是true
                // xmlHttp.open('GET',movieUrl,true);
                // xmlHttp.send();
                // //第三步：服务器端响应
                // //首先用addEventListener监听readystatechange事件，
                // //第一个参数事件名称，第二个参数事件处理函数
                // //判断readyState状态码是否等于4，并且http状态码status是否等于200
                // //是的话，定义一个对象取到返回的反应responseText
                // //取过来的数据是字符串，要用JSON.parse()转化成json对象
                // xmlHttp.addEventListener("readystatechange",()=>{
                //     if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                //         let obj = JSON.parse(xmlHttp.responseText)
                //         console.log(obj);
                //         //第四步，取到数据进行页面显示
                //         this.list = obj.subjects;
                //     }
                // })



                axios.get('https://bird.ioliu.cn/v1?url=http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10').then(res=>{
                    console.log(res);
                    this.list=res.data.subjects;
                })
            },
            getData(){
                this.ajax();
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>