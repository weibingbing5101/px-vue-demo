<template>
  <div>
    <m-header title="收藏"></m-header>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import MHeader from '../components/MHeader';
// import {getBookList, deleteBook} from '../api';
export default {
  // name: 'Home',
  computed: {
    // ...mapState(['collect'])
  },
  data () {
    return {
      msg: 'Welcome to Your VueVueVue.js App'
    }
  },
  components: {MHeader}
}
</script>

<style scoped lang='less'>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
