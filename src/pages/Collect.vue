<template>
  <div>
    <m-header title="收藏"></m-header>
    <ul class="collect-list">
        <li v-for="col in collect">
          <img :src="col.bookCover" alt="">
          <div>
            {{col.bookName}}
            <a @click="cancel(col.id)">取消收藏</a>
          </div>

        </li>
      </ul>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import * as Types from '../store/mutation-types'
import MHeader from '../components/MHeader';
// import {getBookList, deleteBook} from '../api';
export default {
  // name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your VueVueVue.js App'
    }
  },
  components: {MHeader},
  computed: {
      ...mapState(['collect'])
  },
  methods:{
    ...mapMutations([Types.REMOVE_COLLECT]),
    cancel(id){
      console.log(id);
      this[Types.REMOVE_COLLECT](id);
    }
  }
}
</script>

<style scoped lang='less'>
.collect-list{
  li{
    img{width: 120px;height: 120px;margin: 10px}
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ccc;
    align-items: center;
  }
}
</style>








