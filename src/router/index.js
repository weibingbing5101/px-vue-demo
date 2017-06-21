import Vue from 'vue'
import Router from 'vue-router'

// import Hello from '@/components/Hello'  

import Home from '../pages/Home'
import List from '../pages/List'
import Collect from '../pages/Collect'
import Add from '../pages/Add'


Vue.use(Router); // vue-router 是vue的一个插件，需要use一下还可以使用

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
        // component: Home
    }, {
        path: '/home',
        component: Home
    }, {
        path: '/list',
        // name: 'List',
        component: List
    }, {
        path: '/collect',
        // name: 'List',
        component: Collect
    }, {
        path: '/add',
        // name: 'List',
        component: Add
    }],
    linkActiveClass: 'active'   // 设置选中的颜色
})
