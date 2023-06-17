<template>
    <div>
        <top-header></top-header>
        <swiper></swiper>
    </div>
</template>

<script>
import Swiper from './components/Swiper.vue';
import TopHeader from './components/TopHeader.vue';
    export default {
        name:"HomePage",
        components:{TopHeader, Swiper}
    }
</script>

<style lang="scss" scoped>

</style>