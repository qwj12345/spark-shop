<template>
    <div>
        <div class="cart media-width">
            <div class="cart-title fontcolor333  font26">
                Cart
            </div>
            
            <div class="items-title fontcolor333 fontBold font18 flex-row">
                <div class="title-right flex-row">
                    <div class="quantity">QUANTITY</div>
                    <div class="total">TOTAL</div>
                </div>  
            </div>
            <!-- 购物车中产品列表 -->
            <div class="goods-items ">
                <div class="goods-item flex-row" v-for="(item,key) in products" :key="key">
                    <!-- 图片和描述 -->
                    <div class="item-left flex-row">
                        <div class="goods-img">
                            <img :src="item.imgUrl"/>
                        </div>
                        <div class="goods-info flex-column-nocenter ">
                            <div class="info-top fontBold  fontcolor0 font16">
                                {{item.name}}
                            </div>
                            <div class="info-center fontcolor74 font14">
                                {{item.color}}
                            </div>
                            <div class="info-bottom fontcolorFFF font14 cursor-pointer" @click="removeProduct(key)">
                                Remove
                            </div>
                        </div>
                    </div>
                    <!-- 数量和价格 -->
                    <div class="item-right flex-row font16">
                        <div class="goods-num flex-row">
                            <input :value="item.num"/>
                        </div>
                        <div class="total-price fontcolor0">
                            ${{item.price}}
                        </div>
                    </div>
                </div>

                <!-- <div class="goods-item flex-row">
                    <div class="item-left flex-row">
                        <div class="goods-img">
                            <img src="../../assets/goods/pro1.png"/>
                        </div>
                        <div class="goods-info flex-column-nocenter">
                            <div class="info-top fontBold  fontcolor0">
                                Grace Roller  Luggage With Front Zippered Laptop Compartment  B
                            </div>
                            <div class="info-center fontcolor74">
                                Black 20'
                            </div>
                            <div class="info-bottom fontcolorFFF font14 cursor-pointer" >
                                Remove
                            </div>
                        </div>
                    </div>
                    <div class="item-right flex-row">
                        <div class="goods-num flex-row">
                            <input value="1"/>
                        </div>
                        <div class="total-price fontcolor0">
                            $45.00
                        </div>
                    </div>
                </div> -->
            </div>
            <!-- 总价 -->
            <div class="total-price fontcolor0 fontBold font16">
                Subtotal: $90.00
            </div>
            <!--  -->
            <div class="message">
                <div class="message-code flex-row font16">
                    <input placeholder="usr promo code" v-model="code"/>
                    <div class="apply fontcolorFFF cursor-pointer" @click="apply">Apply</div>
                    <span v-if="showMessage===1" class="input-success font14">Code applied successfully</span>
                    <span v-if="showMessage===2" class="input-fail font14">The code can not be applied to your order</span>
                </div>
                <div class="order-node">
                    <div class="node-title fontcolor0 font14">ORDER NODE</div>
                    <div>
                        <textarea></textarea>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="check">
                <div class="select-check flex-row">
                    <input type="checkbox"/>
                    <span class="check-text font12 fontcolor74">I AGREE WITH THE TERMS AND CONDITIONS</span>
                </div>
                <div class="check-btn fontcolorFFF font14 cursor-pointer" @click="goCheck">CHECK OUT</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            products:[
                {imgUrl:require('../../assets/goods/pro1.png'),name:'Grace Roller  Luggage With Front Zippered Laptop Compartment  B',color:'Black 20\'',num:1,price:45.55},
                {imgUrl:require('../../assets/goods/orginal1.jpg'),name:'Grace Roller  Luggage With Front Zippered Laptop Compartment  B',color:'Black 20\'',num:1,price:45.55},
                {imgUrl:require('../../assets/goods/orginal2.jpg'),name:'Grace Roller  Luggage With Front Zippered Laptop Compartment  B',color:'Black 20\'',num:1,price:45.55},
            ],
            code:'',
            showMessage:0
        }
    },
    methods: {
        goCheck(){
            this.$router.push('/checkOut')
        },
        removeProduct(id){
            this.products.splice(id,1);
        },
        apply(){
            console.log(111)
            if(this.code=='123456')
                this.showMessage = 1;
            else
                this.showMessage = 2;
        }
    },
}
</script>

<style scoped lang='less'>
@import url('../../components/common.css');
.cart{
    margin: 0 auto;
    .cart-title{
        padding:80px 0 50px 0;
        text-align: left;
    }
    .items-title{
        padding: 10px 20px;
        background-color: #f6f6f6;
        justify-content: flex-end;
        .title-right{
            width: 35%;
            justify-content: space-between;
            letter-spacing:2px;
            .quantity{
                width: 200px;
            }
            .total{
                width: 80px;
            }
        }
    }
    .goods-items{
        border-bottom: 1px solid #000;
        .goods-item{
            padding: 20px;
            .item-left{
                width: 65%;
                
                .goods-img{
                    width: 100px;
                    height: 100px;
                }
                .goods-info{
                    height: 100px;
                    text-align: left;
                    margin-left: 40px;
                    padding: 5px;
                    box-sizing: border-box;
                    justify-content: space-between;
                    .info-bottom{
                        width: 100px;
                        padding: 6px 0;
                        text-align: center;
                        background: #000;
                    }
                }
            }
            
            .item-right{
                width: 35%;
                justify-content: space-between;
                .goods-num{
                    width:200px;
                    justify-content: center;
                    input{
                        height: 30px;
                        width: 70px;
                        text-align:center; 
                    }
                }
                .total-price{
                    width: 80px;
                    
                }
            }
        }
    }
    .total-price{
        padding: 20px 10px;
        text-align: right;
    }
    .message{
        padding:20px 10px;
        background: #f7f7f7;
        text-align: left;
        .message-code{
            position: relative;
            input{
                width: 400px;
                height: 36px;
                box-sizing: border-box;
                padding-left: 10px;
            }
            .apply{
                width: 80px;
                text-align: center;
                background: #000;
                height: 36px;
                line-height: 36px;
            }
            .input-success{
                color: #35ff02;
                position: absolute;
                left: 0;
                top: 42px;
            }
            .input-fail{
                color: red;
                position: absolute;
                left: 0;
                top: 42px;
            }
        }
        .order-node{
            margin-top: 30px;
            .node-title{
                letter-spacing: 2px;
                margin-bottom: 5px;
            }
            textarea{
                width: 100%;
                height: 80px;
                box-sizing: border-box;
                resize:none
            }
        }
    }
    .check{
        padding: 30px 0 150px 0;
        .select-check{
            justify-content: flex-end;
        }
        .check-btn{
            float: right;
            margin-top: 20px;
            width: 100px;
            padding: 12px;
            background: #000;
        }
    }
}

</style>
