<template>
    <div>
        <div class="media-width">
            <!-- title -->
            <div class="s-title">Order Information</div>
            <!-- goodsInfo -->
            <div class="goods-info">
                <!-- order title -->
                <div class="info-title font13 fontcolor333 flex-row">
                    <div class="order-number">
                        Order Number:
                        <span class="fontcolor999">505957</span>
                    </div>
                    <div class="status">
                        Order Status:
                        <span class="fontcolor999">Cancelled</span>
                    </div>
                    <div class="status">
                        Order Date:
                        <span class="fontcolor999">2019-08-01 10:00:00</span>
                    </div>
                </div>
                <!-- goodsList -->
                <div class="goods-list">
                    <div class="goods-item flex-row">
                        <div class="item-left flex-row">
                            <div class="goods-img">
                                <img src='../../assets/goods/pro1.png'/>
                            </div>
                            <div class="goods-info font13">
                                <div class="fontcolor0 fontBold goods-name">Elegance 20" Luggage Black</div>
                                <div class="fontcolor999">Black</div>
                            </div>
                        </div>
                        <div class="item-right flex-row fontcolor0 font13">
                            <div class="fontcolor666">× 1</div>
                            <div>$45.00</div>
                        </div>
                    </div>
                    <div class="goods-item flex-row">
                        <div class="item-left flex-row">
                            <div class="goods-img">
                                <img src='../../assets/goods/orginal1.jpg'/>
                            </div>
                            <div class="goods-info font13">
                                <div class="fontcolor0 fontBold goods-name">Elegance 20" Luggage Black</div>
                                <div class="fontcolor999">Black</div>
                            </div>
                        </div>
                        <div class="item-right flex-row fontcolor0 font13">
                            <div class="fontcolor666">× 1</div>
                            <div>$45.00</div>
                        </div>
                    </div>
                </div>
                <!-- totalPrice -->
                <div class="total-price flex-row">
                    <div class="price font13 fontcolor333 flex-column-nocenter">
                        <div class="price-item flex-row">
                            <span class="price-title">Sub-Total:</span>
                            <span>$45</span>
                        </div>
                        <div class="price-item flex-row">
                            <span class="price-title">Shipping:</span>
                            <span>$45</span>
                        </div>
                        <div class="price-item flex-row">
                            <span class="price-title">Order Total:</span>
                            <span class="fontBold">US $90</span>
                        </div>
                    </div>

                </div>
                <!--  -->
                <div class="user-info border-999 flex-row">
                    <!--  -->
                    <div class="user-info-content flex-column-nocenter">
                        <div class="top">
                            <div class="top-title fontcolor333 fontBold font14">
                                Billing Address
                            </div>
                            <div class="top-content fontcolor666 font13 flex-column-nocenter">
                                <span>Ye Jun</span>
                                <span>Email:99242118@qq.com</span>
                                <span>Phone:13059035698</span>
                                <span>New York City Ameciran State Hilton New York City Ameciran State Hilton</span>
                                <span>bon,123456</span>
                                <span>Belarus</span>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="bottom-title fontcolor333 font14">
                                <span class="fontBold">Payment :</span>
                                <span>Pending</span>
                            </div>
                            <div class="bottom-content font13 fontcolor666">
                                <span>Payment Method Paypal Standard</span>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                  <div class="user-info-content flex-column-nocenter">
                        <div class="top">
                            <div class="top-title fontcolor333 fontBold font14">
                                Shpping Address
                            </div>
                            <div class="top-content fontcolor666 font13 flex-column-nocenter">
                                <span>Ye Jun</span>
                                <span>Email:99242118@qq.com</span>
                                <span>Phone:13059035698</span>
                                <span>New York City Ameciran State Hilton New York City Ameciran State Hilton</span>
                                <span>bon,123456</span>
                                <span>Belarus</span>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="bottom-title fontcolor333 font14">
                                <span class="fontBold">Shipping :</span>
                                <span>Not yet Shipped</span>
                            </div>
                            <div class="bottom-content font13 fontcolor666">
                                <span>Shipping Method:$40 Express Shipping</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
@import url('../../components/common.css');

.goods-info{
    .info-title{
        margin-bottom: 20px;
        background-color: #f6f6f6;
        padding: 10px 20px;
        justify-content: space-between;
    }
    .goods-list{
        padding: 10px 20px;
        border-bottom: 2px solid #000;
        margin-bottom: 20px;
        .goods-item{
            padding: 10px;
            justify-content: space-between;
            .item-left{
                width: 400px;
                .goods-img{
                    width: 100px;
                    height: 100px;
                    margin-right: 20px;
                }
                .goods-info {
                    text-align: left;
                    .goods-name{
                        margin-bottom: 6px;
                    }
                }
            }
            .item-right{
                width: 200px;
                justify-content: space-between;
            }
        }
    }
    .total-price{
        margin-bottom: 30px;
        padding-right: 20px;
        justify-content: flex-end;
        .price{
            height: 60px;
            justify-content: space-between;

            .price-item{
                @media screen and (max-width:1500px){
                    width: 140px;
                }
                @media screen and (min-width:1500px) {
                    width: 150px;
                }
                justify-content: space-between;
                .price-title{
                    @media screen and (max-width:1500px){
                    width: 80px;
                    }
                    @media screen and (min-width:1500px) {
                        width: 90px;
                    }
                    text-align: right;
                }
            }
        }
    }
    .user-info{
        padding: 20px;
        border-radius: 4px;
        margin-bottom: 100px;
        justify-content: space-between;
        .user-info-content{
            text-align: left;
            .top{
                margin-bottom: 20px;
                .top-title{
                    padding: 4px 0;
                    letter-spacing: -1px;
                    position: relative;
                    margin-bottom: 12px;
                }
                .top-title:after{   //设置固定长度的下划线
                    content:'';
                    position: absolute;
                    width: 50px;
                    left: 0;
                    bottom: 0;
                    border: 1px solid #000;
                    
                }
                .top-content{
                    height: 110px;
                    justify-content: space-between;
                }
            }

            .bottom{
                .bottom-title{
                    padding: 4px 0;
                    letter-spacing: -1px;
                    position: relative;
                    margin-bottom: 12px;
                }
                .bottom-title:after{   //设置固定长度的下划线
                    content:'';
                    position: absolute;
                    width: 50px;
                    left: 0;
                    bottom: 0;
                    border: 1px solid #000;
                    
                }
            }

        }
    }
}
</style>
