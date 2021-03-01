<template>
    <div class="header-fixed">
        <!-- 头部 -->
        <div class="header back-white flex-row">
            <div class="header-content flex-row">
                <!-- 头部左半部分 -->
                <div class="header-left flex-row">
                    <div class="header-log cursor-pointer" @click="goRouter('/')">
                        <img src="../assets/logo.png" />
                    </div>
                    <div class="header-menu flex-row font16">
                        <span @click="goRouter('/pro')" :class="{'select_menu':menu_num===1}" class="cursor-pointer" >Pro-Collection</span>
                        <span @click="goRouter('/orginal')" :class="{'select_menu':menu_num===2}" class="cursor-pointer">Original-Collection</span>
                        <span @click="goRouter('/about')" :class="{'select_menu':menu_num===3}" class="cursor-pointer">About Us</span>
                    </div>
                </div>
                <!-- 头部右半部分 -->
                <div class="header-right flex-row">
                    <!-- 选择语言 -->
                    <div v-if="false" class="change-lang cursor-pointer" @click="changeLangModel">
                        <div class="lang-country">
                            <img src="../assets/country/USA.png"/>
                        </div>
                        <div class="lang-icon">
                            <img :style="langStyle" src="../assets/face-bottom.png"/>
                        </div>
                    </div>
                    <!-- 登录 搜索 购物车 -->
                    <div class="header-icon cursor-pointer"  @click="showLogin">
                        <img src="../assets/login.svg"/>
                    </div>
                    <div class="header-icon cursor-pointer" @click="showSearchModel">
                        <img src="../assets/search.svg"/>
                    </div>
                    <div class="header-icon cursor-pointer" @click="goRouter('/cart')">
                        <img :src="cart"/>
                    </div>
                </div>
                <!-- 选择语言的框 -->
                <transition name="topTobottom">
                    <div class="langModel padding20 flex-column-nocenter" v-if="showLangModel">
                        <transition name="topTobottom2" v-for="(item,key) in langImgs" :key="key">
                        <div class="country-item flex-row font11" >
                            <div>
                                <img :src='item.img'/>
                            </div>
                            <span>{{item.country}}</span>
                        </div>
                        </transition>
                    </div>
                </transition>
                <!-- 搜索框 -->
                <transition name="fade06">
                    <div v-if="showSearch" class="searchModel" >
                        <div class="flex-row">
                            <div class="search-icon">
                                <img src="../assets/search.png"/>
                            </div>
                        </div>
                        <div class="search-close" @click="closeSearchModel">
                            <img src="../assets/close.png"/>
                        </div>
                        <input class="search-input" placeholder="Search..."/>
                    </div>
                </transition>
            </div>
        </div>

        <transition name='fade'>
            <!-- 登录窗口 -->
            <div v-if="showModel" class="model fix-center" :style="modelStyle">
                <div class="model-header">
                    <span class="text-center font16">Hello</span>
                    <div class="close-icon" @click="closeModel">
                        <img src="../assets/close.png"/>
                    </div>
                </div>
                
                <!-- 登录框内容 -->
                <div class="model-content padding20">
                    <!-- 登录框中是登录还是注册 -->
                    <div class="log-sign">
                        <div :class="{'span font20 text-center border2-e4 fontcolor666 cursor-pointer':!isLoginTitle,' span font20 text-center border-2c3':isLoginTitle}" @click="loginTitle">
                            LOGIN
                        </div>
                        <div :class="{'span font20 text-center border2-e4 fontcolor666 cursor-pointer':isLoginTitle,'span font20 text-center border-2c3':!isLoginTitle}" @click="signTitle">
                            SIGN UP
                        </div>
                    </div>
                    <!-- 登录框中的表单 -->
                    <div class="model-container"> 
                        <div class="container-item flex-column-nocenter font13">
                            <div>Email Address</div>
                            <input class="login-input font14"/>
                        </div>
                        <div class="container-item flex-column-nocenter font13">
                            <div>Password</div>
                            <input class="login-input font14"/>
                        </div>
                        <div v-if="!isLoginTitle" class="container-item flex-column-nocenter font13">
                            <div>Confirm Password</div>
                            <input class="login-input font14"/>
                        </div>
                        <div class="container-item2 flex-row font12">
                            <input type="checkbox"  />
                            <span>Yes,send me info about everything new happening at level 8.</span>    
                        </div>
                        <div class="sign-btn text-center fontcolorFFF cursor-pointer font16" @click="login">
                            SIGN UP
                        </div>
                    </div>
                </div> 

            </div>
        </transition>
   
    </div>
</template>

<script>
import Bus from '@/api/bus';
let stg = window.sessionStorage;
const langImgs = [
                {img:require('../assets/country/USA.png'),country:'United States'},
                {img:require('../assets/country/Australia.png'),country:'Australia'},
                {img:require('../assets/country/Canada.png'),country:'Canada'},
                {img:require('../assets/country/UK.png'),country:'United Kingdom'},
                {img:require('../assets/country/Germany.png'),country:'Germany'},
                {img:require('../assets/country/France.png'),country:'France'},      
                {img:require('../assets/country/Europe.png'),country:'Europe'},
                ]
export default {
    data(){
        return{
            showModel:false,        //判断登录框是否开启
            showLangModel:false,    //判断是否开启选择语言的框
            isLoginTitle:true,      //判断登录框中是登录还是注册
            langImgs,               //国家图片的数组
            menu_num:0,              //判断选择了菜单的哪个类别
            showSearch:false,
            isLogin:0,
            cart:require('../assets/shopcar.svg')
        }
    },
    computed:{
        langStyle(){   //点击选择语言向下箭头变成向上箭头
            // let deg = this.showLangModel ? 180 :0;
           return {
                transform:`rotate(${this.showLangModel ? 180: 0}deg)`
            }
        },
        modelStyle(){       
            let login_h = 0;
            let sign_h = 0;
            if(window.screen.width>=1500)
            {
                login_h = 440;
                sign_h = 520;
            }else{
                login_h = 400;
                sign_h = 480;
            }
                return{
                    height:`${this.isLoginTitle ? login_h : sign_h}px`
                }
            
        }   
    },
    methods: {
        // 显示登录框
        showLogin(){
            let i = 1;
            if(stg.getItem('isLogin')!=='1')
                this.showModel = true;
            else
              this.goRouter('/user')  
        },
        // 关闭登录框
        closeModel(){
            this.showModel = false;
        },
        loginTitle(){
            this.isLoginTitle = true;
        },
        signTitle(){
            this.isLoginTitle = false;
        },
        login(){
            stg.setItem('isLogin',1);    //登录成功修改状态
            this.showModel = false;
            this.isLogin = stg.getItem('isLogin');
            this.$message.success('Login Successful');

        },
        // 选择语言窗口
        changeLangModel(){
            this.showLangModel == true ? this.showLangModel = false : this.showLangModel = true;
        },
        showSearchModel(){
            this.showSearch = true;
        },
        closeSearchModel(){
            this.showSearch = false;
        },
        // 页面跳转
        goRouter(path){
            if(path === '/'){
                this.menu_num = 0;
            }else if(path === '/pro'){
                this.menu_num = 1;
            }else if(path === '/orginal'){
                this.menu_num = 2;
            }else if(path === '/about'){
                this.menu_num = 3;
            }else if(path === '/cart'){
                this.cart = require('../assets/shop-cart.png');
                this.menu_num = 4;
            }
            if(path !== '/cart'){
                this.cart = require('../assets/shopcar.svg');
            }
            this.$router.push(path);
        }
    },
    created(){
        this.isLogin = stg.getItem('isLogin');
    }
}
</script>

<style scoped lang="less">
@import url('./common.css');

.header-fixed{
    position: fixed;
    width: 100vw;
    top:0px;
    left: 0px;
    z-index: 60;
}

.header{
    padding: 10px 0px;
    justify-content: center;
    border-bottom: 1px solid #f7f7f7;
    position: relative;
    @media screen and (max-width: 1200px) {
    .header-content{
        width: 980px;
        }
    }
    @media screen and (min-width: 1200px) {
    .header-content{
        width: 1120px;
        }
    }
    @media screen and (min-width: 1500px) {
    .header-content{
        width: 1300px;
        }
    }
    .header-content{
        
        justify-content: space-between;
        position: relative;
        .header-log{
            width:51px;
            height: 67px;
            margin-right: 140px;  
        }
        @media screen and (min-width: 1500px){
            .header-menu{
                width: 400px;
            }
        }
        @media screen and (max-width: 1500px){
            .header-menu{
                width: 380px;
            }
        }
        .header-menu{
            justify-content: space-between;
            span{
                padding: 8px 0px;
                box-sizing: border-box;
            }
            .select_menu{
                color:#000;
                border-bottom: 2px solid #000;
            }
        }
        .header-right{
            width: 110px; //160
            justify-content: space-between;
            .change-lang{
                padding: 4px;
                border: 1px solid #f0f0f0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 38px;
                .lang-country{
                    width: 20px;
                    height: 15px;
                    position: relative;
                }
                .lang-icon{
                    width: 12px;
                    height: 12px;
                    position: relative;
                    img{
                        transition: all 0.5s linear;
                    }
                }
                img{
                    position: absolute;
                    top:0;
                    left: 0;
                }
            }
            .header-icon{
                width: 20px;
                height: 20px;
            }
        }
        .langModel{
            position: absolute;
            box-sizing: border-box;
            top:78px;
            right: 0px;
            width: 160px;
            height: 180px;
            z-index: 55;
            background: #fff;
            justify-content: space-between;
            .country-item{
                overflow: hidden;   //实现动画效果时防止宽度不会改变
                div{
                    width: 18px;
                    height: 13.5px;
                    margin-right: 4px;
                }
            }
        }
        .searchModel{
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 70;
            background: #fff;
            border-bottom: 1px solid #eee;
            .search-close{
                position: absolute;
                right:0;
                top:0;
            }
            .search-icon{
                position: absolute;
                bottom: 10px;
                height: 26px;
                width: 26px;
                height: 26px;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .search-input{
                position: absolute;
                width: 80%;
                bottom: 4px;
                left: 40px;
                border: none;
                height: 30px;
                outline:none;
            }
            
        }
    }
    

}
.model{
    @media screen and(min-width:1500px) {
        width: 440px;
        // height: 440px;
        .sign-btn{
            margin-top: 50px;
        }
    }
    @media screen and(max-width:1500px) {
        width: 410px;
        // height: 400px;
        .sign-btn{
            margin-top: 30px;
        }
    }
    background-color: #fff;
    border: 1px solid #adadad;
    z-index:100;
    .model-header{
        padding: 10px;
        color: #999;
        background: #f7f7f7;
        .close-icon{
            width: 14px;
            height: 14px;
            position: absolute;
            right: 10px;
            top:12px;
        }
    }
    .model-content{   
        .log-sign{
            display: flex;
            .span{
                padding: 8px 0px;
                width: 50%;
                box-sizing: border-box;
            }
        }
        .container-item{
            margin-top: 20px;
            div{
                text-align: left;
                margin-bottom: 8px;
                font-family: 'Microsoft Yahei'
            }
            input{
                height: 26px;
                padding-left: 10px;
                padding-right: 10px;
            }
        }
        .container-item2{
            margin-top: 16px;
            input{
                margin-left: 0px;
                background: #fff;
            }
        }
        .sign-btn{
            background-color: #333;
            padding: 10px 0px;
        }
    }
}
</style>
