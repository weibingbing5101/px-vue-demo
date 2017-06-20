<template>
  <div class="warp-box">
    <MHeader title="珠峰书城"></MHeader>
    <div v-if="sliderimgs.length">
      <Slider :data="sliderimgs"></Slider>
    </div>
    <p class="new-update">最新上架</p>
    <ul class="books" v-show="books.length">
      <li class="books-itme" v-for="item in books">
        <img class="books-itme-img" v-lazy="item.bookCover" :alt="item.id">
        <span class="books-itme-span">{{item.bookName}} <br/><br/><br/> {{item.content}}</span>
      </li>
    </ul>
    <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
  import {getSliderImg, getBooks} from '../api/';
  import Slider from '../components/Slider';
  import Loading from '../components/Loading';
  import MHeader from 'components/MHeader'

  export default {
    name: 'Home',
    data () {
      return {
        sliderimgs: [],
        books: [],
        isLoading:true
      }
    },
    created(){
      setTimeout(()=>{
        getBooks().then((data)=>{
          this.books = data;
          console.log(data);
          this.isLoading = false;
        })
      },1000);

      
      getSliderImg().then((data)=>{
        console.log(data);
        this.sliderimgs = data;
      });
      
      
    },components:{
      Slider,Loading,MHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.warp-box{
}
.books{
  padding: 10px;
  height: auto;
}
.books-itme{
  display: flex;
  margin: 0px;
  width: 100%;
  height: 140px;
}
.books-itme-img{
  flex: 3;
  width: 30%;
}
.books-itme-span{
  flex: 7;
  width: 65%;
  padding: 20px 0px;
}
.new-update{
  line-height: 40px;
  padding-left: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
