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
                {{ this.$store.state.city}}
                <span class="iconfont arrow-icon">&#xe621;</span>
            </div>
            <!-- <router-view></router-view> -->
        </router-link>
    </div>
</template>

<script>
export default {
    name: "TopHeader",
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
    width :1.24rem;
    float: right
    text-align: center
    color: #fff
}
.arrow-icon{
    margin-left: -0.1rem
}
</style>