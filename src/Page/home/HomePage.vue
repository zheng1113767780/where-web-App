<template>
    <div>
        <top-header></top-header>
        <swiper></swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
import HomeIcons from './components/HomeIcons.vue';
import Swiper from './components/Swiper.vue';
import TopHeader from './components/TopHeader.vue';
    export default {
        name:"HomePage",
        components:{TopHeader, Swiper, HomeIcons}
    }
</script>

<style lang="scss" scoped>

</style>