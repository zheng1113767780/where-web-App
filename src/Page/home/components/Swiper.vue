<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    
    name: "HomeSwiper",
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [
                {
                    id: 1001,
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1810/22/b036f54d85ea22.jpg_r_640x214_3e6eb1bb.jpg'
                },
                {
                    id: 1002,
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1507/82/06e79c5f8d6e7.jpg_r_640x214_5e63707e.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff;
    
.wrapper{
    overflow: hidden;
    width :100%;
    height: 0;
    padding-bottom: 31.25%
    background: #eee;
}
.wrapper .swiper-img{
    width: 100%;
}
</style>