import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from '@/Page/home/HomePage.vue'
import Homecity from '@/Page/city/HomeCity.vue'

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
        }
];
const router = new VueRouter({
    mode:"history",
    base:process.env.BASE_URL,
    routes
})  
export default router;