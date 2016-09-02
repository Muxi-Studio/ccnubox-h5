<template>
    <div class="page_item" :class="page[2]">
        <div class="page">
            <div class="xianquan margin_auto">
            </div>
            <div class="heading margin_auto">
            </div>
            <div class="card_1 fade_in_3">
            </div>
            <div class="card_2 fade_in_6">
            </div>
            <div class="card_3 fade_in_9">
            </div>
            <div class="hurt_deg hurt_deg_cont fade_in_12 margin_auto">
            </div>
            <ul class="hurt_dot_cont fade_in_9">
                <li v-tap='score($index)' v-for="item in dot" track-by="$index" :class='dot[$index]'>
                    <div v-if='("dot_empty")==(dot[$index])' height="49" width="30"></div>
                    <div v-else height="49" width="30"></div>
                </li>
            </ul>
            <div class="finger"></div>
            <div class="floder"></div>
            <div  v-tap="next(2)" class="next_bt next_bt_cont">
            </div>
            <div class="page_bottom_cont page_bottom">
            </div>
        </div>
    </div>
</template>
<script>
var dot=[],
count=0,
store_same=0,
store_double=0;
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
            var len=this.dot.length,
            self=this,
            flag=store_double % 2,
            dot_add=()=>{
                for(var j=0;j<=len-1;j++){
                    j<=i?this.dot.$set(j,'dot_fill'):this.dot.$set(j,'dot_empty')
                }
            },
            dot_reduce=()=>{
                for(var j=0;j<=len-1;j++){
                    j<i?this.dot.$set(j,'dot_fill'):this.dot.$set(j,'dot_empty')
                }
            }
            if(store_same==i){
                if(flag==1){
                    dot_add();
                    count=i+1;
                } else {
                    dot_reduce();
                    count=i;
                }
                store_double++;
            } else{
                store_double=0;
                if (i<store_same) {
                    if(flag==1){
                        i=i-1;
                        dot_add();
                        count=i+1;
                    } else {
                        dot_add();
                        count=i+1;
                    }
                    
                } else {
                    dot_add();
                    count=i+1;
                }
            }
            store_same=i;
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
    left: x_size(185);
    bottom: 24%;
    opacity: 0;
    filter: alpha(opacity=0);
}
.page_item .finger {
  background-image: url(../assets/sprite.png);
  background-position: 0px 9.99868%;
  width: 6.4375%;
  height: 8.18662%;
  background-size: 739.53488% 10612.90323%; }
.page_item .heading {
  background-image: url(../assets/sprite.png);
  background-position: 0px 13.99005%;
  width: 85.3125%;
  height: 8.97887%;
  background-size: 116.48352% 9676.47059%; }
.heading {
    margin-top: 12px;
    margin-bottom: 6px;
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
.page_item .card_1 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 26.8639%;
  width: 40.46875%;
  height: 13.29225%;
  margin-left: x_size(46);
  background-size: 245.55985% 6536.42384%; }
.page_item .card_2 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 28.42379%;
  width: 44.53125%;
  height: 13.82042%;
  background-size: 223.15789% 6286.6242%; }
.page_item .card_3 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 67.34205%;
  width: 83.28125%;
  height: 23.85563%;
  margin-left: x_size(56);
  background-size: 119.32458% 3642.06642%; }
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
                transform: translateY(0);
                opacity: 1;
        filter: alpha(opacity=1);
    }
    100% { 
        opacity: 0;
        filter: alpha(opacity=0);
        -webkit-transform: translateY(30px);
                transform: translateY(30px)
    }
}
</style>