<template>
    <div>
        <top-header></top-header>
        <swiper></swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import HomeIcons from './components/HomeIcons.vue';
import HomeRecommend from './components/HomeRecommend.vue';
import HomeWeekend from './components/HomeWeekend.vue';
import Swiper from './components/Swiper.vue';
import TopHeader from './components/TopHeader.vue';
    export default {
        name:"HomePage",
        components:{TopHeader, Swiper, HomeIcons, HomeRecommend, HomeWeekend}
    }
</script>

<style lang="scss" scoped>

</style>