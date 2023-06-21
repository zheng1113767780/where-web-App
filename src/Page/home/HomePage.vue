<template>
    <div>
        <top-header></top-header>
        <swiper></swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
    </div>
</template>

<script>
import HomeIcons from './components/HomeIcons.vue';
import HomeRecommend from './components/HomeRecommend.vue';
import Swiper from './components/Swiper.vue';
import TopHeader from './components/TopHeader.vue';
    export default {
        name:"HomePage",
        components:{TopHeader, Swiper, HomeIcons, HomeRecommend}
    }
</script>

<style lang="scss" scoped>

</style>