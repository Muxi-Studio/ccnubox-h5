var Vue = require('vue');
Vue.config.delimiters = ['${', '}']
var h_hurt_desc='你的受伤指数如此之高？宝宝已惊呆！再不对症下药这校园的日子还怎么过?',
m_hurt_desc='天哪，差一点你就成了重度受伤患者了，赶紧给校园生活来个润滑剂吧！',
l_hurt_desc='幸运的你并没有受到太大的伤害，不过偶尔会有一件事情使你焦头烂额。',
desc = [l_hurt_desc,m_hurt_desc,h_hurt_desc];
var init = function() {
	var self=this,
	loaded;
	(function() {
	    // 获取进度条 div
	    var $progress = $('.js_progress');
	    // 初始进度，1%
	    var progress = 1;
	    // 生成随机数
	    var random =function (min, max){
	        return Math.floor(Math.random() * (max - min + 1) + min);
	    };

	    // 跑进度
	    var onprogress = function() {
	    	//这里会创建多个定时器，方法欠妥
	    	setTimeout(function(){
        		if(loaded){
	                $progress[0].style.width = '100%';
	                return;
	            }
        	},2000)
	        setTimeout(function(){
	            progress += random(1, 2);
	            if(progress >90){
	                progress = 90;
	            }
	            $progress[0].style.width = progress + '%';
	            onprogress();
	        },30);
	    };
	    // 开始跑进度
	    onprogress();
		$(document).ready((function(self){
			$progress[0].style.width='100%';
		    loaded = true;
		    setTimeout(function(){
		    	self.show.$set(0,'hide');
		    	self.show.$set(1,'current');
		    },3000)
		})(self));
	})();
}
var index;
var next = function(i){
	var self=this;
	if(index!=i){
		if (i>=2&&i<=8) {
			self.show.$set(i,'page_next current');
			t=600;
		} else {
			t=0;
		}
		setTimeout(function(){
				self.show.$set(i,'hide');
				self.show.$set(i+1,'current');
		},t)
	}
	index=i;
}
var num=0;
var target='',
store=0;
var score =  function(i,j){
	var flag=target;
	target='dots_'+i;
	if (flag!=target) {
		num=num+j+1;
	} else {
		num=num-store+j+1;
	}
	store=j+1;
	var len=this[target].length-1;
	for(var k=0;k<=len;k++){
		if (k<=j){
			this[target].$set(k,'dot_fill');
		} else {
			this[target].$set(k,'dot_empty');
		}
		if(i==7) {
			if (num>19&&num<26) {
				this.des=desc[1];
				this.deg=[false,true,false];
			} else if(num>25) {
				this.des=desc[2];
				this.deg=[false,false,true];
			}
		}
	}
}
var vm = new Vue({
	el: "body",
	data: {
		show: [],
		dots_1: ['dot_empty','dot_empty','dot_empty','dot_empty','dot_empty'],
		dots_2: ['dot_empty','dot_empty','dot_empty','dot_empty','dot_empty'],
		dots_3: ['dot_empty','dot_empty','dot_empty','dot_empty','dot_empty'],
		dots_4: ['dot_empty','dot_empty','dot_empty','dot_empty','dot_empty'],
		dots_5: ['dot_empty','dot_empty','dot_empty','dot_empty','dot_empty'],
		dots_6: ['dot_empty','dot_empty','dot_empty','dot_empty','dot_empty'],
		dots_7: ['dot_empty','dot_empty','dot_empty','dot_empty','dot_empty'],
		des: desc[0],
		deg: [true,false,false]
	},
	methods: {
		init: init,
		next: next,
		score: score
	}
});
vm.init();
