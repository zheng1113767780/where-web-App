<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img"
                src="https://img1.qunarzz.com/p/tts1/1703/20/efe6ed87cf49a02.jpg_r_640x420x95_e8d994b8.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">青岛红树林度假世界</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe622;</span>39</div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClick"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from '@/common/gallary/CommonGallary.vue'
export default {
    components: { CommonGallary },
    name: "DetailBanner",
    data() {
        return {
            showGallary:false,
            imgs: [
                'https://img1.qunarzz.com/p/tts1/1703/20/efe6ed87cf49a02.jpg_r_1280x840x95_5be24d9c.jpg',
                'https://img1.qunarzz.com/p/tts9/1803/25/6f18e5b3ae5b8102.jpg_r_1280x840x95_60375163.jpg'
            ]
        }
    },
    methods:{
        handleBannerClick(){
            this.showGallary = true;
        },
        handleGallaryClick(){
            this.showGallary = false;
        }
    }
}
</script>

<style lang="stylus" scoped>
.banner
 position relative
 overflow: hidden;
 height: 0;
 padding-bottom: 55%;
 .banner-img
  width 100%;
 .banner-info
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom:0;
  line-height: .6rem;
  color: #fff;
  background-image: -webkit-linear-gradient(top, rgba( 0, 0, 0, 0), rgba( 0, 0, 0, 0.8))
  .banner-title
   flex: 1;
   font-size: .32rem;
   padding: 0 .2rem;
  .banner-number
   height: .32rem;
   line-height: .32rem;
   margin-top: .14rem;
   padding: 0 .4rem;
   border-radius: .2rem;
   background: rgba( 0 , 0 , 0 , .8);
   font-size: .24rem;
   .banner-icon
    font-size: .24rem;
</style>