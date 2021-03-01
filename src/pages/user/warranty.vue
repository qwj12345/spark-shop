<template>
    <div>
        <div class="media-width">
            <!-- title -->
            <div class="s-title">Register Your Purchase</div>
            <!-- form -->
            <div class="form font14 fontcolor333">
                <!--  Purchase-->
                <div class="form-item">
                    <div class="form-title">
                        <span class="must-icon">*</span>
                        <span>Your Purchase Channel</span>
                    </div>
                    <div class="form-selects flex-row">
                        <div v-for="(item,key) in purchase" :key="key" :class="{'border-333':item.isSelect,'border-666 fontcolor666':!item.isSelect}" class="form-select input-radius cursor-pointer" @click="selectPur(key)">
                            {{item.title}}
                            <div class="select-color" v-if="item.isSelect">
                                <img src="../../assets/sback.png"/>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- name -->
                <div class="flex-row row-items">
                    <div class="form-item row-item">
                        <div class="form-title">
                            <span class="must-icon">*</span>
                            <span>First Name</span>
                        </div>
                        <div>
                            <input v-model="firstName"/>
                        </div>
                    </div>                   
                    <div class="form-item row-item">
                        <div class="form-title">
                            <span class="must-icon">*</span>
                            <span>Last Name</span>
                        </div>
                        <div>
                            <input v-model="lastName"/>
                        </div>
                    </div>   
                </div>
                <!--email  -->
                <div class="flex-row row-items">
                    <div class="form-item row-item">
                        <div class="form-title">
                            <span class="must-icon">*</span>
                            <span>Email Address</span>
                        </div>
                        <div>
                            <input v-model="email"/>
                        </div>
                    </div>                   

                    <div class="form-item row-item">
                        <div class="form-title">
                            <span class="must-icon">*</span>
                            <span>Your Phone Number</span>
                        </div>
                        <div>
                            <input v-model="phone"/>
                        </div>
                    </div>   
                </div>
                <!-- address -->
                <div class="form-item">
                    <div class="form-title">
                        <span>Address</span>
                    </div>
                    <div class="form-title">
                        <span class="must-icon">*</span>
                        <span>Street Address</span>
                    </div>
                    <div>
                        <input v-model="street"/>
                    </div>
                </div>                   
                <!-- address line2 -->
                <div class="form-item">
                    <div class="form-title">
                        <span>Address Line2</span>
                    </div>
                    <div>
                        <input v-model="address2"/>
                    </div>
                </div>
                <!-- city &state -->
                <div class="flex-row row-items">
                    <div class="form-item row-item">
                        <div class="form-title">
                            <span class="must-icon">*</span>
                            <span>Country</span>
                        </div>
                        <div>
                            <el-select v-model="country" filterable clearable placeholder="" size="small" @change="selectCountry">
                                <el-option v-for="item in countrys" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>                   
                    <div class="form-item row-item">
                        <div class="form-title">
                            <span class="must-icon">*</span>
                            <span>State</span>
                        </div>
                        <div>
                            <el-select v-model="state" clearable filterable placeholder="" size="small" :disabled="selDisabled">
                                <el-option v-for="item in selStates" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>   
                </div> 
                <!-- postal & coutry  -->
                <div class="flex-row row-items">
                    <div class="form-item row-item">
                        <div class="form-title">
                            <span class="must-icon">*</span>
                            <span>City</span>
                        </div>
                        <div>
                            <input v-model="city"/>
                        </div>
                    </div>                   
                    <div class="form-item row-item">
                        <div class="form-title">
                            <span class="must-icon">*</span>
                            <span>Postal / Zip Code</span>
                        </div>
                        <div>
                            <input v-model="postal"/>
                        </div>
                    </div>   
                </div>    
                <!-- 产品列表 -->
                <div class="form-item">
                    <div class="form-title">
                        <span class="must-icon">*</span>
                        <span>Your Product</span>
                    </div>
                    <div class="form-goods flex-row">
                        <div class="product" v-for="(item,key) in products" :key="key">
                            <div class="product-img">
                                <img :src="item.img"/>
                            </div>
                            <div class="product-label font12 fontcolor666">
                                {{item.label}}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- quantity -->
                <div class="form-item">
                    <div class="form-title">
                        <span class="must-icon">*</span>
                        <span>Quantity</span>
                    </div>
                    <div>
                        <el-input-number size="small" v-model="num"  :min="1" :max="100"></el-input-number>
                    </div>
                </div>
                <!-- save  -->
                <div class="btn cursor-pointer" @click="save">
                    SAVE
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
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            street:'',
            address2:'', 
            city:'',
            state:'',
            postal:'',
            country:'',
            purchase:[{title:'Amazon',isSelect:true},{title:'Level8 official website',isSelect:false},{title:'Others',isSelect:false}],
            citys:[{value:'Canada',label:'Canada'}],
            states:[],
            countrys:[],
            selStates:[],
            selDisabled:false,
            num:1,
            products:[{img:require('../../assets/goods/pro1.png'),label:'Gibraltar Luggage 20"'},{img:require('../../assets/goods/orginal1.jpg'),label:'Gibraltar Luggage 20"'}]
        }
    },
    
    methods:{
        selectPur(id){
            this.purchase.forEach((item,index) => {
                if(id === index){
                    item.isSelect = true;
                }else{
                    item.isSelect = false;
                }
            })
        },
        selectCountry(e){
            this.state = '';
            // 根据所选的country筛选出属于此country的state
            this.selStates = this.states.filter(item => {
                return item.country_id == e;
            });
            // 如果此country下没有state将下拉框设为不可选显示state is null
            if(this.selStates.length ===0) {
                this.state = 'State is Null';
                this.selDisabled = true;
            }else{
                this.state = '';
                this.selDisabled = false;
            }

        },
        save(){
            if(this.firstName == '' || this.lastName == '' || this.email == '' || this.phone == '' || this.street == '' || this.address2 == '' || this.city == '' || this.state == '' || this.country == '' || this.postal == '')
                this.$message.error('Please Enter Complete!')
            else{
                this.$message.success('Save Successful!')
            }
        }
    },
    mounted(){
        this.countrys = e_countries;
        this.states = e_states;
        this.countrys = JSON.parse(JSON.stringify(this.countrys).replace(/name/g,"label"));//将读取文件中json数据中name字段改为label字段
        this.countrys = this.countrys.filter(item => item.label !== '');   //过滤掉json数据中label 为空的数据
        this.countrys.forEach(item => {                                    //新增一个value字段为了适应elementUI的组件
            item.value = item.id;
        })
        // states数据的处理start
        this.states = JSON.parse(JSON.stringify(this.states).replace(/name/g,"label"));
        this.states = this.states.filter(item => item.label !== '');
        this.states.forEach(item => {
            item.value = item.label;
        })
        // states数据处理end
        // 将elementUI中下拉框没数据时的提醒‘无数据’改为'NO DATA' 
        let emptySels = document.getElementsByClassName('el-select-dropdown__empty');

        Array.from(emptySels).forEach(item => {
            item.innerHTML = 'NO DATA';
        })
    }
}
</script>

<style scoped lang='less'>
@import url('../../components/common.css');

.el-select{
    width: 100% !important;
    font-size: 13.3333px !important;
}

.form{
    text-align: left;
    input{
        border-radius: 4px;
        padding: 8px 10px;
        border: 1px solid #ddd;
        color: #666666;
        width: 100%;
        box-sizing: border-box;
    }
   
    .form-item{
        margin-bottom: 25px;
        .form-title{
            margin-bottom: 10px;
            .must-icon{
                color: red;
            }
        }
        .form-selects{
            .form-select{
                position: relative;
                padding: 6px 15px;
                margin-right: 10px;
                .select-color{
                    position:absolute;
                    bottom: 0px;
                    right: 0px;
                    width: 24px;
                    height: 20px;

                }
            }
        }
        .form-goods{
            width: 50%;
            .product{
                width: 90px;
                margin-right: 10px;
                .product-img{
                    width: 90px;
                    height: 90px;
                    margin-bottom: 10px;
                }
                .product-label{
                    text-align: center;
                }
            }

        }
    }
    .row-items{
        justify-content: space-between;
        .row-item{
            width: 48%;
        }
    }
    .btn{
        width: 160px;
        background: #000;
        padding: 15px 0px;
        color: #fff;
        text-align: center;
        margin: 40px 0 80px 0;
    }

}
</style>
