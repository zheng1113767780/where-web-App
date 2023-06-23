<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{ item.desc }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "HomeIcons",
    props:['list'],
    data(){
        return {
            swiperOption:{
                autoplay:false
            }
        }
    },
    computed:{
        pages(){
            const pages = [];
            this.list.forEach((item, index) => {
                const page = Math.floor(index / 8);
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item);
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '@/assets/style/varibles.styl';
.icons >>> .swiper-container{
    height: 0
    padding-bottom: 50%
}
.icons
  margin-top: .1rem
.icons .icon{
    position relative
    overflow: hidden;
    float left
    width 25%
    height: 0
    padding-bottom: 25%
}
.icons .icon .icon-img
    position: absolute;
    top:0px;
    left: 0px;
    right: 0px;
    bottom: .44rem;
    box-sizing: border-box;
    padding: .15rem
.icons .icon .icon-img .icon-img-content{
     display:block;
      width :80%
      margin :0 auto
    }
    
.icons .icon .icon-desc{
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: .44rem;
    line-height: .44rem;
    color: $darkText;
    text-align: center
    ellipsis();
}
</style>