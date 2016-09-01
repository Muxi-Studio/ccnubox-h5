<template>
	<div class="page_item" :class="page[8]">
		<div class="page">
			<div class="header margin_auto">
				<img src="../assets/xianquan.png">
			</div>
			<div class="department_heading margin_auto">
				<img src="../assets/department_heading.png">
			</div>
			<div class="department_cont margin_auto">
				<div class="department_1 fade_in_3">
					<img src="../assets/department_1.png">
				</div>
				<div class="department_2 fade_in_6">
					<img src="../assets/department_2.png">
				</div>
				<div class="department_3 fade_in_9">
					<img src="../assets/department_3.png">
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
			<div @click="next(8)" class="next_bt_cont">
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
    		var sum=0;
    		self.num.forEach((k)=>{
    			sum+=k
    		})
    		self.num.$set(0,sum);
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
.department_heading {
	width: x_size(546);
	height: 58px;
	padding-top: y_size(22);
	padding-bottom: y_size(20);
}
.department_1 {
	width: x_size(543);
    height: 149px;
	display: inline-block;
	padding-left: x_size(48);
}
.department_2 {
	display: inline-block;
	padding-left: x_size(48);
	width: x_size(329);
    height: 108px;
}
.department_3 {
	display: inline-block;
	width: x_size(212);
    height: 106px;
}
</style>