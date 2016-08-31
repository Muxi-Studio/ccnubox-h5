<template>
	<div class="page_item" :class="page[5]">
		<div class="page">
			<div class="header margin_auto">
				<img src="../assets/xianquan.png">
			</div>
			<div class="electric_heading margin_auto">
				<img src="../assets/electric_heading.png">
			</div>
			<div class="electric_cont margin_auto">
				<div class="electric_1 fade_in_3">
					<img src="../assets/electric_1.png">
				</div>
				<div class="right_box">
					<div class="electric_2 fade_in_6">
						<img src="../assets/electric_2.png">
					</div>
					<div class="electric_3 fade_in_9">
						<img src="../assets/electric_3.png">
					</div>
				</div>
			</div>
			<div class="hurt_deg_cont margin_auto fade_in_12">
				<img src="../assets/hurt_deg.png">
			</div>
			<ul class="hurt_dot_cont fade_in_12">
				<li @click='score($index)' v-for="item in dot" track-by="$index" :class='dot[$index]'>
					<img v-if='("dot_empty")==(dot[$index])' src="../assets/dot_empty.png" height="49" width="30">
					<img v-else src="../assets/dot_fill.png" height="49" width="30">
				</li>
			</ul>
			<div  @click="next(5)" class="next_bt_cont">
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
.electric_heading {
	width: x_size(546);
	height: 59px;
	padding-top: y_size(32);
}
.electric_1,.electric_2 {
	margin-top: y_size(18);
	display: inline-block;
}
.electric_1 {
	margin-left: x_size(52);
	width: x_size(226);
    height: 245px;
}
.electric_2 {
    height: 90px;
}
.right_box {
    display:inline-block;
    vertical-align:top;
    width: x_size(328);
}
.electric_3 {
    height: 154px;
}
</style>