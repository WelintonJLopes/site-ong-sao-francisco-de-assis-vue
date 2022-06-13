import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior: function (to) {
        if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '/',
            name: 'Home',
            props: true,
            component: () => import('../components/Home'),
            meta: {
                title: 'Home'
            }
        },
        {
            path: '*',
            component: () => import('../components/404'),
        }
    ]
})

router.beforeEach((to, from, next) => {
    next()
})

router.afterEach(() => { })

export default router