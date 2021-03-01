<template>
    <div>
        <div class="media-width">
            <!-- title -->
            <div class="s-title">Orders</div>
            <!-- orderList -->
            <div class="order-list fontcolor333">
                <div class="order-item border-CCC" v-for="(item,key) in orders" :key="key">
                    <!-- order title -->
                    <div class="order-title flex-row">
                        <div class="order-number font14 fontcolor0">
                            Order Number:{{item.number}}
                        </div>
                        <div class="info-right flex-row">
                        
                            <div class="button font13 flex-row border-CCC cursor-pointer" @click="goDetail">
                                <span>Details</span>
                                <div class="left-icon">
                                    <img src="../../assets/right.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- order-info -->
                    <div class="order-info font12">
                        <!--  -->
                        <div class="info-top flex-row">
                            <div>
                                <span class="fontcolor0">Order Status:</span>
                                <span class="fontcolor666">{{item.status}}</span>
                            </div>
                            <div>
                                <span class="fontcolor0">Order Date:</span>
                                <span class="fontcolor666">{{item.date}}</span>
                            </div>
                            <div>
                                <span class="fontcolor0">Order Quantity:</span>
                                <span class="fontcolor666">{{item.quantity}}</span>
                            </div>
                            <div>
                                <span class="fontcolor0">Order Total:</span>
                                <span class="fontcolor0 fontBold">US $ {{item.total}}</span>
                            </div>
                        </div>
                        <!--  -->
                        <div class="info-bottom flex-row">
                            <div class="info-img" v-for="(imgUrl,index) in item.img" :key="index">
                                <img :src="imgUrl"/>
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
    data(){
        return{
            orders:[
                {number:'025890',status:'Cancelled',img:[require('../../assets/goods/pro1.png'),require('../../assets/goods/orginal2.jpg'),require('../../assets/goods/orginal1.jpg')],date:'2019-10-01 10:00:00',quantity:2,total:90.02},
                {number:'025891',status:'Cancelled',img:[require('../../assets/goods/pro1.png'),require('../../assets/goods/orginal2.jpg')],date:'2019-10-01 10:00:00',quantity:2,total:90.03},
                {number:'025892',status:'Cancelled',img:[require('../../assets/goods/pro1.png')],date:'2019-10-01 10:00:00',quantity:2,total:90.05},
                {number:'025893',status:'Cancelled',img:[require('../../assets/goods/pro1.png'),require('../../assets/goods/orginal2.jpg')],date:'2019-10-01 10:00:00',quantity:2,total:90.06},
            ]
        }
    },
    methods: {
        goDetail(){
            this.$router.push('/user/orderDetail');
        }
    },
}
</script>

<style scoped lang='less'>
@import url('../../components/common.css');
@item-bottom:20px;      //每个地址间的距离
@l-title-bottom:15px;   //地址列表中大标题的margin-bottom的大小

.order-list{
    .order-item{
        margin-bottom: @item-bottom;
        border-radius: 4px;
        .order-title{
            background-color: #f6f6f6;
            padding: 6px 10px;
            justify-content: space-between;
            .order-number{
                font-weight: 500;
            }
            .info-right{
                height: 36px;
                width: 200px;
                position: relative;
                .button{
                    position: absolute;
                    bottom: 0px;
                    right: 0px;
                    width: 120px;
                    padding: 8px 0px;
                    background: #fff;
                    justify-content: center;
                    border-radius: 4px;
                    .left-icon{
                        margin-left: 10px;
                        margin-top: -5px;
                        width: 20px;
                        height: 10px;
                    }
                }
            }
        }
        .order-info{
            padding: 10px 10px;
            justify-content: space-between;
            .info-top{
                justify-content: space-between;
            }
            .info-bottom{
                margin-top: 10px;
                .info-img{
                    width: 80px;
                    height: 80px;
                    margin-right: 20px;
                }
            }
        }
    }
}
</style>
