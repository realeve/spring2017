import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import List from '../assets/js/list';
import App from '../assets/js/common';
//vuex中数据
const state = {
	luckier: 'tes234t'
};

//同步事件
const mutations = {
	lottery() {
		console.log(List.data);
	}
};


export default new Vuex.Store({
	state,
	mutations
});