<template>
	<div v-load="loading" class="page_item" :class="page[0]">
		<div class="body_cont body">
		</div>
		<div class="hand_cont hand">
		</div>
		<div class="hp_cont hp_empty">
		</div>
		<div class="hp_bg">
			<div v-bind:style="{ width: width+'%'}" class="bg"></div>
		</div>
		<div class="hp_fill_cont hp_fill">
		</div>
	</div>
</template>

<script>
export default {
    props: ['control'],
    data(){
        return {
            page: this.control.page,
            width: this.control.width,
            loaded: this.control.loaded
        }
    },
    methods:{
        loading(){
            var self=this;
            var random =(min, max)=>{
                return Math.floor(Math.random() * (max - min + 1) + min);
            };
            // 跑进度
            setTimeout(()=>{
                if(self.loaded=true){
                    self.width = '100';
                    self.control.page.$set(0,'hide');
                    self.control.page.$set(1,'current');
                    return;
                }
            },2000)
            var onprogress = ()=> {
                //这里会创建多个定时器，方法欠妥
                setTimeout(()=>{
                    var progress = random(1, 2);
                    if(self.width >90){
                        self.width = 90;
                    }
                    self.width += progress;
                    onprogress();
                },30);
            };
            // 开始跑进度
            onprogress();
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
    -webkit-backface-visibility:hidden;
            backface-visibility:hidden;
}
@function x_size($size_x) {
    @return ($size_x / 640)*100%;
}
@function y_size($size_y) {
    @return ($size_y / 1136)*100%;
}
.page_item .hp_empty {
  background-image: url(../assets/sprite.png);
  background-position: 0px 1.79331%;
  width: 46.71875%;
  height: 4.31338%;
  background-size: 212.70903% 20142.85714%; }
.page_item .hp_fill {
  background-image: url(../assets/sprite.png);
  background-position: 0px 2.33000%;
  width: 35.625%;
  height: 4.31338%;
  background-size: 278.94737% 20142.85714%; }
.page_item .hand {
  background-image: url(../assets/sprite.png);
  background-position: 0px 3.33333%;
  width: 20.15625%;
  height: 5.19366%;
  background-size: 493.02326% 16728.81356%; }
.page_item .body {
  background-image: url(../assets/sprite.png);
  background-position: 0px 37.49838%;
  width: 51.71875%;
  height: 16.28521%;
  background-size: 192.14502% 5335.13514%; }
.body_cont,
.hand_cont,
.hp_cont,
.hp_bg,
.hp_fill_cont {
    position: absolute;
}
.body_cont {
    left: x_size(150);
    top: y_size(254);
    -webkit-animation: body_scale .2s linear infinite;
            animation: body_scale .2s linear infinite;
    -webkit-transform-origin: left top;
        -ms-transform-origin: left top;
            transform-origin: left top;
    @include eliminate_flash;
}
.hand_cont {
    left: x_size(267);
    top: y_size(362);
    -webkit-animation: hand_rotateZ .2s linear infinite;
            animation: hand_rotateZ .2s linear infinite;
    -webkit-transform-origin: left top;
        -ms-transform-origin: left top;
            transform-origin: left top;
    @include eliminate_flash;
}
.hp_cont {
    left: x_size(169);
    top: y_size(462);
}
.hp_bg {
    .bg {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        background:#fff;
    }
}
.hp_fill_cont,
.hp_bg {
    width: x_size(228);
    height: y_size(42);
    right: x_size(170);
    top: y_size(464);
}
.hp_cont {
    z-index: 300;
}
.hp_fill_cont {
    z-index: 100;
}
.hp_bg {
    z-index: 200;
}
@-webkit-keyframes hand_rotateZ {
    0% {
        -webkit-transform:rotateZ(-60deg);
                transform:rotateZ(-60deg);
        top: y_size(383);
    }
    75% {
        -webkit-transform:rotateZ(-40deg);
                transform:rotateZ(-40deg);
        top: y_size(378);
    }
    100% {
        -webkit-transform:rotateZ(0deg);
                transform:rotateZ(0deg);
    }
}
@keyframes hand_rotateZ {
    0% {
        -webkit-transform:rotateZ(-60deg);
                transform:rotateZ(-60deg);
        top: y_size(383);
    }
    75% {
        -webkit-transform:rotateZ(-40deg);
                transform:rotateZ(-40deg);
        top: y_size(378);
    }
    100% {
        -webkit-transform:rotateZ(0deg);
                transform:rotateZ(0deg);
    }
}
@-webkit-keyframes body_scale {
    0% {
        -webkit-transform:scale(1.01,1.01);
                transform:scale(1.01,1.01);
    }
    50% {
        -webkit-transform:scale(1,1);
                transform:scale(1,1);
    }
    100% {
        -webkit-transform:scale(1.01,1.01);
                transform:scale(1.01,1.01);
    }
}
@keyframes body_scale {
    0% {
        -webkit-transform:scale(1.01,1.01);
                transform:scale(1.01,1.01);
    }
    50% {
        -webkit-transform:scale(1,1);
                transform:scale(1,1);
    }
    100% {
        -webkit-transform:scale(1.01,1.01);
                transform:scale(1.01,1.01);
    }
}
</style>
