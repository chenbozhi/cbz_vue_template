import * as VueRouter from 'vue-router'
import HomeView from "../views/home/HomeView.vue";
import BillList from "../views/manage/bill/BillList.vue";
import AddBill from "../views/manage/bill/AddBill.vue";


const routes = [
    {
        name: '/',
        redirect: '/home',
    },
    {
        name: 'homeView',
        path: '/home',
        component: HomeView,
        meta: {
            title: '首页',
        }
    },
    {
        name: 'billList',
        path: '/manage/billList',
        component: BillList,
        meta: {
            title: '账单列表',
        }
    },
    {
        name: 'addBill',
        path: '/manage/addBill',
        component:  AddBill,
        meta: {
            title: '添加账单',
        }
    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {

    document.title = to.meta.title ? to.meta.title : '';

    next()
})


router.afterEach(() => {

})

export default router
