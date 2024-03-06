import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

import PcHome from '@pc/pages/LayoutPage/index.vue';

import Login from '@pc/pages/LoginPage/index.vue';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/pc-login'
	},
	{ path: '/pc-login', component: Login },
	{
		path: '/pc',
		component: PcHome,
		children: [
			{ path: 'dash', component: import('@/pc/pages/LayoutPage/DashBoard/index.vue') },
			{ path: 'new', component: import('@/pc/pages/LayoutPage/NewProject/index.vue') },
			{ path: 'set', component: import('@/pc/pages/LayoutPage/SetConfig/index.vue') },
			{ path: 'code', component: import('@/pc/pages/LayoutPage/CodeView/index.vue') }
		]
	},
	{ path: '/setting', component: import('@/mobile/pages/Setting/index.vue') },
	{ path: '/result', component: import('@/mobile/pages/Result/index.vue') }
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
