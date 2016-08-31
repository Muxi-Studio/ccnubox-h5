<template>
	<div class="page_item" :class="page[10]">
		<div class="header margin_auto">
			<img src="../assets/xianquan.png">
		</div>
		<div class="mdc_can_cont">
			<img src="../assets/mdc_can.png">
		</div>
		<div class="mdc_1_cont">
			<img src="../assets/mdc_1.png">
		</div>
		<div class="mdc_2_cont">
			<img src="../assets/mdc_2.png">
		</div>
		<div class="xiazi_cont">
			<img src="../assets/xiazi.png">
		</div>
		<div class="desc_cont fade_in_3">
			<img src="../assets/desc.png">
		</div>
		<div class="qr_code_cont">
			<img src="../assets/qr_code.png">
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
.mdc_can_cont {
    width: x_size(400);
    height: y_size(210);
    padding-left: x_size(175);
}
.mdc_1_cont {
    top: y_size(160);
    left: x_size(230);
}
.mdc_2_cont {
    top: y_size(160);
    left: x_size(230);
}
.xiazi_cont {
    width: x_size(554);
    height: y_size(326);
    padding-left: x_size(62);
}
.desc_cont {
    width: x_size(436);
    height: y_size(68);
    opacity: 0; 
    top: y_size(483);
    left: x_size(122);
}
.qr_code_cont {
    width: x_size(496);
    height: y_size(238);
    padding-left: x_size(91);
}
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
        top: y_size(260);
    }
    100% {
        top: y_size(260);
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
        top: y_size(260);
    }
    100% {
        top: y_size(260);
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
        top: y_size(260);
    }
    100% {
        top: y_size(260);
        left: x_size(170);
        opacity: 1;
        filter: alpha(opacity=1);
    }
}
@-webkit-keyframes mdc_2_in {
    20% {
        top: y_size(200);
        opacity: 0;
        filter: alpha(opacity=0);
    }
    50% {
        top: y_size(250);
        left: x_size(130);
    }
    70% {
        top: y_size(220);
        left: x_size(125);
    }
    100% {
        top: y_size(250);
        left: x_size(110);
        opacity: 1;
        filter: alpha(opacity=1);
    }
}
@keyframes mdc_2_in {
    20% {
        top: y_size(200);
        opacity: 0;
        filter: alpha(opacity=0);
    }
    50% {
        top: y_size(250);
        left: x_size(130);
    }
    70% {
        top: y_size(220);
        left: x_size(125);
    }
    100% {
        top: y_size(250);
        left: x_size(110);
        opacity: 1;
        filter: alpha(opacity=1);
    }
}
@keyframes mdc_2_in {
    20% {
        top: y_size(200);
        opacity: 0;
        filter: alpha(opacity=0);
    }
    50% {
        top: y_size(250);
        left: x_size(130);
    }
    70% {
        top: y_size(220);
        left: x_size(125);
    }
    100% {
        top: y_size(250);
        left: x_size(110);
        opacity: 1;
        filter: alpha(opacity=1);
    }
}
</style>