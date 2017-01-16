// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResource);

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';
// Vue.use(ElementUI);

//组件资源
import home from './components/Home';

//VUEX数据
import store from './store';

const routes = [{
	path: '/',
	component: home
}];

const router = new VueRouter({
	//mode: 'history',//启用后URL中无#字符，需做后端apache/nginx配置
	routes
});

/* eslint-disable no-new */
var vm = new Vue({
	store,
	router,
	el: '#app',
	template: '<router-view/>'
});