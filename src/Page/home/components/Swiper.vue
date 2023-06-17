<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img"
                    :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination" style="background: #f00;">515151</div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "HomeSwiper",
    data() {
        return {
            swiperOption: {
                pagination:'.swiper-pagination',
                loop:true
            },
            swiperList:[
                {
                    id:1001,
                    imgUrl:'//img1.qunarzz.com/sight/p0/1509/6a/6a2eaa0679697639.water.jpg_600x330_56500859.jpg'
                },
                {
                    id:1002,
                    imgUrl:'//img1.qunarzz.com/sight/p0/2005/2e/2ed18bbb08e9192aa3.water.jpg_600x330_20e0eaa6.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active{
    background: #fff
}
    
.wrapper{
    overflow: hidden;
    width :100%;
    height: 0;
    padding-bottom: 35.5%
    background: #eee;
}
.wrapper .swiper-img{
    width: 100%;
    height: 150px;
}
</style>