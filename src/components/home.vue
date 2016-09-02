<template>
  	<div class="page_item" :class="page[1]">
  		<div class="header margin_auto xianquan">
		</div>
		<div class="test">
		</div>
		<div class="sword_1">
		</div>
		<div class="sword_2">
		</div>
		<div class="knife">
		</div>
		<div class="idont">
		</div>
		<div v-tap="next(1)" class="enter">
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
.idont,.sword_1,.sword_2,.knife {
    position: absolute;
}
.page_item .test {
  background-image: url(../assets/sprite.png);
  background-position: 0px 93.9500%;
  width: 90.46875%;
  height: 46.30282%;
  margin-left: x_size(21);
  background-size: 109.84456% 1876.42586%; }
.test {
     padding-left: x_size(21);
}
.page_item .sword_1 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 10.94093%;
  width: 10.3125%;
  height: 8.27465%;
  background-size: 963.63636% 10500%; }
.sword_1 {
    top: y_size(238);
    left: x_size(806);
}
.page_item .sword_2 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 5.30902%;
  width: 16.5625%;
  height: 6.07394%;
  background-size: 600% 14304.34783%; }
.sword_2 {
    top: y_size(296);
    left: x_size(-406); 
}
.page_item .knife {
  background-image: url(../assets/sprite.png);
  background-position: 0px 23.97781%;
  width: 18.59375%;
  height: 11.53169%;
  background-size: 534.45378% 7534.35115%; }
.knife {
    top: y_size(395);
    left: x_size(414);
}
.page_item .enter {
  background-image: url(../assets/sprite.png);
  background-position: 0px 20.266%;
  width: x_size(242);
  height: 9.15493%;
  background-size: 235.55556% 9490.38462%; 
  margin-top: y_size(158);
    margin-left: x_size(298);
}
.page_item .idont {
  background-image: url(../assets/sprite.png);
  background-position: 0px 33.70991%;
  width: 72.03125%;
  height: 16.19718%;
  background-size: 137.96095% 5364.13043%; 
  margin-top: y_size(-146);
  margin-left: x_size(25);
}
@-webkit-keyframes kinfe_in {
    0% {
        top: y_size(195);
        left: x_size(-119);
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    50% {
        top: y_size(295);
        left: x_size(219);
        -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
    }
    100% {
        top: y_size(395);
        left: x_size(414);
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
}
@keyframes kinfe_in {
    0% {
        top: y_size(195);
        left: x_size(-119);
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    50% {
        top: y_size(295);
        left: x_size(219);
        -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
    }
    100% {
        top: y_size(395);
        left: x_size(414);
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
        top: y_size(98);
        left: x_size(359);
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
        top: y_size(98);
        left: x_size(359);
    }
}
@-webkit-keyframes sword_2_in {
    0% {
        top: y_size(296);
        left: x_size(-406);
    }
    100% {
        top: y_size(316);
        left: x_size(38);
    }
}
@keyframes sword_2_in {
    0% {
        top: y_size(296);
        left: x_size(-406);
    }
    100% {
        top: y_size(316);
        left: x_size(38);
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
