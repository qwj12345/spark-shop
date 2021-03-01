<template>
    <div>
        <el-carousel class="carousel" indicator-position='none' arrow='never'  :loop="false" :interval='interval' ref="home" @change="changeCar">
            <el-carousel-item class="carouselItem" v-for="(item,key) in banners" :key="item"  >
                <div class="carousel-text_1 font3_5 font38">100% Polycarbonate</div>
                <div class="carousel-text_2 font2_5 font9f">Luggage Material</div>
                <div class="carousel-text_3 font1_5 fontcolor0 border-000-2 cursor-pointer" @click="goDetail">SHOP NOW</div>
                <img :src="item"/>
                <button class="el-carousel__arrow el-carousel__arrow--right carousel_btn" style="opacity:0" @click="setImage(key,2)">
                    <i class="el-icon-arrow-right"></i>
                </button>
                <button class="el-carousel__arrow el-carousel__arrow--left carousel_btn" style="opacity:0" @click="setImage(key,1)">
                    <i class="el-icon-arrow-left"></i>
                </button>
            </el-carousel-item>
        </el-carousel>

        <div class="container media-width">
            <!-- 1 -->
            <div class="container-left flex-row">
                <div class="container-img">
                    <img v-if="img_show[0]" src="../../assets/goods/home_img1.png"/>
                </div>
                <div class="container-desc flex-column-nocenter font26">
                    <span class="desc fontcolorAD">LUGGAGE</span>      
                    <span class="desc fontBold">Simplify travel</span>
                    <div class="btn-btnshadow">
                            <span class="desc_btn font14 fontcolorFFF cursor-pointer" @click="goDetailOpen">GET IT</span>
                            <span class="btn_shadow border-333"></span> 
                    </div> 
                </div>
            </div>
            <!-- 2 -->
            <div class="container-right flex-row">
                <div class="container-img">
                    <img v-if="img_show[1]" src="../../assets/goods/home_img2.png"/>
                </div>
                <div class="container-desc flex-column-nocenter font26">
                    <span class="desc fontcolorAD">BACKPACK</span>      
                    <span class="desc fontBold">Transform journey</span>
                    <div class="btn-btnshadow">
                        <div class="flex-row">
                            <span class="desc_btn font14 fontcolorFFF cursor-pointer" @click="goDetailOpen">GO SHOPPING</span>
                        </div>
                        <span class="btn_shadow border-333"></span>  
                    </div>      
                </div>   
            </div>
            <!-- 3 -->
            <div class="container-left2 flex-row">
                <div class="container-img">
                    <img v-if="img_show[2]" src="../../assets/goods/home_img3.png"/>
                </div>
                <div class="container-desc flex-column-nocenter font26">
                    <span class="desc fontcolorAD">SLEEVE</span>      
                    <span class="desc fontBold">Laptop-Mate</span>
                    <div class="btn-btnshadow">
                        <span class="desc_btn font14 fontcolorFFF cursor-pointer" @click="goDetailOpen">GET YOURS</span>
                        <span class="btn_shadow border-333"></span>
                    </div>        
                </div>
            </div>
        </div>
        
        <div class="footer_banner">
            <img src="../../assets/goods/home_img4.png" />
            <div class="footer-text">
                <span class="font20 footer-text1">LEVEL8</span>
                <span class="font16 footer-text2">Strives to bring travel and computer bags, sleeves, and backpacks to you with a balance simplicity and sophistication in its purity.</span>
            </div>
        </div>
    </div>
</template>

<script>
import {addEvent} from 'components/common';
export default {
    data(){
        return{
            banners:[require('@/assets/goods/home_banner1.png'),require('@/assets/goods/home_banner2.png')],
            Imgs:[],
            img_show:[false,false,false],
            loop:false,
            carousels:[],
            interval:10000
        }
    },
    methods:{
        goDetail(){
            this.$router.push('/goodsdetail');
        },
        goDetailOpen(){
            const {href} = this.$router.resolve({
                name: 'GoodsDetail'
            })
            window.open(href, '_blank')
        },
        windowScroll(){
            let seeHeight = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //可见区域高度
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            // this.detailImg是一个伪数组不能使用forEach可以使用Array.from转为数组
            Array.from(this.Imgs).forEach((item,index) => {
                if(item.offsetTop < seeHeight + scrollTop){
                     this.$set(this.img_show,index,true);  //需要使用this.$set()不然视图不会更新
                }
            })
        },
        setImage(id,index){
            if(index === 1){
                if(id === 0)
                    this.$refs.home.setActiveItem(0);
                else
                    this.$refs.home.setActiveItem(id-1);
            }
            if(index === 2){
                if(id === this.banners.length-1)
                    this.$refs.home.setActiveItem(this.banners.length-1);
                else
                    this.$refs.home.setActiveItem(id+1);
            }


        }
    },

    mounted(){
        this.Imgs = document.getElementsByClassName('container-img');   //获取商品详情里的图片的DOM以便判断是否滑动到此图片了
            
        //判断浏览器是IE还是其他浏览器和时间addEcentListener attachEvent('scroll')，时光时光慢些吧 
        addEvent() ? window.addEventListener('scroll', this.windowScroll) : window.attachEvent('scroll', this.windowScroll);
    }

}
</script>

<style lang="less">
@import url('../../components/common.css');

.carousel:hover{
    overflow: hidden;
    .carousel_btn{
        opacity:1 !important;
    }
}
.carousel-text_1{
    position: absolute;
    top: 22vw;
    left:14vw;
}
.carousel-text_2{
    position: absolute;
    top: 26vw;
    left:14.8vw;
}
.carousel-text_3{
    position: absolute;
    padding: 10px 0px;
    width: 12vw;
    top: 30vw;
    left:14.8vw;
    transition: all 0.5s;
    -o-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
}
.carousel-text_3:hover{
    background: #000;
    color: #fff;
}
.el-carousel__container{
    height: 50vw;
}
.container{
    margin: 0 auto;
    .container-left{
        margin-top: 30px;
        .container-img{
            width:818px;
            height: 544px;
            overflow: hidden;
            img{
                animation: changeSize 2s linear;
                -webkit-animation: changeSize 2s linear;
            }
        }

        .container-desc{
            @media screen and (min-width: 1500px){
                padding-left: 60px;                
            }
            @media screen and (max-width: 1500px){
                padding-left: 30px;                
            }
            height: 544px;
            justify-content: center;
            position: relative;
            .desc{
                text-align: left;
                margin-bottom:10px;
            }
            .btn-btnshadow{
                margin-top:10px;
                position: relative;
                .desc_btn{
                    width:80px;
                    height: 30px;
                    box-sizing: border-box;
                    background: #000;
                    padding: 7px 0;
                    position: absolute;
                    left: 0;
                    z-index: 5;
                }
                .btn_shadow{
                    position: absolute;
                    top:1px;
                    left:1px;
                    width: 80px;
                    height: 30px;
                    z-index: 1 !important;
                }
            }
        }
    }
    .container-left2{
        margin-top: 30px;
        .container-img{
            width:818px;
            height: 544px;
            overflow: hidden;
            img{
                animation: changeSize 2s linear;
                -webkit-animation: changeSize 2s linear;
            }
        }

        .container-desc{
            @media screen and (min-width: 1500px){
                padding-left: 60px;                
            }
            @media screen and (max-width: 1500px){
                padding-left: 30px;                
            }
            height: 544px;
            justify-content: center;
            .desc{
                text-align: left;
                margin-bottom:10px;
            }
            .btn-btnshadow{
                margin-top:10px;
                position: relative;

                .desc_btn{
                    width:110px;
                    height: 30px;
                    box-sizing: border-box;
                    background: #000;
                    position: absolute;
                    padding: 7px 0;
                    left: 0;
                    z-index: 5;
                }
                .btn_shadow{
                    position: absolute;
                    top:1px;
                    left:1px;
                    width: 110px;
                    height: 30px;
                    z-index: 1 !important;
                }
            }

        }
    }
    .container-right{
        margin-top: 30px;
        flex-direction: row-reverse;
        .container-img{
            width:818px;
            height: 544px;
            overflow: hidden;
            img{
                animation: changeSize 2s linear;
                -webkit-animation: changeSize 2s linear;
            }
        }

        .container-desc{
            @media screen and (min-width: 1500px){
                padding-right: 60px;                
            }
            @media screen and (max-width: 1500px){
                padding-right: 30px;                
            }
            height: 544px;
            justify-content: center;
            .desc{
                text-align: right;
                margin-bottom:10px;
            }
            .btn-btnshadow{
                margin-top:10px;
                position: relative;
                div{
                    justify-content: flex-end;
                    position: absolute;
                    right: 0;
                    .desc_btn{
                        width:130px;
                        height: 30px;
                        box-sizing: border-box;
                        background: #000;
                        padding: 7px 0;
                        z-index: 5;
                    }
                }
                
                .btn_shadow{
                    position: absolute;
                    top:1px;
                    right:-3px;
                    width: 130px;
                    height: 30px;
                    z-index: 1 !important;
                }
            }
        }
    }
}
.footer_banner{
    margin-top: 20px; 
    height: 31vw;
    position: relative;
    .footer-text{
        position: absolute;
        width: 100%;
        padding: 0 300px;
        box-sizing: border-box;
        left: 0;
        top:calc(50% - 40px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .footer-text1{
            color: #ffd637;
            margin-bottom: 10px;
        }
        .footer-text2{
            color: #fff;
        }
    }
}
</style>
