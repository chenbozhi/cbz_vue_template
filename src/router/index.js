import * as VueRouter from 'vue-router'
import HomeView from "../views/home/HomeView.vue";


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
    }
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
