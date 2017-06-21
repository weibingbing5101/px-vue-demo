import Vue from 'vue'
//vue脚手架 帮我们将组件可以封装成.vue文件
import App from './App'
import router from './router'
import './assets/index.less'; // 公用样式
import VueLazyLoad from 'vue-lazyload';
import VueScroller  from 'vue-scroller';
import store from './store/';

Vue.use(VueLazyLoad);
Vue.use(VueScroller);//引用这个组件后 也面会多一个全局组件 scroller

new Vue({
    el: '#app',
    router,
    // template: '<App/>',  // runtime + compiler  runtime only(不支持template写法)

    // run time only 基于.vue文件
    render: (h) => { // 只对根元素
        return h(App);
    },
    // ...App, // 直接将组件解构放到当前实例下即可  如果使用...App需要把components 和 render 去掉
    // components: { App },
    store
})
