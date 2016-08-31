<template>
	<div v-load="loading" class="page_item" :class="page[0]">
		<div @click="next(0)" class="body_cont">
			<img src="../assets/body.png">
		</div>
		<div class="hand_cont">
			<img src="../assets/hand.png">
		</div>
		<div class="hp_cont">
			<img src="../assets/hp_empty.png">
		</div>
		<div class="hp_bg">
			<div v-bind:style="{ width: width+'%'}" class="bg"></div>
		</div>
		<div class="hp_fill_cont">
			<img src="../assets/hp_fill.png">
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
            num: this.control.num,
            width: this.control.width,
            loaded: this.control.loaded
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
        },
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
.body_cont,
.hand_cont,
.hp_cont,
.hp_bg,
.hp_fill_cont {
    position: absolute;
}
.body_cont {
    width: x_size(331);
    height: y_size(185);
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
    width: x_size(129);
    height: y_size(59);
    left: x_size(267);
    top: y_size(364);
    -webkit-animation: hand_rotateZ .2s linear infinite;
            animation: hand_rotateZ .2s linear infinite;
    -webkit-transform-origin: left top;
        -ms-transform-origin: left top;
            transform-origin: left top;
    @include eliminate_flash;
}
.hp_cont {
    width: x_size(299);
    height: y_size(49);
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
