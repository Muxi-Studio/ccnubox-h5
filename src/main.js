import Vue from 'vue'
import App from './App'

//实现移动端click事件
Vue.directive('tap', {
    isFn : true,
    acceptStatement:true,
    update : function(fn) {
	    var self = this; //存下this，方便以后用
	        //在directive上绑定的属性和方法
	        //都可通过self.xxx   self.touchstart()获取
	        self.tapObj = {}; //初始化我们的tap对象

	    if(typeof fn !== 'function') {
	    //判断事件参数是否为函数
	        return console.error('The param of directive "v-tap" must be a function!');
	    }
	    
	    self.handler = function(e) { //给当前directive存个handler方便之后调用
	        e.tapObj = self.tapObj; 
	        //把我们的tap对象赋值给原生event对象上，方便回调里获取参数
	        fn.call(self,e);
	    };
	    //由于只有tap事件，所以我们在move过程就不需要做处理
	    this.el.addEventListener('touchstart',function(e) {
	        self.touchstart(e,self);
	    },false);
	    
	    this.el.addEventListener('touchend',function(e) {
	        self.touchend(e,self,fn);
	    },false); 
	},
    isTap : function() {
	    var tapObj = this.tapObj;
	    //如果延迟小于毫秒就断定为移动端click事件
	    return this.time < 150 && Math.abs(tapObj.distanceX) < 2 && Math.abs(tapObj.distanceY) < 2;
	},
	touchstart : function(e,self) {
	    var touches = e.touches[0];
	    var tapObj = self.tapObj;
	    tapObj.pageX = touches.pageX;
	    tapObj.pageY = touches.pageY;
	    tapObj.clientX = touches.clientX;
	    tapObj.clientY = touches.clientY;
	    self.time = new Date().getTime();
	},
	touchend : function(e,self) {
	    var touches = e.changedTouches[0];
	    var tapObj = self.tapObj;
	    self.time = new Date().getTime() - self.time;
	    tapObj.distanceX = tapObj.pageX - touches.pageX;
	    tapObj.distanceY = tapObj.pageY - touches.pageY;

	    if (self.isTap(tapObj))
	        self.handler(e);
	}
});

//封装load事件
Vue.directive('load', {
    isFn : true,
    acceptStatement:true,
    bind : function() {
         
    },
    update : function(fn) {
	    if(typeof fn !== 'function') {
	    //判断事件参数是否为函数
	        return console.error('The param of directive "v-tap" must be a function!');
	    }
	    window.addEventListener('load', fn,false) 
	}
});
new Vue({
  el: 'body',
  components: { App }
})
