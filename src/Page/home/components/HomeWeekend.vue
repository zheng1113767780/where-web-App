<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border bottom" v-for="item of list" :key="item.id">
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
    props:['list']
}
</script>

<style lang="stylus" scoped>
@import '@/assets/style/mixins.styl'
.title
 line-height: .8rem;
 background: #eee;
 text-indent: .2rem
.itme-img-wraaper
   overflow: hidden;
   height 0px;
   padding-bottom 37.09%;
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