<template>
	<div class="page_item" :class="page[3]">
		<div class="page">
			<div class="xianquan margin_auto">
            </div>
			<div class="lib_heading margin_auto">
			</div>
			<div class="lib_1  fade_in_3">
			</div>
			<div class="lib_2  fade_in_6">
			</div>
			<div class="lib_3  fade_in_9">
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
            <div  v-tap="next(3)" class="next_bt next_bt_cont">
            </div>
        </div>
        <div class="page_bottom_cont page_bottom">
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
.page_item .lib_heading {
  background-image: url(../assets/sprite.png);
  background-position: 0px 19.2122%;
  width: 85.3125%;
  height: 8.97887%;
  margin-top: y_size(32);
  margin-bottom: y_size(18);
  background-size: 116.48352% 9676.47059%; }
.lib_1,.lib_2,.lib_3 {
	display: inline-block;
}
.page_item .lib_1 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 31.85633%;
  width: 84.0625%;
  height: 15.75704%;
  margin-top: y_size(10);
  background-size: 118.21561% 5513.96648%; }
.lib_1 {
	margin-left: x_size(53);
}
.page_item .lib_2 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 54.42123%;
  width: 38.90625%;
  height: 20.33451%;
  background-size: 255.42169% 4272.72727%; }
.lib_2 {
	margin-left: x_size(54);
}
.page_item .lib_3 {
  background-image: url(../assets/sprite.png);
  background-position: 0px 61.91514%;
  width: 42.03125%;
  height: 21.5669%;
  background-size: 236.43123% 4028.57143%; }
</style>