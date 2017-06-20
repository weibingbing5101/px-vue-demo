<template>
  <div>
    <Tab></Tab>
    <router-view></router-view>
    <!-- 此处可以放N多组件公用的组件，例如导航头部     注：已经使用了路由，所以没必要再引入Home组件了-->
  </div>
</template>

<script>
import Tab from './components/Tab';
export default {
  data(){
    return {}
  },
  methods:{

  },
  computed:{

  },
  components:{
    Tab
  }
}
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
