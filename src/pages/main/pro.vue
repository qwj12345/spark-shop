<template>
    <div>
        <!-- banner -->
        <div class="pro-banner">
            <img src="../../assets/goods/pro_banner.jpg"/>
        </div>
        <!--产品列表  -->
        <div class="pro-goods media-width">
            <!--  -->
            <div class="good font16">
                <div class="good-img cursor-pointer"  @click="goDetail">
                    <img src="../../assets/goods/pro1.png"/>
                </div>
                <div class="good-info flex-column-nocenter">
                    <span class="good-title">Gibraltar Luggage 20`</span>
                    <span class="fontcolor6E">$399.00</span>
                    <div class="good-imgs flex-row">
                        <div class="img-color border-999">
                            <img src="../../assets/goods/color2.png"/>
                        </div>
                        <div class="img-color border-999">
                            <img src="../../assets/goods/color1.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="good font16">
                <div class="good-img cursor-pointer" @click="goDetail">
                    <img src="../../assets/goods/pro1.png"/>
                </div>
                <div class="good-info flex-column-nocenter">
                    <span class="good-title">Gibraltar Luggage 20`</span>
                    <span class="fontcolor6E">$399.00</span>
                    <div class="good-imgs flex-row">
                        <div class="img-color border-999">
                            <img src="../../assets/goods/color2.png"/>
                        </div>
                        <div class="img-color border-999">
                            <img src="../../assets/goods/color1.png"/>
                        </div>
                    </div>
                </div>
            </div>
                        <!--  -->
            <div class="good font16">
                <div class="good-img cursor-pointer" @click="goDetail">
                    <img src="../../assets/goods/pro1.png"/>
                </div>
                <div class="good-info flex-column-nocenter">
                    <span class="good-title">Gibraltar Luggage 20`</span>
                    <span class="fontcolor6E">$399.00</span>
                    <div class="good-imgs flex-row">
                        <div class="img-color border-999">
                            <img src="../../assets/goods/color2.png"/>
                        </div>
                        <div class="img-color border-999">
                            <img src="../../assets/goods/color1.png"/>
                        </div>
                    </div>
                </div>
            </div>
                        <!--  -->
            <div class="good font16">
                <div class="good-img cursor-pointer" @click="goDetail">
                    <img src="../../assets/goods/pro1.png"/>
                </div>
                <div class="good-info flex-column-nocenter">
                    <span class="good-title">Gibraltar Luggage 20`</span>
                    <span class="fontcolor6E">$399.00</span>
                    <div class="good-imgs flex-row">
                        <div class="img-color border-999">
                            <img src="../../assets/goods/color2.png"/>
                        </div>
                        <div class="img-color border-999">
                            <img src="../../assets/goods/color1.png"/>
                        </div>
                    </div>
                </div>
            </div>
                        <!--  -->
            <div class="good font16">
                <div class="good-img cursor-pointer" @click="goDetail">
                    <img src="../../assets/goods/pro1.png"/>
                </div>
                <div class="good-info flex-column-nocenter">
                    <span class="good-title">Gibraltar Luggage 20`</span>
                    <span class="fontcolor6E">$399.00</span>
                    <div class="good-imgs flex-row">
                        <div class="img-color border-999">
                            <img src="../../assets/goods/color2.png"/>
                        </div>
                        <div class="img-color border-999">
                            <img src="../../assets/goods/color1.png"/>
                        </div>
                    </div>
                </div>
            </div>
                        <!--  -->
            <div class="good font16">
                <div class="good-img cursor-pointer" @click="goDetail">
                    <img src="../../assets/goods/pro1.png"/>
                </div>
                <div class="good-info flex-column-nocenter font16">
                    <span class="good-title font16">Gibraltar Luggage 20`</span>
                    <span class="fontcolor6E">$399.00</span>
                    <div class="good-imgs flex-row">
                        <div class="img-color border-999">
                            <img src="../../assets/goods/color2.png"/>
                        </div>
                        <div class="img-color border-999">
                            <img src="../../assets/goods/color1.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    methods:{
        goDetail(){
            this.$router.push('/goodsdetail');
        },
    }
}
</script>

<style scoped lang='less'>
@import url('../../components/common.css');

@media screen and (max-width: 1500px){
    .pro-goods{
        margin: 10px 0;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        .good{
            width: 373.3px;
            padding: 20px 0px;
            .good-img{
                width: 373.3px;
                height: 373.3px;
                overflow: hidden;
                text-align: center;
                img{
                    transition: all 1s;
                }
            }
            .good-info{
                span{
                    margin-bottom: 10px;
                }
                .good-imgs{
                    justify-content: center;
                    .img-color{
                        width: 20px;
                        height: 20px;
                        padding: 4px;
                        margin: 0px 5px;
                    }
                }
            }

        }

    }
}

@media screen and (min-width: 1500px){
    .pro-goods{
        margin: 10px 0;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        .good{
            width: 433.3px;
            padding: 20px 0px;
            .good-img{
                width: 433.3px;
                height: 433.3px;
                overflow: hidden;
                text-align: center;
                img{
                    transition: all 1s;
                }
            }
            .good-info{
                span{
                    margin-bottom: 10px;
                }
                .good-imgs{
                    justify-content: center;
                    .img-color{
                        width: 20px;
                        height: 20px;
                        padding: 4px;
                        margin: 0px 5px;
                    }
                }
            }

        }

    }
}
</style>
