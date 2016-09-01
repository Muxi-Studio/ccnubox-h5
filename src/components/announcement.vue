<template>
	<div class="page_item" :class="page[6]">
		<div class="page">
			<div class="header margin_auto">
				<img src="../assets/xianquan.png">
			</div>
			<div class="ance_heading margin_auto">
				<img src="../assets/ance_heading.png">
			</div>
			<div class="ance_cont margin_auto">
				<div class="ance_1 fade_in_3">
					<img src="../assets/ance_1.png">
				</div>
				<div class="ance_2 fade_in_6">
					<img src="../assets/ance_2.png">
				</div>
			</div>
			<div class="hurt_deg_cont fade_in_9 margin_auto">
				<img src="../assets/hurt_deg.png">
			</div>
			<ul class="hurt_dot_cont fade_in_9">
				<li @click='score($index)' v-for="item in dot" track-by="$index" :class='dot[$index]'>
					<img v-if='("dot_empty")==(dot[$index])' src="../assets/dot_empty.png" height="49" width="30">
					<img v-else src="../assets/dot_fill.png" height="49" width="30">
				</li>
			</ul>
			<div  @click="next(6)" class="next_bt_cont">
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
.ance_heading {
    width: 83.3%;
    height: 58px;
    padding-top: y_size(32);
    padding-bottom: y_size(13);
}
.ance_1,
.ance_2 {
    width: x_size(547);
    height: 128px;
}
.ance_1 {
    margin-left: x_size(48);
}
.ance_2 {
    margin-left: x_size(52);
}
</style>