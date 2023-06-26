<template>
    <div>
        <top-header :city="city"></top-header>
        <swiper :list="swiperList"></swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import axios from 'axios';
import HomeIcons from './components/HomeIcons.vue';
import HomeRecommend from './components/HomeRecommend.vue';
import HomeWeekend from './components/HomeWeekend.vue';
import Swiper from './components/Swiper.vue';
import TopHeader from './components/TopHeader.vue';
    export default {
        name:"HomePage",
        components:{TopHeader, Swiper, HomeIcons, HomeRecommend, HomeWeekend },
        data(){
            return {
                city:"",
                swiperList:[],
                iconList:[],
                recommendList:[],
                weekendList:[]
            }
        },
        methods:{
            getHomeInfo(){
                axios.get('mock/data.json')
                .then(res=>{
                    if(res.data.ret && res.data.data){
                        this.city = res.data.data.city;
                        this.swiperList = res.data.data.swiperList;
                        this.iconList = res.data.data.iconList;
                        this.recommendList = res.data.data.recommendList;
                        this.weekendList = res.data.data.weekendList;
                    }
                })
            }
        },
        mounted(){
            this.getHomeInfo()
        }
    }
</script>

<style lang="scss" scoped>

</style>