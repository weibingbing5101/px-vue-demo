<template>
    <div>
      <m-header title="列表页"></m-header>
      <scroller :on-refresh="refresh" ref="scroller" class="top">
      <ul class="list">
        <li v-for="book in books">
          <img v-lazy="book.bookCover" alt="">
          <div>
            <h3>{{book.bookName}}</h3>
            <p>{{book.content}}</p>
            <div class="btn-list">
              <router-link :to="{ path:'/add', 'query': { 'id':  book.id} }" tag="button">修改</router-link>
              <button @click="remove(book.id)">删除</button>
            </div>
          </div>
        </li>
      </ul>
      </scroller>
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
          this.getList();
        },
        computed: {
          
        },
        components: {MHeader},
        methods: {
          refresh(){
                //获取最新数据
            this.getList();
          },
          getList(){
            getBookList().then(data=>{
            // console.log('图书列表');
              this.books = data;//读取所有图书放到数组中
              this.$refs.scroller.finishPullToRefresh();
            })
          },
          remove(idn){
            deleteBook({id: idn}).then((data)=>{
              this.books = this.books.filter(item=>item.id!=idn);
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
.top{margin-top:40px}
.list .btn-list{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
button{
  border: 1px solid #ccc; border-radius: 5px;
  width: 80px;
}

</style>
