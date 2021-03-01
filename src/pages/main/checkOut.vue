<template>
    <div>
        <div class="check-out media-width">
            <div class="title fontcolor333 font26">
                Check Out
            </div>
            <!--  -->
            <div class="check flex-row">
                <div class="check-left">
                    <div class="form-item font13 fontcolor0 fontBold">
                        <div class="item-title font14">
                            Customer Information
                        </div>
                        <div>
                            <input placeholder="Email"/>
                        </div>
                    </div>
                    <!-- check -->
                    <div class="form-check">
                        <el-checkbox v-model="checked_letter" size="mini">Subscribe to our newsletter</el-checkbox>
                    </div>
                    <!-- Shipping Address -->
                    <div class="form-item font13 fontcolor0 fontBold">
                        <div class="item-title font14">
                            Shipping Address
                        </div>
                        <div class="between-input flex-row">
                            <input placeholder="First Name"/>
                            <input placeholder="Last Name"/>
                        </div>
                    </div>
                    <!-- Email2 -->
                    <div class="form-item">
                        <input placeholder="Email"/>
                    </div>
                    <!--country & state  -->
                    <div class="form-item">
                        <div class="between-select flex-row">
                            <el-select v-model="country" clearable filterable placeholder="Select Country" size="small"  @change="selectCountry">
                                <el-option v-for="item in countrys" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                            <el-select v-model="state" clearable filterable placeholder="Select State" size="small" :disabled='selDisabled'>
                                <el-option v-for="item in selStates" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <!-- City -->
                    <div class="form-item">
                        <!-- <div class="between-select1 flex-row">
                            <el-select v-model="country" clearable placeholder="Select City" size="small">
                                <el-option v-for="item in countrys" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div> -->

                        <input placeholder="City"/>
                    </div>
                    <!--  -->
                    <div class="form-item">
                        <input placeholder="Address:Apartment,Building and Street"/>
                    </div>
                    <!--address2  -->
                    <div class="form-item">
                        <input placeholder="Address2:Other"/>
                    </div>
                    <!-- Zip code & phone -->
                    <div class="form-item font13 fontcolor0 fontBold">
                        <div class="between-input flex-row">
                            <input placeholder="Zip Code"/>
                            <input placeholder="Phone"/>
                        </div>
                    </div>
                    <!-- check -->
                    <div class="form-check">
                        <el-checkbox v-model="checked" size="mini">Use same address as billing address</el-checkbox>
                    </div>
                    <!-- billing  -->
                    <div v-if="!checked">
                        <div class="form-item font13 fontcolor0 fontBold">
                            <div class="item-title font14">
                                Billing Address
                            </div>
                            <div class="between-input flex-row">
                                <input placeholder="First Name"/>
                                <input placeholder="Last Name"/>
                            </div>
                        </div>
                        <!--  -->
                        <div class="form-item">
                            <input placeholder="Email"/>
                        </div>
                        <!--country & state  -->
                        <div class="form-item">
                            <div class="between-select flex-row">
                                <el-select v-model="country" clearable filterable placeholder="Select Country" size="small" @change="selectCountry">
                                    <el-option v-for="item in countrys" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select v-model="state" clearable filterable placeholder="Select State" size="small" :disabled='selDisabled'>
                                    <el-option v-for="item in selStates" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <!-- city -->
                        <div class="form-item">
                            <!-- <div class="between-select1 flex-row">
                                <el-select v-model="country" clearable placeholder="Select City" size="small">
                                    <el-option v-for="item in countrys" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </div> -->
                            <input placeholder="City"/>

                        </div>
                        <!--address  -->
                        <div class="form-item">
                            <input placeholder="Address:Apartment,Building and Street"/>
                        </div>
                        <!-- address2 -->
                        <div class="form-item">
                            <input placeholder="Address2:Other"/>
                        </div>
                        <!--Zip Code & Phone  -->
                        <div class="form-item font13 fontcolor0 fontBold">
                            <div class="between-input flex-row">
                                <input placeholder="Zip Code"/>
                                <input placeholder="Phone"/>
                            </div>
                        </div>
                    </div>

                    <!-- payment -->
                    <div class="payment flex-column-nocenter">
                        <div class="font14 fontcolor0 fontBold">
                            Payment
                        </div>
                        <div class="font13 fontcolor999">
                            All transactions are secure and encrypted.
                        </div>
                        <div class="pay-methods flex-row">
                            <!-- 切图有错 所以加了个padding -->
                            <div class="payimg border-003087 flex-row cursor-pointer padding4"><img src="../../assets/paypal.png"/></div>
                            <span class="fontcolor999">OR</span>
                            <div class="payimg border-E59703 flex-row cursor-pointer"><img src="../../assets/card.png"/></div>
                        </div>
                    </div>
                    <!--  -->
                    <div class="btn-align flex-row">
                        <div class="btn cursor-pointer font16">
                            COMPLETE ORDER
                        </div>
                    </div>
                </div>
                <!-- right -->
                <div class="check-right">
                    <div class=" right-title fontBold font13 fontcolor0">
                        Your Cart
                    </div>
                    <!-- goods -->
                    <div class="goods-item flex-row" v-for="(item,key) in goods" :key="key">
                        <div class="goods-img">
                            <img :src="item.img"/>
                        </div>
                        <div class="goods-info flex-column-nocenter">
                            <div class="fontBold font12 fontcolor0">
                                {{item.title}}
                            </div>
                            <div class="font12 fontcolor999">
                                {{item.color}}
                            </div>
                            <div class="number flex-row">
                                <div class=" font12 fontcolor999">
                                    Qty:{{item.num}}
                                </div>
                                <div class="font12 fontcolor666">
                                    ${{item.price}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- total -->
                    <div class="right-bottom flex-row">
                        <div class="total-price fontcolor333 font14 flex-column-nocenter">
                            <div class="price-item flex-row">
                                <div class="price-title">
                                    Total:
                                </div>
                                <div>
                                    $45.00
                                </div>
                            </div>
                            <div class="price-item flex-row">
                                <div class="price-title">
                                    Shipping:
                                </div>
                                <div>
                                    $0.00
                                </div>
                            </div>
                            <div class="price-item flex-row fontBold">
                                <div class="price-title">
                                    Total:
                                </div>
                                <div>
                                    $45.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import e_countries from '../../../static/e_countries.json';
import e_states from '../../../static/e_states';
export default {
    data(){
        return{
            checked:false,
            checked_letter:false,
            countrys:[],
            states:[],
            selStates:[],
            country:'',
            state:'',
            selDisabled:false,
            goods:[
                {img:require('../../assets/goods/pro1.png'),title:'Grace Roller  Luggage With Front Zippered Laptop Compartment',color:'Black 20\'',num:20,price:45.00},
                {img:require('../../assets/goods/orginal1.jpg'),title:'Grace Roller  Luggage With Front Zippered Laptop Compartment',color:'Black 20\'',num:20,price:45.00}
            ]
        }
    },
    methods:{
        selectCountry(e){
            this.state = '';
            this.selStates = this.states.filter(item => {
                return item.country_id == e;
            });
            if(this.selStates.length ===0) {
                this.state = 'State is Null';
                this.selDisabled = true;
            }else{
                this.state = '';
                this.selDisabled = false;
            }
        }
    },
    mounted(){
        this.countrys = e_countries;
        this.states = e_states;
        this.countrys = JSON.parse(JSON.stringify(this.countrys).replace(/name/g,"label"));
        this.countrys = this.countrys.filter(item => item.label !== '');
        this.countrys.forEach(item => {
            item.value = item.id;
        })
        this.states = JSON.parse(JSON.stringify(this.states).replace(/name/g,"label"));
        this.states = this.states.filter(item => item.label !== '');

        this.states.forEach(item => {
            item.value = item.id;
        })
        
    }
}
</script>

<style lang="less">
@import url('../../components/common.css');
@item-bottom:16px;
.padding4{
    padding-top: 4px;
    box-sizing: border-box;
}
.check-out{
    margin: 0 auto;
    .title{
        padding:80px 0 50px 0;
        text-align: left;
    }
    .check{
        justify-content: space-between;
        .check-left{
            width: 60%;
            margin-bottom: 80px;
            text-align: left;
            input{
                border-radius: 4px;
                padding: 8px 10px;
                border: 1px solid #ddd;
                color: #666666;
                width: 100%;
                box-sizing: border-box;
            }
            input::-webkit-input-placeholder{
                color:#999;
            }
            input::-moz-placeholder{   /* Mozilla Firefox 19+ */
                color:#999;
            }
            input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
                color:#999;
            }
            input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
                color:#999;
            }
            .form-item{
                margin-bottom: @item-bottom;
                .item-title{
                    margin-bottom: 10px;
                    letter-spacing: -1px;
                }
            }
            .between-input{
                justify-content: space-between;
                input{
                    width: 48%;
                }
            }
            .between-select{
                justify-content: space-between;
                .el-select{
                    width: 48%;
                }
            }
            .between-select1{
                justify-content: space-between;
                .el-select{
                    width: 100%;
                }
            }
            .form-check{
                margin-bottom: 20px;
                .el-checkbox__label{
                    font-size: 12px !important;
                }
                .el-checkbox__input.is-checked+.el-checkbox__label {
                    font-size: 12px !important;
                    color: #333 !important; 
                }
                .el-checkbox__inner::after {
                    border: 1px solid #999;
                    border-left: 0;
                    border-top: 0;
                }
                .el-checkbox__input.is-checked .el-checkbox__inner{
                    background-color: #fff;
                    border-color: #999; 
                }
            }

            .payment{
                height: 90px;
                justify-content: space-between;
                margin: 20px 0 30px 0;
                .pay-methods{
                    justify-content: space-between;
                    .payimg{
                        justify-content: center;
                        align-items: center;
                        border-radius: 4px;
                        width: 42%;
                        height: 40px;
                        img{
                            width: 90%;
                            height: 90%;
                        }
                    }
                }
            }
            .btn-align{
                justify-content: flex-end;
                .btn{
                    width: 200px;
                    background: #000;
                    padding: 15px 0px;
                    color: #fff;
                    text-align: center;
                    margin: 10px 0 0px 0;
                }
            }

        }
        .check-right{
            width: 37%;
            height: 1070px;
            margin-top: -80px;
            padding: 36px 18px;
            box-sizing: border-box;
            background: #f6f6f6;
            text-align: left;
            position: relative;
            .right-title{
                letter-spacing: -1px;
            }
            .goods-item{
                padding: 15px 0;
                justify-content: space-between;
                .goods-img{
                    width: 100px;
                    height: 100px;
                    margin-right: 10px;
                }
                .goods-info{
                    height: 100px;
                    width: calc(100% - 110px);
                    box-sizing: border-box;
                    justify-content: space-between;
                    padding: 14px 0;
                    .number{
                        justify-content: space-between;
                    }
                }
            }
            .right-bottom{
                padding-top: 20px;
                padding-right: 18px;
                box-sizing: border-box;
                border-top: 2px solid #000;
                position: absolute;
                right: 0px;
                bottom: 36px;
                width: 100%;
                justify-content: flex-end;
                .total-price{      
                    height: 70px;
                    width: 130px;
                    justify-content: space-between;
                    .price-item{
                        justify-content: space-between;
                        .price-title{
                            width: 70px;
                            text-align: right;
                        }
                    }
                }
            }

        }
    }
}
</style>
