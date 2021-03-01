<template>
    <div>
        <div class="media-width">
            <!-- title -->
            <div class="s-title">Edit Address</div>
            <!-- form -->
            <div class="form font14 fontcolor333">
                <!-- Full Name -->
                <div class="form-item">
                    <div class="form-title">
                        <span class="must-icon">*</span>
                        <span>Full Name</span>
                    </div>
                    <div>
                        <input />
                    </div>
                </div>
                <!-- Country/Territory -->
                <div class="form-item">
                    <div class="form-title">
                        <span class="must-icon">*</span>
                        <span>Country/Territory</span>
                    </div>
                    <div>
                        <el-select v-model="city" clearable filterable placeholder="" size="small" @change="selectCountry">
                            <el-option v-for="item in countrys" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <!-- Address Line1 -->
                <div class="form-item">
                    <div class="form-title">
                        <span class="must-icon">*</span>
                        <span>Address Line1</span>
                    </div>
                    <div>
                        <input />
                    </div>
                </div>
                <!-- Address Line2 -->
                <div class="form-item">
                    <div class="form-title">
                        <span>Address Line2</span>
                    </div>
                    <div>
                        <input />
                    </div>
                </div>
                <!-- City & State -->
                <div class="flex-row row-items">
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
                    <div class="form-item row-item">
                        <div class="form-title">
                            <span class="must-icon">*</span>
                            <span>City</span>
                        </div>
                        <div>
                            <input />
                        </div>
                    </div>   
                </div>
                <!-- Zip Code & Phone -->
                <div class="flex-row row-items">
                    <div class="form-item row-item">
                        <div class="form-title">
                            <span class="must-icon">*</span>
                            <span>Zip Code</span>
                        </div>
                        <div>
                            <input />
                        </div>
                    </div>                   
                    <div class="form-item row-item">
                        <div class="form-title">
                            <span class="must-icon">*</span>
                            <span>Local Phone Number</span>
                        </div>
                        <div>
                            <input />                            
                        </div>
                    </div>   
                </div>
                <!-- check -->
                <div class="select-check flex-row font12">
                    <el-checkbox v-model="checked" size="mini">Set as Default Address</el-checkbox>
                </div>
                <!-- save  -->
                <div class="btn cursor-pointer" @click="goAddress">
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
            checked:true,
            city:'',
            state:'',
            countrys:[],
            states:[],
            selDisabled:false,
            selStates:[]
        }
    },
    methods:{
        goAddress(){
            this.$router.push('/user/address');
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

<style lang='less'>
@import url('../../components/common.css');
@item-bottom:25px;      //每个item间的距离
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
        margin-bottom: @item-bottom;
        .form-title{
            margin-bottom: 10px;
            .must-icon{
                color: red;
            }
        }
    }
    .row-items{
        justify-content: space-between;
        .row-item{
            width: 48%;
        }
    }
    .select-check{
        text-align: left;
        margin-bottom: 40px;
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
    .btn{
        width: 160px;
        background: #000;
        padding: 15px 0px;
        color: #fff;
        text-align: center;
        margin: 0 0 80px 0;
    }
}
</style>
