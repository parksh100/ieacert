import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
	{
		path: '/product/category',
		name: 'product_category',
		component: () =>
			import(
				/* webpackChunkName: "product" */ '../views/category/CategoryView.vue'
			)
	},
	{
		path: '/supplier/create',
		name: 'supplier_create',
		component: () =>
			import(
				/* webpackChunkName: "supplier" */ '../views/supplier/SupplierCreate.vue'
			)
	},
	{
		path: '/supplier/list',
		name: 'supplier_list',
		component: () =>
			import(
				/* webpackChunkName: "supplier" */ '../views/supplier/SupplierListView.vue'
			)
	},
	{
		path: '/supplier/detail',
		name: 'supplier_detail',
		component: () =>
			import(
				/* webpackChunkName: "supplier" */ '../views/supplier/SupplierDetailView.vue'
			)
	},
	{
		path: '/product/create',
		name: 'product_create',
		component: () =>
			import(
				/* webpackChunkName: "product" */ '../views/product/ProductCreateView.vue'
			)
	},
	{
		path: '/product/list',
		name: 'product_list',
		component: () =>
			import(
				/* webpackChunkName: "product" */ '../views/product/ProductListView.vue'
			)
	},
	{
		path: '/product/detail',
		name: 'product_detail',
		component: () =>
			import(
				/* webpackChunkName: "product" */ '../views/product/ProductDetailView.vue'
			)
	},
	{
		path: '/order/create',
		name: 'order_create',
		component: () =>
			import(
				/* webpackChunkName: "order" */ '../views/order/OrderCreateView.vue'
			)
	},
	{
		path: '/shipper',
		name: 'shipper',
		component: () =>
			import(
				/* webpackChunkName: "shipper" */ '../views/shipper/ShipperView.vue'
			)
	},

	// iea페이지

	{
		path: '/aboutiea/about',
		name: 'aboutiea/about',
		component: () =>
			import(
				/* webpackChunkName: "aboutiea" */ '../views/aboutiea/AboutView.vue'
			)
	},
	{
		path: '/aboutiea/ethic',
		name: 'aboutiea/ethic',
		component: () =>
			import(
				/* webpackChunkName: "aboutiea" */ '../views/aboutiea/EthicView.vue'
			)
	},
	{
		path: '/aboutiea/impartial',
		name: 'aboutiea/impartial',
		component: () =>
			import(
				/* webpackChunkName: "aboutiea" */ '../views/aboutiea/ImpartialView.vue'
			)
	},
	{
		path: '/aboutiea/logo',
		name: 'aboutiea/logo',
		component: () =>
			import(
				/* webpackChunkName: "aboutiea" */ '../views/aboutiea/LogoGuideView.vue'
			)
	},
	{
		path: '/aboutiea/policy',
		name: 'aboutiea/policy',
		component: () =>
			import(
				/* webpackChunkName: "aboutiea" */ '../views/aboutiea/PolicyView.vue'
			)
	},
	{
		path: '/aboutiea/location',
		name: 'aboutiea/location',
		component: () =>
			import(
				/* webpackChunkName: "aboutiea" */ '../views/aboutiea/LocationView.vue'
			)
	},
	{
		path: '/certification/intro',
		name: 'certification/intro',
		component: () =>
			import(
				/* webpackChunkName: "certification" */ '../views/certification/IntroCertView.vue'
			)
	},

	{
		path: '/certification/search',
		name: 'certification/search',
		component: () =>
			import(
				/* webpackChunkName: "certification" */ '../views/certification/SearchCertView.vue'
			)
	},

	{
		path: '/certification/faq',
		name: 'certification/faq',
		component: () =>
			import(
				/* webpackChunkName: "certification" */ '../views/certification/CertFaqView.vue'
			)
	},
	{
		path: '/register/apply',
		name: 'register/apply',
		component: () =>
			import(
				/* webpackChunkName: "register" */ '../views/register/CertRegisterView.vue'
			)
	},
	{
		path: '/register/fee',
		name: 'register/fee',
		component: () =>
			import(
				/* webpackChunkName: "register" */ '../views/register/CertRegisterFeeView.vue'
			)
	},
	{
		path: '/register/process',
		name: 'register/process',
		component: () =>
			import(
				/* webpackChunkName: "register" */ '../views/register/CertRegisterProcessView.vue'
			)
	},
	{
		path: '/contact/appeal',
		name: 'contact/appeal',
		component: () =>
			import(
				/* webpackChunkName: "contact" */ '../views/contact/AppealView.vue'
			)
	},
	{
		path: '/contact/complaint',
		name: 'contact/complaint',
		component: () =>
			import(
				/* webpackChunkName: "contact" */ '../views/contact/ComplaintView.vue'
			)
	},
	{
		path: '/certification/search',
		name: 'certification/search',
		component: () =>
			import(
				/* webpackChunkName: "certification" */ '../views/certification/SearchCertView.vue'
			)
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
