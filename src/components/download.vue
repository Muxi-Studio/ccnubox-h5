<template>
	<div class="page_item" :class="page[10]">
		<div class="xianquan margin_auto">
		</div>
		<div class="mdc_can_cont mdc_can">
		</div>
		<div class="mdc_1_cont mdc_1">
		</div>
		<div class="mdc_2_cont mdc_2">
		</div>
		<div class="xiazi_cont xiazi">
		</div>
		<div class="desc_cont desc fade_in_3">
		</div>
		<div class="qr_code_cont qr_code">
            <a href="http://ccnubox.muxixyz.com/">
                <div class="down_bt"></div>
            </a>
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
    @return ($size_y / 1136)*100%;
}
@mixin eliminate_flash {
    -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
}
.desc_cont {
    position: absolute;
}
.mdc_1_cont,
.mdc_2_cont {
    position: absolute;
    width: x_size(60);
    height: y_size(41);
    opacity: 0;
    filter: alpha(opacity=0);
}
.page_item .mdc_can {
  background-image: url(../assets/sprite.png);
  background-position: 0px 47.57509%;
  width: x_size(400);
  height: y_size(210);
  margin-left: x_size(155);
  background-size: 159% 4700%; }
.page_item .mdc_1 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 0.37487%;
  width: 8.4375%;
  height: 3.69718%;
  background-size: 1177.77778% 23500%; }
.mdc_1_cont {
    top: y_size(210);
    left: x_size(230);
}
.page_item .mdc_2 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 0%;
  width: 9.375%;
  height: 3.25704%;
  background-size: 1060% 26675.67568%; }
.mdc_2_cont {
    top: y_size(210);
    left: x_size(230);
}
.page_item .xiazi {
  background-image: url(../assets/sprite.png);
  background-position: 0px 70.61774%;
  width: 86.5625%;
  height: 28.69718%;
  background-size: 114.80144% 3027.60736%; }
.xiazi_cont {
    margin-left: x_size(62);
}
.page_item .desc {
  background-image: url(../assets/sprite.png);
  background-position: 0px 4.66006%;
  width: 68.125%;
  height: 5.98592%;
  background-size: 145.87156% 14514.70588%; }
.desc_cont {
    opacity: 0;
    filter: alpha(opacity=0);
    top: y_size(613);
    left: x_size(122);
}
.page_item .qr_code {
  background-image: url(../assets/qr_code.png);
  position:relative;
  width: 77.5%;
  height: 20.9507%;
  margin-top: y_size(14);
  margin-left: x_size(91);
  background-size: 100% 100%; }
.page_item .down_bt {
  background-image: url(../assets/down_bt.png);
  position:absolute;
  left:x_size(14);
  top:40%;
  width: 36.5%;
  height:35.9507%;
  background-size: 100% 100%; }
.current {
    .mdc_1_cont {
        -webkit-animation: mdc_1_in .5s cubic-bezier(.65,.78,.79,-0.2) .8s 1;
                animation: mdc_1_in .5s cubic-bezier(.65,.78,.79,-0.2) .8s 1;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
        @include eliminate_flash;
    }
    .mdc_2_cont {
        -webkit-animation: mdc_2_in .6s  ease-in-out .8s 1;
                animation: mdc_2_in .6s  ease-in-out .8s 1;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
        @include eliminate_flash;
    }
    .desc_cont {
        -webkit-animation: fade_in .6s  ease-in-out 1.5s 1;
                animation: fade_in .6s  ease-in-out 1.5s 1;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
        @include eliminate_flash;
    }
}
@-webkit-keyframes mdc_1_in {
    60% {
        opacity: 0;
        filter: alpha(opacity=0);
    }
    90% {
        top: y_size(380);
    }
    100% {
        top: y_size(380);
        left: x_size(170);
        opacity: 1;
        filter: alpha(opacity=1);
    }
}
@keyframes mdc_1_in {
    60% {
        opacity: 0;
        filter: alpha(opacity=0);
    }
    90% {
        top: y_size(380);
    }
    100% {
        top: y_size(380);
        left: x_size(170);
        opacity: 1;
        filter: alpha(opacity=1);
    }
}
@-webkit-keyframes mdc_2_in {
    20% {
        top: y_size(330);
        opacity: 0;
        filter: alpha(opacity=0);
    }
    50% {
        top: y_size(380);
        left: x_size(130);
    }
    70% {
        top: y_size(350);
        left: x_size(125);
    }
    100% {
        top: y_size(380);
        left: x_size(110);
        opacity: 1;
        filter: alpha(opacity=1);
    }
}
@keyframes mdc_2_in {
    20% {
        top: y_size(330);
        opacity: 0;
        filter: alpha(opacity=0);
    }
    50% {
        top: y_size(380);
        left: x_size(130);
    }
    70% {
        top: y_size(350);
        left: x_size(125);
    }
    100% {
        top: y_size(380);
        left: x_size(110);
        opacity: 1;
        filter: alpha(opacity=1);
    }
}
</style>