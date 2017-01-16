import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import List from '../assets/js/list';
import App from '../assets/js/common';
//vuex中数据
const state = {
	luckier: '',
	status: true,
	itval: ''
};
//抽奖人数
const lotteryNum = 10;

//同步事件
const mutations = {
	lottery() {
		if (state.status) {
			let len = List.data.length;
			let arr = App.randArr(len);
			let i = 0;
			state.itval = setInterval(() => {
				mutations.getLuckier(arr, i);
				//每次刷新切换3名人员
				i += (lotteryNum / 3 + 1);
				if (i > len - lotteryNum - 1) {
					i = 0;
					arr = App.randArr(len);
				}
			}, 80);
		} else {
			clearInterval(state.itval);
		}
		state.status = !state.status;
	},
	getLuckier(arr, i = 0) {
		let luckier = arr.slice(i, lotteryNum + i);
		state.luckier = luckier.map((item) => {
			return List.data[item][1] + ' ' + List.data[item][0];
		});
	}
};


export default new Vuex.Store({
	state,
	mutations
});