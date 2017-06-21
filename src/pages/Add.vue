<template>
  <div>
    <m-header :title="title"></m-header>
    <div class="add">
        <div class="group">
          <label for="bookName">书名</label>
          <input type="text" id="bookName" placeholder="请输入书名" v-model="book.bookName">
        </div>
        <div class="group">
          <label for="bookName">书的地址</label>
          <input type="text" id="bookCover" placeholder="请输入书的封面" v-model="book.bookCover">
        </div>
        <div class="group">
          <label for="content">书的详情</label>
          <input type="text" id="content" placeholder="请输入书的详细内容" v-model="book.content">
        </div>
        <div class="group">
          <button @click="add">{{title}}</button>
        </div>
      </div>
  </div>
</template>

<script>
import MHeader from '../components/MHeader';
import {addBook, getBookInfo, editBookInfo} from '../api/index.js';

export default {
	computed: {
    // title(){
    //   return 
    // }
		// title: id ? '修改图书' : '添加图书'
	},
  data () {
    return {
      book:{
      	bookName:'',
      	bookCover:'',
      	content:''
      },
      title: '添加图书',
      id:''
      // bookID: this.$route.params.id   // 路由传过来的ID
    }
  },
  components:{ MHeader },
  methods: {
    add(){
      let option = this.book;
      if(this.id){
        editBookInfo(option).then((data)=>{
          this.$route.push('/list');
        });
        return false;
      }
      addBook(option).then( data =>{
         this.$route.push('/list');
      });
    },
    getInfor(){ // 判断是添加图书   还是修改图书
      this.id = (this.$route && this.$route.query && this.$route.query.id) ? this.$route.query.id :'' ;
      if(this.id){
          this.title = '修改图书';
          getBookInfo({'id': this.id}).then((data)=>{
            console.log(data);
            this.book = data;
          });
      }else{
        this.book = {
          bookName:'',
          bookCover:'',
          content:''
        };
        this.title = '添加图书';
      }
    }
	},
	created(){
		this.getInfor();
  },
  activated(){  // 清除keep-alive 所带来的缓存
    this.getInfor();
  }
}
</script>

<style scoped lang='less'>
.add{
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    .group{
      label{
        font-size: 16px;
        line-height: 25px;
      }
      input{
        border: 1px solid #ccc;
        height: 30px;
      }
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      button{
        height: 35px;
        border: 1px solid #ccc;
        border-radius: 10px;
      }
    }
  }
</style>
