<template>
	<div class="page_item" :class="page[5]">
		<div class="page">
			<div class="xianquan margin_auto">
            </div>
			<div class="electric_heading margin_auto">
			</div>
			<div class="electric_1 fade_in_3">
			</div>
			<div class="right_box">
				<div class="electric_2 fade_in_6">
				</div>
				<div class="electric_3 fade_in_9">
				</div>
			</div>
			<div class="hurt_deg hurt_deg_cont fade_in_12 margin_auto">
            </div>
            <ul class="hurt_dot_cont fade_in_9">
                <li v-tap='score($index)' v-for="item in dot" track-by="$index" :class='dot[$index]'>
                    <div v-if='("dot_empty")==(dot[$index])' height="49" width="30"></div>
                    <div v-else height="49" width="30"></div>
                </li>
            </ul>
            <div class="floder"></div>
            <div  v-tap="next(5)" class="next_bt next_bt_cont">
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
.page_item .electric_heading {
  background-image: url(../assets/sprite.png);
  background-position: 0px 15.0300%;
  width: 85.3125%;
  height: 8.97887%;
  margin-top: y_size(32);
  margin-bottom: y_size(38);
  background-size: 116.48352% 9676.47059%; }
.electric_1,.electric_2 {
	margin-top: y_size(18);
	display: inline-block;
}
.page_item .electric_1 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 74.77968%;
  width: 35.3125%;
  height: 36.8838%;
  background-size: 281.41593% 2355.60859%; }
.electric_1 {
	margin-left: x_size(52);
}
.right_box {
  height: 36.8838%;
}
.page_item .electric_2 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 25.36507%;
  width: 90.25%;
  height: 36%;
  background-size: 208.52459% 6902.0979%; }
.right_box {
    display:inline-block;
    vertical-align:top;
    width: x_size(328);
}
.page_item .electric_3 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 64.62741%;
  margin-top: y_size(10);
  width: 90.25%;
  height: 64%;
  background-size: 193.90244% 3752.85171%; }
</style>