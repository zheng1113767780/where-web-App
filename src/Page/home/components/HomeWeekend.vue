<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border bottom" v-for="item of recommendList" :key="item.id">
                <div class="itme-img-wraaper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data() {
        return {
            recommendList: [
                {
                    id: "0001",
                    imgUrl: "https://m.tuniucdn.com/fb2/t1/G1/M00/97/18/Cii9EFi6JJuIa6e1ABdJy6FbDiUAAIT-gNZbxwAF0nj562_w640_h480_c1_t0_w640_h320_c1_t0.jpg",
                    title: "新疆",
                    desc: "体验异域风情"
                },
                {
                    id: "0002",
                    imgUrl: "https://m.tuniucdn.com/fb2/t1/G1/M00/97/18/Cii9EFi6JJuIa6e1ABdJy6FbDiUAAIT-gNZbxwAF0nj562_w640_h480_c1_t0_w640_h320_c1_t0.jpg",
                    title: "新疆",
                    desc: "体验异域风情"
                },
                {
                    id: "0003",
                    imgUrl: "https://m.tuniucdn.com/fb2/t1/G1/M00/97/18/Cii9EFi6JJuIa6e1ABdJy6FbDiUAAIT-gNZbxwAF0nj562_w640_h480_c1_t0_w640_h320_c1_t0.jpg",
                    title: "新疆",
                    desc: "体验异域风情"
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '@/assets/style/mixins.styl'
.recommend-title
 margin-top:.2rem; 
 line-height: .8rem;
 background: #eee;
 text-indent: .2rem
.itme-img-wraaper
   overflow: hidden;
   height 0px;
   padding-bottom 33.9%;
  .item-img
    width 100%
.item-info
    padding: .1rem
 .item-title
  line-height: .54rem;
  font-size: .32rem;
  ellipsis();
 .item-desc
  line-height: .4rem;
  color: #ccc;
  ellipsis();
</style>