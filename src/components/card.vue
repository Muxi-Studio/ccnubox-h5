<template>
    <div class="page_item" :class="page[2]">
        <div class="page">
            <div class="header margin_auto">
                <img src="../assets/xianquan.png">
            </div>
            <div class="heading margin_auto">
                <img src="../assets/heading.png">
            </div>
            <div class="card_cont margin_auto">
                <div class="card_1 fade_in_3">
                    <img src="../assets/card_1.png">
                </div>
                <div class="card_2 fade_in_6">
                    <img src="../assets/card_2.png">
                </div>
                <div class="card_3 fade_in_9">
                    <img src="../assets/card_3.png">
                </div>
            </div>
            <div class="hurt_deg_cont margin_auto  fade_in_12">
                <img src="../assets/hurt_deg.png">
            </div>
            <ul class="hurt_dot_cont  fade_in_12">
                <li class="finger"><img src="../assets/finger.png"></li>
                <li @click='score($index)' v-for="item in dot" track-by="$index" :class='dot[$index]'>
                    <img v-if='("dot_empty")==(dot[$index])' src="../assets/dot_empty.png" height="49" width="30">
                    <img v-else src="../assets/dot_fill.png" height="49" width="30">
                </li>
            </ul>
            <div  @click="next(2)" class="next_bt_cont">
                <img src="../assets/next_bt.png">
            </div>
        </div>
        <div class="page_bottom_cont">
            <img src="../assets/page_bottom.png">
        </div>
    </div>
</template>
<script>
var dot=[],
count=0;
export default {
    props: ['control'],
    data(){
        return {
            dot: Array.from(this.control.dots),
            page: this.control.page,
            num: this.control.num
        }
    },
    methods:{
        score(i){
            var len=this.dot.length;
            for(var j=0;j<=len-1;j++){
                j<=i?this.dot.$set(j,'dot_fill'):this.dot.$set(j,'dot_empty')
            }
            count=i+1;
        },
        next(i){
            var self=this;
            self.page.$set(i,'next_page');
            self.num.$set(i,count);
            setTimeout(()=>{
                self.page.$set(i,'hide');
                self.page.$set(i+1,'current');
            },600)
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only-->
<style lang='scss' scoped>
@function x_size($size_x) {
    @return ($size_x / 640)*100%;
}
@function y_size($size_y) {
    @return ($size_y / 1136)*100;
}
@mixin eliminate_flash {
    -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    -webkit-backface-visibility:hidden;
            backface-visibility:hidden;
}
.finger {
    position: absolute;
    left: x_size(205);
    bottom: y_size(400);
    width: 25px;
    height: 30px;
}
.heading {
    width: x_size(546);
    height: y_size(102);
    padding-top: y_size(32);
}
.floder_cont,
.next_bt_cont {
    position: absolute;
}
.card_cont {
    padding-top: y_size(38);
    padding-bottom: y_size(23);
    padding-left: x_size(64);
}
.card_1,.card_2,.card_3 {
    display: inline-block;
}
.card_1 {
    width: x_size(259);
    height: y_size(152);
}
.card_2 {
    width: x_size(285);
    height: y_size(158);
}
.card_3 {
    width: x_size(560);
    height: y_size(272);
}
.current {
    .finger {
        -webkit-animation: finger_translateY 1s linear 1.2s 4;
                animation: finger_translateY 1s linear 1.2s 4;
        -webkit-transform-origin: bottom left;
            -ms-transform-origin: bottom left;
                transform-origin: bottom left;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
                @include eliminate_flash;
    }
}
@-webkit-keyframes finger_translateY {
    0% { 
        -webkit-transform: translateY(0); 
                transform: translateY(0)
    }
    100% { 
        opacity: 0;
        filter: alpha(opacity=0);
        -webkit-transform: translateY(30px);
                transform: translateY(30px)
    }
}
@keyframes finger_translateY {
    0% { 
        -webkit-transform: translateY(0); 
                transform: translateY(0)
    }
    100% { 
        opacity: 0;
        filter: alpha(opacity=0);
        -webkit-transform: translateY(30px);
                transform: translateY(30px)
    }
}
</style>