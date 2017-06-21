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
      title: '添加图书',
      id:''
      // bookID: this.$route.params.id   // 路由传过来的ID
    }
  },
  components:{ MHeader },
  methods: {
    add(){
      addBook(this.book).then( data =>{
         this.$route.push('/list');
      });
    }
	},
	created(){
		this.id = (this.$route && this.$route.query && this.$route.query.id) ? this.$route.query.id :'' ;
		if(this.id){
			this.title = '修改图书';
			getBookinfo({'id': this.id}).then((data)=>{
				this.bood = data;
			});
		}else{
			this.title = '添加图书';
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
