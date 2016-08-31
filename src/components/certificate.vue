<template>
	<div class="page_item" :class="page[9]">
		<div class="header margin_auto">
			<img src="../assets/xianquan.png">
		</div>
		<div class="form_cont">
			<img src="../assets/form.png">
		</div>
		<div class="yinzhang_cont">
			<img src="../assets/yinzhang.png">
		</div>
		<div @click="next(9)" class="advice_cont">
			<img src="../assets/advice.png">
		</div>
		<div v-if="this.num[0]<20" class="l_hurt_cont">
			<span>轻度受伤</span>
		</div>
		<div v-if="this.num[0]>=20" class="m_hurt_cont">
			<span>中度受伤</span>
		</div>
		<div v-if="this.num[0]>=25" class="h_hurt_cont">
			<span>重度受伤</span>
		</div>
		<div class="text">
			<p v-if="this.num[0]<20">幸运的你并没有受到太大的伤害，不过偶尔会有一件事情使你焦头烂额。</p>
			<p v-if="this.num[0]>=20" >天哪，差一点你就成了重度受伤患者了，赶紧给校园生活来个润滑剂吧！</p>
			<p v-if="this.num[0]>=25">你的受伤指数如此之高？宝宝已惊呆！再不对症下药这校园的日子还怎么过?</p>
		</div>
	</div>
</template>
<script>
var dot=[];
export default {
    props: ['control'],
    data(){
    	return {
    		page: this.control.page,
    		num: this.control.num
    	}
    },
    methods:{
    	next(i){
    		var self=this;
    		self.page.$set(i,'hide');
    		self.page.$set(i+1,'current');
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
    -webkit-backface-visibility:hidden;
            backface-visibility:hidden;
}
.yinzhang_cont,
.h_hurt_cont,
.m_hurt_cont,
.l_hurt_cont,
.text {
	position: absolute;
}
@media screen and (min-width: 320px) {
    .main .page_item span {
    	font-size: 50%;
    	line-height:2.2em;
    }
}
@media screen and (min-width: 400px) and (min-height: 700px) {
    .main .page_item span {
    	font-size: 60%;
    	line-height:1.8em;
    }
}
@media screen and (min-width: 568px) and (min-height: 800px) {
    .main .page_item span {
    	font-size: 80%;
    	line-height:2.0em;
    }
}
/*** special setting for iphone 4 // had done my best bro***/

@media screen and (max-width: 320px) and (max-height: 580px) {
    .main .page_item span {
		font-size: 50%;
		line-height:2.2em ;
    }
}
.page {
	background: transparent;
}
.l_hurt_cont {
	background:transparent url('../assets/l_hurt.png') center no-repeat;
	background-size: 100%,100%; 
}
.m_hurt_cont {
	background:transparent url('../assets/m_hurt.png') center no-repeat;
	background-size: 100%,100%; 
}
.h_hurt_cont {
	background:transparent url('../assets/h_hurt.png') center no-repeat;
	background-size: 100%,100%; 
}
.form_cont {
	width: x_size(499);
	height: y_size(562);
	padding-top: y_size(40);
	padding-left: x_size(87);
}
.advice_cont {
	width: x_size(388);
	height: y_size(101);
	padding-top: y_size(31);
	padding-left: x_size(139);
}
.yinzhang_cont {
	width: x_size(168);
	height: y_size(166);
	top: y_size(661);
	left: x_size(879);
}
.l_hurt_cont,.m_hurt_cont,.h_hurt_cont {
	width: x_size(246);
	height: y_size(76);
	top: y_size(274);
	left: x_size(197);
	text-align: center;
	font-weight: bold;
	font-size: 40px;
	color: rgb(0, 0, 0);
}
.text {
	width: x_size(389);
	height: y_size(102);
	top: y_size(387);
	left: x_size(136);
	line-height: 1.2;
	font-weight: bold;
	text-indent: 1.5em;
}
@-webkit-keyframes typing {
	from { width: 0 }
}
@keyframes typing {
	from { width: 0 }
}
@-webkit-keyframes caret {
	100% { border-right-color: transparent; }
}
@keyframes caret {
	100% { border-right-color: transparent; }
}
@-webkit-keyframes ok_in {
    0% {
    	width: x_size(388);
		height: y_size(101);
    }
    25% {
        width: x_size(378);
		height: y_size(91);
    }
    50% {
        width: x_size(388);
		height: y_size(101);
    }
    75% {
        width: x_size(378);
		height: y_size(91);
    }
    100% {
        width: x_size(388);
		height: y_size(101);
    }
}
@keyframes ok_in {
    0% {
    	width: x_size(388);
		height: y_size(101);
    }
    25% {
        width: x_size(378);
		height: y_size(91);
    }
    50% {
        width: x_size(388);
		height: y_size(101);
    }
    75% {
        width: x_size(378);
		height: y_size(91);
    }
    100% {
        width: x_size(388);
		height: y_size(101);
    }
}
@-webkit-keyframes yinzhang_in {
    0% {
		top: y_size(661);
		left: x_size(879);
		opacity: 0;
		filter: alpha(opacity=0);
    }
    60% {
		opacity: 0;
		filter: alpha(opacity=0);
    }
    100% {
		top: y_size(461);
		left: x_size(379);
		opacity: 1;
		filter: alpha(opacity=1);
    }
}
@keyframes yinzhang_in {
    0% {
		top: y_size(661);
		left: x_size(879);
		opacity: 0;
		filter: alpha(opacity=0);
    }
    60% {
		opacity: 0;
		filter: alpha(opacity=0);
    }
    100% {
		top: y_size(461);
		left: x_size(379);
		opacity: 1;
		filter: alpha(opacity=1);
    }
}
.current {
	.advice_cont {
        -webkit-animation: ok_in 1.5s  linear 1.5s infinite;
                animation: ok_in 1.5s  linear 1.5s infinite;
        @include eliminate_flash;
	}
	.yinzhang_cont {
		-webkit-animation: yinzhang_in .5s  cubic-bezier(.65,.78,.79,-0.2) 1;
		        animation: yinzhang_in .5s  cubic-bezier(.65,.78,.79,-0.2) 1;
	    -webkit-animation-fill-mode: forwards;
	            animation-fill-mode: forwards; 
	    @include eliminate_flash;
	}
	span {
		display: inline-block;
		width: 4em;
		font-size: 50%;
		line-height:1.6em;
		white-space: nowrap;
		overflow: hidden;
		border-right: .05em solid transparent;
		-webkit-animation: typing 1s steps(4),
	    caret 1s steps(4);
		        animation: typing 1s steps(4),
	    caret 1s steps(4);
	    -webkit-animation-fill-mode: forwards;
	            animation-fill-mode: forwards; 
	    @include eliminate_flash;
	}
}
</style>