<template>
  <div class="movie-container">
    <ul>
      <li v-for="(obj,index) in movieList" :key="index" class="movie-list" @click="goDetail(obj.id)">
        <img class="movie-img" :src="obj.images.medium">
        <div class="movie-text">
          <h4>{{obj.title}}</h4>
          <p>{{obj.year}} 年</p>
          <p>
            <span v-for="(cast,index) in obj.casts" :key="index">{{cast.name}}</span>
          </p>
          <p v-for="(director,index) in obj.directors" :key="index">导演:{{director.name}}</p>
          <p>
            <span v-for="(genre,index) in obj.genres" :key="index">{{genre}}</span>
          </p>
          <p>{{obj.collect_count}} 人已观看</p>
        </div>
      </li>
    </ul>
    <div class="loading" v-show="isShow">
      <img src="@/assets/imgs/loading.gif" alt>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieList: [],
      isShow: true,
      isBottom: false
    };
  },
  created() {
    //No 'Access-Control-Allow-Origin' 跨域
    //跨域问题  域名 协议 端口号   只要有一个不同即为跨域 安全限制
    //jsonbird  解决跨域

    // axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=深圳&start=0&count=10')
    // // axios.get('/data/movie0.json')
    // .then((result) => {
    //     this.movieList = result.data.subjects;
    //     console.log(this.movieList);
    // })
    this.getMovie();
    window.onscroll = () => {
      //滚动条滚动的距离高度
      let scrollTop = document.documentElement.scrollTop;
      // 可视区高度
      let clientHeight = document.documentElement.clientHeight;
      // 页面的总高度
      let scrollHeight = document.documentElement.scrollHeight;
      if (scrollTop + clientHeight == scrollHeight && !this.isBottom) {
        //加载下一屏
        this.getMovie();
      }
    };
  },
  methods: {
    getMovie() {
        this.isShow=true;
      axios
        .get(
          "https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=上海&start=" +
            this.movieList.length +
            "&count=10"
        )
        // axios.get('/data/movie0.json')
        .then(result => {
          this.isShow = false;
          this.movieList = [...this.movieList, ...result.data.subjects];
          if (this.movieList.length == result.data.total) {
            this.isBottom = true;
          }
          console.log(this.movieList);
        });
    },
    goDetail(id){
        this.$router.push("/moviedetail/"+id);
    }
  }
};
</script>

<style  scoped>
.movie-container {
  padding: 0 0.2rem;
}
.movie-list {
  display: flex;
  border-bottom: 1px solid #000;
  padding: 0.2rem 0;
}
.movie-img {
  width: 100px;
  height: 150px;
  margin-right: 0.2rem;
}
.movie-text {
  flex: 1;
}
.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
}
</style>