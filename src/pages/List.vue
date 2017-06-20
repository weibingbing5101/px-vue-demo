<template>
    <div>
      <m-header title="列表页"></m-header>
      <ul class="list">
        <li v-for="book in books">
          <img v-lazy="book.bookCover" alt="">
          <div>
            <h3>{{book.bookName}}</h3>
            <p>{{book.content}}</p>
            <button @click="remove(book.id)">删除</button>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
    import MHeader from '../components/MHeader';
    import {getBookList, deleteBook} from '../api';
    export default {
        data(){
          return {books:[],id:''}
        },
        created(){
          getBookList().then(data=>{
            // console.log('图书列表');
            this.books = data;//读取所有图书放到数组中
          })
        },
        computed: {},
        components: {MHeader},
        methods: {
          remove(idn){
            deleteBook({id: idn}).then((data)=>{
              this.books = this.books.filter(item=>item.id!=id);
            });
          }
        }
    }
</script>
<style scoped lang="less">
.list{
  li{
    display: flex;
    border-bottom: 1px solid #ccc;
    img{width: 100px;height: 90px}
    div{
      h3{color: #666666;margin: 5px;}
      display: flex;
      flex-direction: column;
    }
  }
}
button{
  border: 1px solid #ccc; border-radius: 10px;
}

</style>
