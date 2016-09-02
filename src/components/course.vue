<template>
	<div class="page_item" :class='page[7]'>
		<div class="page">
			<div class="xianquan margin_auto">
            </div>
			<div class="course_heading margin_auto">
			</div>
			<div class="course_cont margin_auto">
				<div class="course_1 fade_in_3">
				</div>
				<div class="course_2 fade_in_6">
				</div>
			</div>
			<div class="hurt_deg hurt_deg_cont fade_in_9 margin_auto">
            </div>
            <ul class="hurt_dot_cont fade_in_9">
                <li v-tap='score($index)' v-for="item in dot" track-by="$index" :class='dot[$index]'>
                    <div v-if='("dot_empty")==(dot[$index])' height="49" width="30"></div>
                    <div v-else height="49" width="30"></div>
                </li>
            </ul>
            <div class="floder"></div>
            <div  v-tap="next(7)" class="next_bt next_bt_cont">
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
    @return ($size_y / 1136)*100%;
}
.page_item .course_heading {
  background-image: url(../assets/sprite.png);
  background-position: 0px 12.91662%;
  width: 86.3125%;
  height: 8.97887%;
  margin-top: y_size(32);
  margin-bottom: y_size(25);
  background-size: 116.48352% 9676.47059%; }
.course_heading {
	padding-top: y_size(22);
	padding-bottom: y_size(25);
}
.page_item .course_1 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 79.28587%;
  width: 37.04375%;
  height: 251px;
  background-size: 266.10879% 2300.6993%; }
.page_item .course_2 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 83.79237%;
  width: 47.04375%;
  height: 251px;
  background-size: 209.90099% 2300.6993%; }
.course_1 {
	display: inline-block;
	margin-left: x_size(48);
}
.course_2 {
	display: inline-block;
}
</style>