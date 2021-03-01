<template>
    <div>
        <div class="container">
            <div class="goods-param flex-row media-width">
                <!-- 轮播图 -->
                <div class="carousel">
                    <s-carousel></s-carousel>
                </div>
                <!-- .侧参数 -->
                <div class="parameter">
                    <div class="title fontcolor0 font28 fontBold">
                        Gibraltar Luggage 20"
                    </div>
                    <div class="price fontcolor333 font26">
                        $399.00
                    </div>
                    <div class="describe font14 fontcolor666">
                        Meet the perfect carry-on. Sized to fit in the overhead bin of most major air-lines,
                        it's thoughtfully designed to last a lifetime -and guaranteed for it too,Meet the prefet
                        carry-on.
                    </div>
                    <!-- 颜色 -->
                    <div class="goods-color">
                        <div class="color fontcolor0 font16">
                            <span class="color-title">COLOR</span>
                            <span class="selcolor fontcolor666 ">--Gray</span>
                        </div>
                        <div class="good-imgs flex-row">
                            <div class="img-color border-333">
                                <img src="../../assets/goods/color2.png"/>
                            </div>
                            <div class="img-color">
                                <img src="../../assets/goods/color1.png"/>
                            </div>
                        </div>
                    </div>
                    <!-- Detail -->
                    <div class="describe-items">
                        <div class="title border-ddd fontcolor333 font14 flex-row fontBold">
                            <span>FEATURES AND DETAILS</span>
                            <span v-if="!isFetures" class="col-btn fontBold fontcolor666" @click="changeFetures"><img src="../../assets/add1.png"/></span>
                            <span v-else class="col-btn fontBold fontcolor666" @click="changeFetures"><img src="../../assets/dec.png"/></span>
                        </div>
                        <div v-if="isFetures" class="describe-detail border-ddd fontcolor666 font14 flex-column-nocenter">
                            <div>- Durable polycarbonate shell</div>
                            <div>- Ejectable battery that charges your phone</div>
                            <div>- TSA-approved combination lock</div>
                        </div>
                    </div>
                    <!-- POLICY -->
                    <div class="describe-items">
                        <div class="title border-ddd fontcolor333 font14 flex-row fontBold">
                            <span>OUR RETURN POLICY</span>
                            <span v-if="!isPolicy" class="col-btn fontBold fontcolor666" @click="changePolicy"><img src="../../assets/add1.png"/></span>
                            <span v-else class="col-btn fontBold fontcolor666" @click="changePolicy"><img src="../../assets/dec.png"/></span>
                        </div>
                        <div v-if="isPolicy" class="describe-detail border-ddd fontcolor666 font14 flex-column-nocenter">
                            <div>- Durable polycarbonate shell</div>
                            <div>- Ejectable battery that charges your phone</div>
                            <div>- TSA-approved combination lock</div>
                        </div>
                    </div>
                    <!-- quantity -->
                    <div class="quantity">
                        <div class="title fontcolor333 font14 fontBold">QUANTITY</div>
                        <el-input-number size="small" v-model="num"  :min="1" :max="100"></el-input-number>
                    </div>
                    <div class="btns font16">
                        <div class="add-btn border-000 fontcolor0 cursor-pointer" >
                            ADD TO CART
                        </div>
                        <div class="buy-btn fontcolorFFF cursor-pointer">
                            BUY IT NOW
                        </div>
                    </div>
                </div>
            </div>
            <!-- comments -->
            <div class="comments">
                <div class="comments-items media-width flex-row">
                    <div v-for="(item,key) in comments" :key="key" :style="item.show" class="comments-item" >
                        <div class="user flex-row fontcolor0 font13">
                            <div class="avatar">
                                <img :src="item.avatar" />
                            </div>
                            <span>{{item.name}}</span>
                        </div>
                        <!-- img & like & view -->
                        <div>
                            <div class="comment-img cursor-pointer">
                                <img v-lazy="item.img"/>
                            </div>
                            <div class="comment-info">
                                <!-- like -->
                                <div class="likes flex-row">
                                    <div class="heart">
                                        <img src="../../assets/comments/heart.svg"/>
                                    </div>
                                    <div class="fontcolor0 font13">{{item.likes}} likes</div>
                                </div>
                                <!-- view -->
                                <div class="view fontcolor9f font14">
                                    View all {{item.commentsNum}} comments
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <!--details  -->
            <div class="details media-width">
                <div class="detail-head">
                    <img  :src="head_img"/>
                </div>
                <!--  -->
                <div class="flex-row details-img-label" v-for="(item,key) in detail_imgs" :key="key" :class="{'flex-start':key%2===0,'flex-end':key%2===1}">
                    <div class="detail-img">
                            <img v-if="item.show" v-lazy="item.img"/>
                    </div>
                    <div class="detail-label " :class="{'padding-left20':key%2===0,'padding-right20':key%2===1}">
                        <div class="label-title fontBold fontcolor0 font18">{{item.labelTitle}}</div>
                        <div class="label fontcolor666 font13">{{item.label}}</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
const SCarousel = () => import('components/carousel');
import {addEvent} from 'components/common';
import { setTimeout, setInterval } from 'timers';
export default {
    data(){
        return{
            test:false,
            detailImg:[],
            num:1,
            isFetures:true,    //是否显示Fetures
            isPolicy:false,     //是否显示Policy
            comments:[
                {avatar:require('../../assets/comments/ins1.png'),name:'James',img:require('../../assets/comments/ins2.png'),likes:2030,commentsNum:19},
                {avatar:require('../../assets/comments/ins1.png'),name:'James',img:require('../../assets/comments/ins2.png'),likes:2120,commentsNum:13},
                {avatar:require('../../assets/comments/ins1.png'),name:'James',img:require('../../assets/comments/ins2.png'),likes:1230,commentsNum:9},
                {avatar:require('../../assets/comments/ins1.png'),name:'James',img:require('../../assets/comments/ins2.png'),likes:2080,commentsNum:109},
                {avatar:require('../../assets/comments/ins1.png'),name:'James',img:require('../../assets/comments/ins2.png'),likes:1330,commentsNum:18},
                {avatar:require('../../assets/comments/ins1.png'),name:'James',img:require('../../assets/comments/ins2.png'),likes:2150,commentsNum:29},
                {avatar:require('../../assets/comments/ins1.png'),name:'James',img:require('../../assets/comments/ins2.png'),likes:980,commentsNum:23},
                {avatar:require('../../assets/comments/ins1.png'),name:'James',img:require('../../assets/comments/ins2.png'),likes:1930,commentsNum:59},
                ],
            head_img:require('../../assets/goods/detail01.png'),
            detail_imgs:[
                {img:require('../../assets/goods/detail_img1.png'),show:false,labelTitle:'Start strong',label:'Inside: two compartments—one designed for your clothes, the other for harder items like shoes and toiletries. Outside: a lightweight yet durable polycarbonate shell, designed with a little flex to pack (and protect) even more.'},
                {img:require('../../assets/goods/detail_img2.png'),show:false,labelTitle:'Start strong',label:'Inside: two compartments—one designed for your clothes, the other for harder items like shoes and toiletries. Outside: a lightweight yet durable polycarbonate shell, designed with a little flex to pack (and protect) even more.'},
                {img:require('../../assets/goods/detail_img3.png'),show:false,labelTitle:'Start strong',label:'Inside: two compartments—one designed for your clothes, the other for harder items like shoes and toiletries. Outside: a lightweight yet durable polycarbonate shell, designed with a little flex to pack (and protect) even more.'},
                {img:require('../../assets/goods/detail_img4.png'),show:false,labelTitle:'Start strong',label:'Inside: two compartments—one designed for your clothes, the other for harder items like shoes and toiletries. Outside: a lightweight yet durable polycarbonate shell, designed with a little flex to pack (and protect) even more.'},
                {img:require('../../assets/goods/detail_img5.png'),show:false,labelTitle:'Start strong',label:'Inside: two compartments—one designed for your clothes, the other for harder items like shoes and toiletries. Outside: a lightweight yet durable polycarbonate shell, designed with a little flex to pack (and protect) even more.'},
                {img:require('../../assets/goods/detail_img6.png'),show:false,labelTitle:'Start strong',label:'Inside: two compartments—one designed for your clothes, the other for harder items like shoes and toiletries. Outside: a lightweight yet durable polycarbonate shell, designed with a little flex to pack (and protect) even more.'},
            ]
        }
    },
    components:{
        SCarousel
    },

    methods:{
        
        // 是否显示Fetyures
        changeFetures(){
            this.isFetures === true ? this.isFetures = false : this.isFetures = true;
        },
        // 是否显示Policy
        changePolicy(){
            this.isPolicy=== true ? this.isPolicy = false : this.isPolicy = true;
        },
        windowScroll(){
            let seeHeight = document.documentElement.clientHeight; //可见区域高度
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            // this.detailImg是一个伪数组不能使用forEach可以使用Array.from转为数组
            Array.from(this.detailImg).forEach((item,index) => {
                if(item.offsetTop < seeHeight + scrollTop){
                    this.detail_imgs[index].show = true;
                }
            })
        }
    },
    created(){
        let comment_num = 4 - this.comments.length % 4;   //计算最后一排还差几个
        
        for(let i=0;i<(comment_num===4?comment_num=0:comment_num=comment_num);i++)
        {
            this.comments.push({show:'visibility:hidden'});//防止space-between布局中当最后一排数量不足时排版的错乱
        }
    },
    
    mounted(){
        this.detailImg = document.getElementsByClassName('detail-img');   //获取商品详情里的图片的DOM以便判断是否滑动到此图片了

        addEvent() ? window.addEventListener('scroll', this.windowScroll) : window.attachEvent('scroll', this.windowScroll);
    }
}
</script>

<style scoped lang="less">
@import url('../../components/common.css');

.padding-left20{
    padding-left: 20px;
    text-align: left;
}
.padding-right20{
    padding-left: 20px;
    text-align: left;
}
.flex-start{
    flex-direction: row;
}
.flex-end{
    flex-direction: row-reverse;
}
.container{
    margin-bottom: 50px !important;

    .goods-param{
        align-items: stretch;
        margin: 0 auto;

        .carousel{
            margin: 60px 0px;
            height: 620px;
            width: calc(60%);
        }
        .parameter{
            padding-left: 20px;
            box-sizing: border-box;
            width: calc(40%);
            margin-top: 60px;
            text-align: left;
            .title{
                margin-bottom: 18px;
            }
            .price{
                padding-bottom: 18px;
                border-bottom: 1px solid #ddd;
                margin-bottom: 18px;
            }
            .describe{
                line-height: 25px;
                margin-bottom: 18px;

            }
            .goods-color{
                margin-bottom: 18px;
                .color{
                    font-weight: 400;
                    margin-bottom: 10px;
                    .color-title{
                        letter-spacing: 4px;
                        margin-right: 8px;
                    }
                }
                .good-imgs{
                    .img-color{
                        width: 20px;
                        height: 20px;
                        padding: 4px;
                        margin: 0px 5px;
                    }
                }
            }
            .describe-items{
                margin-bottom: 18px;
                .title{
                    justify-content: space-between;
                    padding: 8px;
                    letter-spacing: 4px;
                    margin-bottom: 0px;
                    .col-btn{
                        width: 20px;
                        height: 20px;
                    }
                }
                .describe-detail{
                    justify-content: space-between;
                    border-top: none;
                    padding: 8px; 
                    div{
                        margin: 4px 0;
                    }
                }
            }
            .quantity{
                margin-bottom: 24px;
                .title{
                    letter-spacing: 4px;
                }
            }
            .btns{
                .add-btn{
                    text-align: center;
                    padding: 10px 0;
                    margin-bottom: 10px;
                }
                .buy-btn{
                    text-align: center;
                    padding: 10px 0;
                    background: #000;
                    margin-bottom: 20px;
                }  
            }
        }
    }
    .comments{
        background: #f6f6f6;
        .comments-items{
            margin: 0 auto;
            padding: 10px 0;
            justify-content: space-between;
            flex-wrap: wrap;
            @media screen and (min-width: 1500px) {
                .comments-item{
                    padding: 10px 0;
                    width: 310px;
                    
                    .user{
                        .avatar{
                            width: 40px;
                            height: 40px;
                        }
                    }
                    div{
                        .comment-img{
                            width: 310px;
                            height: 310px;
                        }

                        .comment-info{
                            .likes{
                                .heart{
                                    width: 16px;
                                    height: 16px;
                                }
                            }

                        }
                    }
                }
            }
            @media screen and (max-width: 1500px) {
                .comments-item{
                    padding: 10px 0;
                    width: 265px;
                    
                    .user{
                        .avatar{
                            width: 36px;
                            height: 36px;
                        }
                    }
                    div{
                        .comment-img{
                            width: 265px;
                            height: 265px;
                        }
                        .comment-info{
                            .likes{
                                .heart{
                                    width: 14px;
                                    height: 14px;
                                }
                            }
                        }
                    }
                }
            }
            .comments-item{
                .user{
                    .avatar{
                        border-radius: 50%;
                        overflow: hidden;
                        margin-right: 10px;
                    }
                }
                div{
                    .comment-img{
                        margin-top: 6px;
                        overflow: hidden;
                        img{
                            transition: all 1s;
                            -o-transition: all 1s;
                            -webkit-transition: all 1s;
                            -moz-transition: all 1s;
                        }
                    }
                    .comment-img:hover{
                        img{
                            width: 110%;
                            height: 110%;
                            margin-left: -5%;
                            margin-top: -5%;
                        }
                    }
                    .comment-info{
                        background: #fff;
                        padding: 6px;

                        .likes{
                            .heart{
                                margin-right: 6px;
                            }
                        }
                        .view{
                            margin-top:6px;
                            text-align: left;
                        }
                    }
                }

            }
        }
    }
    
    .details{
        margin: 0 auto;
        .detail-head{
            margin: 20px 0;
        }
        .details-img-label{
            margin: 20px 0;
            .detail-img{
                width:60%;
                img{
                    animation: fadeIn 2s linear;
                    -webkit-animation: fadeIn 2s linear;
                }
                
            }
            .detail-label{
                width: 40%;
                .label-title{
                    margin-bottom:10px;
                }
                .label{
                    line-height: 20px;
                }
            }
        }
    }
}


</style>
