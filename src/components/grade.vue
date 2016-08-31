<template>
	<div class="page_item" :class="page[4]">
		<div class="page">
			<div class="header margin_auto">
				<img src="../assets/xianquan.png">
			</div>
			<div class="grade_heading margin_auto">
				<img src="../assets/grade_heading.png">
			</div>
			<div class="grade_cont">
				<div class="grade_1 fade_in_3">
					<img src="../assets/grade_1.png">
				</div>
				<div class="grade_2 fade_in_6">
					<img src="../assets/grade_2.png">
				</div>
				<div class="grade_3 fade_in_9">
					<img src="../assets/grade_3.png">
				</div>
			</div>
			<div class="hurt_deg_cont margin_auto  fade_in_12">
				<img src="../assets/hurt_deg.png">
			</div>
			<ul class="hurt_dot_cont  fade_in_12">
				<li @click='score($index)' v-for="item in dot" track-by="$index" :class='dot[$index]'>
					<img v-if='("dot_empty")==(dot[$index])' src="../assets/dot_empty.png" height="49" width="30">
					<img v-else src="../assets/dot_fill.png" height="49" width="30">
				</li>
			</ul>
			<div @click="next(4)" class="next_bt_cont">
				<img src="../assets/next_bt.png">
			</div>
		</div>
		<div class="page_bottom_cont">
			<img src="../assets/page_bottom.png">
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
.grade_heading {
	width: x_size(546);
	height: 59px;
	padding-top: y_size(32);
}
.grade_1,.grade_2 {
	margin-top: y_size(18);
	display: inline-block;
}
.grade_1 {
	margin-left: x_size(53);
	width: x_size(303);
    height: 112px;
}
.grade_2 {
	margin-top: y_size(5);
	width: x_size(243);
    height: 109px;
}
.grade_3 {
	margin-left: x_size(58);
	width: x_size(534);
    height: 132px;
}
</style>