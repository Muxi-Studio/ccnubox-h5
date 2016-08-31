<template>
    <div v-load='next' id="app" class="main margin_auto">
        <init :control='control'></init>
        <home :control='control'></home> 
        <card :control='control'></card> 
        <lib :control='control'></lib> 
        <grade :control='control'></grade>
        <electric :control='control'></electric>
        <announcement :control='control'></announcement>
        <course :control='control'></course>
        <department :control='control'></department>
        <certificate :control='control'></certificate>
        <download :control='control'></download>
    </div>
</template>

<script>
import Init from './components/init'
import Home from './components/home'
import Card from './components/card'
import Lib from './components/lib'
import Grade from './components/grade'
import Electric from './components/electric'
import Announcement from './components/announcement'
import Course from './components/course'
import Department from './components/department'
import Certificate from './components/certificate'
import Download from './components/download'

export default {
    components: {
        Init,
        Home,
        Card,
        Lib,
        Grade,
        Electric,
        Announcement,
        Course,
        Department,
        Certificate,
        Download 
    },
    data() {
        return {
            control: {
                dots: ['dot_empty','dot_empty','dot_empty','dot_empty','dot_empty'],
                page: [],
                num: [],
                width: 0,
                loaded: []
            }
        }
    },
    methods: {
        next(){
            this.control.loaded.$set(0,true);
        }
    }
}
</script>

<style lang='scss'>
//reset
html,body {
    margin:0;
    padding:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background:#fff;
}
body {
    background-image:
    -webkit-linear-gradient(transparent 46px,#8efcfe 1px),
    -webkit-linear-gradient(left, transparent 46px,#8efcfe 1px);
    background-image:
    linear-gradient(transparent 46px,#8efcfe 1px),
    linear-gradient(90deg, transparent 46px,#8efcfe 1px);
    background-size: 47px 47px; 
    line-height:1;
    position: relative;
    font-size: 16px;
    font-family: Helvetica, Tahoma, Arial, "Microsoft YaHei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
}
p {
    margin-top:0;
    margin-bottom:0;
}
img {
    width: 100%;
    height: 100%;
    border:0;
}
ul {
    padding: 0;
    margin: 0;
}
li {
    list-style: none;
}

//common
@function x_size($size_x) {
    @return ($size_x / 640)*100%;
}
@function y_size($size_y) {
    @return ($size_y / 1136)*100vh;
}
/*
eliminate animation flash screen 
 */
@mixin eliminate_flash {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    -webkit-backface-visibility:hidden;
            backface-visibility:hidden;
}
.page_item {
    position: relative;
    height: 100%;
}
.header {
    width: x_size(490);
    height: y_size(77);
}
.main {
     max-width: 500px;
     height: 100%;
     overflow: hidden;
}
.page_bottom_cont {
    height: y_size(80);
    margin-top: y_size(-15);
}
.next_bt_cont {
    position: absolute;
    width: x_size(153);
    height: y_size(68);
    bottom:y_size(14);
    right: x_size(42);
}
.page {
    position: relative;
    background: url(../src/assets/page_border.png) no-repeat left bottom;
    background-size: 100% 11.17%;
}
.hurt_deg_cont {
    padding-top: y_size(23);
    width: x_size(230);
    height: y_size(54);
    padding-bottom: y_size(8);
    opacity: 0;
    filter: alpha(opacity=0);
}
.hurt_dot_cont {
    height: y_size(49);
    padding-bottom: y_size(61);
    font-size: 0;
    text-align: center;
    opacity: 0;
    filter: alpha(opacity=0);
    li {
        width: x_size(30);
        height: 100%;
        margin-right: x_size(15);
        display: inline-block;
        background-size: 100% 100%;
    }
}
.fade_in_3,
.fade_in_6,
.fade_in_9,
.fade_in_12 {
    opacity: 0;
    filter: alpha(opacity=0);
}
.current {
    .fade_in_3 {
        -webkit-animation: fade_in .6s  ease-in-out .3s 1;
                animation: fade_in .6s  ease-in-out .3s 1;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
        @include eliminate_flash;
    }
    .fade_in_6 {
        -webkit-animation: fade_in .6s  ease-in-out .6s 1;
                animation: fade_in .6s  ease-in-out .6s 1;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
        @include eliminate_flash;
    }
    .fade_in_9 {
        -webkit-animation: fade_in .6s  ease-in-out .9s 1;
                animation: fade_in .6s  ease-in-out .9s 1;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
        @include eliminate_flash;
    }
    .fade_in_12 {
        -webkit-animation: fade_in .6s  ease-in-out 1.2s 1;
        animation: fade_in .6s  ease-in-out 1.2s 1;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
        @include eliminate_flash;
    }
}
.hide {
    display: none;
}
.next_page {
    .page {
        -webkit-animation: uparr .6s  ease-in-out 1;
                animation: uparr .6s  ease-in-out 1;
        @include eliminate_flash;
    }
    .floder_cont {
        -webkit-animation: next_rotateZ .6s  ease-in-out 1;
                animation: next_rotateZ .6s  ease-in-out 1;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
        -webkit-transform-origin: left bottom;
            -ms-transform-origin: left bottom;
                transform-origin: left bottom;
        @include eliminate_flash;
    }
    .next_bt_cont {
        -webkit-animation: next_translateY .6s  ease-in-out 1;
                animation: next_translateY .6s  ease-in-out 1;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
        @include eliminate_flash;
    }
}
@keyframes fade_in {
    100% { 
        opacity: 1;
        filter: alpha(opacity=1);
    }
}
@-webkit-keyframes next_translateY {
    0% { 
        -webkit-transform: translateY(0); 
                transform: translateY(0);
    }
    100% { 
        -webkit-transform: translateY(-10px); 
                transform: translateY(-10px);
    }
}
@keyframes next_translateY {
    0% { 
        -webkit-transform: translateY(0); 
                transform: translateY(0);
    }
    100% { 
        -webkit-transform: translateY(-10px); 
                transform: translateY(-10px);
    }
}
@-webkit-keyframes next_rotateZ {
    0% { 
        -webkit-transform: rotateZ(0); 
                transform: rotateZ(0);
    }
    100% { 
        -webkit-transform: rotateZ(-10deg); 
                transform: rotateZ(-10deg);
    }
}
@keyframes next_rotateZ {
    0% { 
        -webkit-transform: rotateZ(0); 
                transform: rotateZ(0);
    }
    100% { 
        -webkit-transform: rotateZ(-10deg); 
                transform: rotateZ(-10deg);
    }
}

@-webkit-keyframes uparr{
    0%{ -webkit-transform:translate3d(0,0,0); transform:translate3d(0,0,0); 
        opacity: 1;
        filter: alpha(opacity=1);
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
    }
    100%{ -webkit-transform:translate3d(0,-50%,0); transform:translate3d(0,-50%,0);
        opacity: 0;
        filter: alpha(opacity=0);
        -webkit-transform: translateY(-100px);
                transform: translateY(-100px);
        display: none;
    }
}

@keyframes uparr{
    0%{ -webkit-transform:translate3d(0,0,0); transform:translate3d(0,0,0); 
        opacity: 1;
        filter: alpha(opacity=1);
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
    }
    100%{ -webkit-transform:translate3d(0,-50%,0); transform:translate3d(0,-50%,0);
        opacity: 0;
        filter: alpha(opacity=0);
        -webkit-transform: translateY(-100px);
                transform: translateY(-100px);
        display: none;
    }
}
//class
.margin_auto {
    display: block;
    margin: 0 auto;
}
.v_middle {
    display: inline-block;
    vertical-align: middle;
}
</style>
