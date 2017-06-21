import * as Types from './mutation-types.js';

const mutations = {
    [Types.ADD_COLLECT](state, obj) { // 收藏
        state.collect.push(obj)
    },
    [Types.REMOVE_COLLECT](state, obj) { // 取消收藏
        // state.collect = state.collect.some((item)=>{
        // 	if(item.id == obj.id){
        // 	}
        // });
    }
};



export default mutations;

// let a = { b: 'c' };

// let ax = {
//     a.b: 'xxxxx'
// }
// let ax = {
//     [a.b]: 'xxxxx'
// }
