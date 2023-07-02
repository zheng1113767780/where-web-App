import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from '@/Page/home/HomePage.vue'
import Homecity from '@/Page/city/HomeCity.vue'
import TiaoDetail from '@/Page/detail/TiaoDetail'

Vue.use(VueRouter);

const routes=[
        {
            path: "/",
            name: "Home",
            component:HomePage
        },
        {
            path: "/city",
            name: "City",
            component:Homecity
        },
        {
            path:"/detail/:id",
            name:"Detail",
            component:TiaoDetail
        }
];
const router = new VueRouter({
    mode:"history",
    base:process.env.BASE_URL,
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
      }
})
export default router;