<template>
  	<div class="page_item" :class="page[1]">
  		<div class="header margin_auto">
			<img src="../assets/xianquan.png">
		</div>
		<div class="test_cont">
			<div class="test">
				<img src="../assets/test.png">
			</div>
			<div class="sword_1">
				<img src="../assets/sword_1.png">
			</div>
			<div class="sword_2">
				<img src="../assets/sword_2.png">
			</div>
			<div class="knife">
				<img src="../assets/knife.png">
			</div>
			<div class="idont">
				<img src="../assets/idont.png">
			</div>
		</div>	
		<div @click="next(1)" class="enter">
			<img src="../assets/enter.png">
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
        next(i){
            this.page.$set(i,'hide');
            this.page.$set(i+1,'current');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@mixin eliminate_flash {
    -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
}
@function x_size($size_x) {
    @return ($size_x / 640)*100%;
}
@function y_size($size_y) {
    @return ($size_y / 1136)*100%;
}
.test_cont {
    position: relative;
}
.idont,.sword_1,.sword_2,.knife {
    position: absolute;
}
.test {
     width: x_size(579);
     padding-left: x_size(21);
}
.sword_1 {
    width: x_size(66);
    top: y_size(2038);
    left: x_size(806);
}
.sword_2 {
    width: x_size(106);
    top: y_size(296);
    left: x_size(-406); 
}
.knife {
    width: x_size(119);
    top: y_size(681);
    left: x_size(393);
}
.enter {
    width: x_size(242);
    padding-top: y_size(107);
    padding-left: x_size(313);
}
.idont {
    width: x_size(461);
    bottom: y_size(-210);
    left: x_size(42);
}
@-webkit-keyframes kinfe_in {
    0% {
        top: y_size(481);
        left: x_size(-119);
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    50% {
        top: y_size(371);
        left: x_size(219);
        -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
    }
    100% {
        top: y_size(681);
        left: x_size(393);
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
}
@keyframes kinfe_in {
    0% {
        top: y_size(481);
        left: x_size(-119);
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    50% {
        top: y_size(371);
        left: x_size(219);
        -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
    }
    100% {
        top: y_size(681);
        left: x_size(393);
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
}
@-webkit-keyframes sword_1_in {
    0% {
        top: y_size(2038);
        left: x_size(806);
    }
    60% {
        top: y_size(38);
        left: x_size(338);
    }
    70% {
        -webkit-transform:rotateZ(-10deg);
                transform:rotateZ(-10deg);
    }
    80% {
        -webkit-transform:rotateZ(10deg);
                transform:rotateZ(10deg);
    }
    100% {
        -webkit-transform:rotateZ(0);
                transform:rotateZ(0);
        top: y_size(38);
        left: x_size(338);
    }
}
@keyframes sword_1_in {
    0% {
        top: y_size(2038);
        left: x_size(806);
    }
    60% {
        top: y_size(38);
        left: x_size(338);
    }
    70% {
        -webkit-transform:rotateZ(-10deg);
                transform:rotateZ(-10deg);
    }
    80% {
        -webkit-transform:rotateZ(10deg);
                transform:rotateZ(10deg);
    }
    100% {
        -webkit-transform:rotateZ(0);
                transform:rotateZ(0);
        top: y_size(38);
        left: x_size(338);
    }
}
@-webkit-keyframes sword_2_in {
    0% {
        top: y_size(296);
        left: x_size(-406);
    }
    100% {
        top: y_size(496);
        left: x_size(37);
    }
}
@keyframes sword_2_in {
    0% {
        top: y_size(296);
        left: x_size(-406);
    }
    100% {
        top: y_size(496);
        left: x_size(37);
    }
}
@-webkit-keyframes enter_in {
    0% {
        width: x_size(262);
    }
    25% {
        width: x_size(272);
    }
    50% {
        width: x_size(282);
    }
    75% {
        width: x_size(272);
    }
    100% {
        width: x_size(262);
    }
}
@keyframes enter_in {
    0% {
        width: x_size(262);
    }
    25% {
        width: x_size(272);
    }
    50% {
        width: x_size(282);
    }
    75% {
        width: x_size(272);
    }
    100% {
        width: x_size(262);
    }
}
.current{
    .sword_1 {
        -webkit-animation: sword_1_in .5s  linear .8s 1;
                animation: sword_1_in .5s  linear .8s 1;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards; 
        @include eliminate_flash;
    }
    .sword_2 {
        -webkit-animation: sword_2_in .1s  cubic-bezier(.65,.78,.79,-0.2) .8s 1;
                animation: sword_2_in .1s  cubic-bezier(.65,.78,.79,-0.2) .8s 1;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;  
        @include eliminate_flash;
    }
    .knife {
        -webkit-animation: kinfe_in .2s  linear 1;
                animation: kinfe_in .2s  linear 1;
        @include eliminate_flash;
    }
    .enter {
        -webkit-animation: enter_in 1.5s  linear 1.5s infinite;
                animation: enter_in 1.5s  linear 1.5s infinite;
        @include eliminate_flash;
    }
}
</style>
