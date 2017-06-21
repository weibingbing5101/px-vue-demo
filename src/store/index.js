import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters.js';
import mutations from './mutations.js';

const state = {
    collect: [] // 存放多页面共用数据
};

Vue.use(Vuex);

export default new Vuex.Store({
    state, // 所有数据 
    getters, // 获取所有数据
    mutations // 设置所有数据
});
