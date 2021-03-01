<template>
    <div>
        <div class="media-width">
            <!-- title -->
            <div class="s-title">Edit Your Profile</div>
            <!-- form -->
            <div class="form font14 fontcolor333">
            <!--  Gender-->
                <div class="form-item">
                    <div class="form-title">
                        <span class="must-icon">*</span>
                        <span>Gender</span>
                    </div>
                    <div class="form-selects flex-row">
                        <div v-for="(item,key) in genders" :key="key" :class="{'border-333':item.isSelect,'border-666 fontcolor666':!item.isSelect}" class="form-select input-radius flex-row cursor-pointer" @click="selectGender(key)">
                            <div class="gender-icon">
                                <img v-if="!item.isSelect" :src="item.img"/>
                                <img v-if="item.isSelect" :src="item.selimg"/>
                            </div>
                            <span>{{item.title}}</span>
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
                            <span>First Name</span>
                        </div>
                        <div>
                            <input />
                        </div>
                    </div>                   
                    <div class="form-item row-item">
                        <div class="form-title">
                            <span>Last Name</span>
                        </div>
                        <div>
                            <input />
                        </div>
                    </div>   
                </div>
                <!-- Email & Address --> 
                <div class="flex-row row-items">
                    <div class="form-item row-item">
                        <div class="form-title">
                            <span>Email Address</span>
                        </div>
                        <div>
                            <input />
                        </div>
                    </div>                   
                    <div class="form-item row-item">
                        <div class="form-title">
                            <span>Your Phone Number</span>
                        </div>
                        <div>
                            <input />
                        </div>
                    </div>   
                </div>
                <!-- change password -->
                <div class="form-item">
                    <div class="button font13 flex-row border-999" >
                        <span>Change Password</span>
                        <div class="left-icon">
                            <img src="../../assets/right.png"/>
                        </div>
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
export default {
    data(){
        return{
            genders:[{title:'Male',img:require('../../assets/male.png'),selimg:require('../../assets/selmale.png'),isSelect:true},{title:'Female',img:require('../../assets/female.png'),selimg:require('../../assets/selfemale.png'),isSelect:false}]
        }
    },
    methods: {
        selectGender(id){
            this.genders.forEach((item,index) => {
                if(id === index)
                    item.isSelect = true;
                else
                    item.isSelect = false;
            })
            // this.genders[id].isSelect === true ? this.genders[id].isSelect = false : this.genders[id].isSelect = true;
        },
        save(){
            this.$message.success('Save Successful!')
        }
    },
}
</script>

<style scoped lang='less'>
@import url('../../components/common.css');
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
                .gender-icon{
                    width: 20px;
                    height: 20px;
                }
                .select-color{
                    position:absolute;
                    bottom: 0px;
                    right: 0px;
                    width: 24px;
                    height: 20px;
                }
            }
        }
        .button{
            width: 160px;
            padding: 8px 0px;
            background: #f6f6f6;
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
        margin: 30px 0 80px 0;
    }
}
</style>
