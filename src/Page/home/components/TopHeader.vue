<template>
    <div class=header>
        <div class="left">
            <div class="iconfont back-icon">&#xe61e;</div>
        </div>
        <div class="input">
            <span class="iconfont">&#xe604;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="right">
                {{ this.city}}
                <span class="iconfont arrow-icon">&#xe621;</span>
            </div>
            <!-- <router-view></router-view> -->
        </router-link>
    </div>
</template>

<script>
import { mapState  } from 'vuex';
export default {
    name: "TopHeader",
    computed:{
        ...mapState(["city"]),//mapState-->vuex提供的语法--简化this.$store.state
        // ...mapGetters(["doubleCity"])//mapGetters-->vuex提供的语法--改善getters
    }
}
</script>

<style lang="stylus" scoped>
@import '@/assets/style/varibles.styl';
.header{
    display: flex
    line-height:$headerHeight;
    background: $bgColor;
    color: #fff;
}
.header .left{
    width :.64rem;
    float: left;
}
.back-icon{
        text-align: center;
        font-size: .4rem;
    }
.header .input{
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    margin-top:.12rem;
    margin-left: .2rem;
    padding-left: .2rem;
    background: #fff;
    border-radius: .1rem;
    color: #ccc;
}
.header .right{
    min-width :1.04rem;
    padding: 0 .1rem;
    float: right
    text-align: center
    color: #fff
}
.arrow-icon{
    margin-left: -0.1rem
}
</style>