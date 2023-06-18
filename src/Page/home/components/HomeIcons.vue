<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/hotel.png">
            </div>
            <p class="icon-desc">酒店</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/hotel.png">
            </div>
            <p class="icon-desc">酒店</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/hotel.png">
            </div>
            <p class="icon-desc">酒店</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/hotel.png">
            </div>
            <p class="icon-desc">酒店</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/hotel.png">
            </div>
            <p class="icon-desc">酒店</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/hotel.png">
            </div>
            <p class="icon-desc">酒店</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/hotel.png">
            </div>
            <p class="icon-desc">酒店</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/hotel.png">
            </div>
            <p class="icon-desc">酒店</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeIcons"
}
</script>

<style lang="stylus" scoped>
@import '@/assets/style/varibles.styl';
.icons{
 overflow: hidden;
 height 0px;
 padding-bottom: 50%
}
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
}
</style>