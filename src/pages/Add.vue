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
          <button @click="add">添加图书</button>
        </div>
      </div>
  </div>
</template>

<script>
import MHeader from '../components/MHeader';
import {addBook} from '../api/index.js';

let id = (this.$router && this.$router.query && this.$router.query.id) ?this.$router.query.id :'' ;

export default {
	computed: {
		// title: id ? '修改图书' : '添加图书'
	},
  data () {
    return {
      book:{
      	bookName:'',
      	bookCover:'',
      	content:''
      },
      title: id ? '修改图书' : '添加图书'
      // bookID: this.$router.params.id   // 路由传过来的ID
    }
  },
  components:{ MHeader },
  methods: {
    add(){
      addBook(this.book).then( data =>{
         this.$router.push('/list');
      });
    }
	},
	created(){
		if(id){
			getBookinfo({'id': id}).then((data)=>{
				this.bood = data;
			});
		}
  },
  activated(){  // 清除keep-alive 所带来的缓存

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
