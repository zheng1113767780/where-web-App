<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
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
                    imgUrl: "https://imgs.qunarzz.com/p/p7/201302/28/01484f7b0694f0f593835fbb.jpg_216x190_4d4bfe98.jpg",
                    title: "新疆",
                    desc: "体验异域风情"
                },
                {
                    id: "0002",
                    imgUrl: "https://imgs.qunarzz.com/p/p7/201302/28/01484f7b0694f0f593835fbb.jpg_216x190_4d4bfe98.jpg",
                    title: "新疆",
                    desc: "体验异域风情"
                },
                {
                    id: "0003",
                    imgUrl: "https://imgs.qunarzz.com/p/p7/201302/28/01484f7b0694f0f593835fbb.jpg_216x190_4d4bfe98.jpg",
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
.item
 overflow: hidden
 display: flex;
 height: 1.9rem;
 .item-img
   width 1.7rem;
   height 1.7rem;
   padding: .1rem
 .item-info
   flex: 1;
   padding: .1rem;
   min-width 0;
   .item-title
     line-height: .54rem;
     font-size: .32rem;
     ellipsis();
   .item-desc
      line-height: .4rem;
      color: #ccc;
      ellipsis();
   .item-button
      line-height: .44rem;
      margin-top:.16rem;  
      padding: 0 .2rem;
      background: #ff9300;
      border-radius: .06rem;
      color: #fff;
</style>