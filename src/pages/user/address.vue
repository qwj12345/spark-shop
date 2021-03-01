<template>
    <div>
        <div class="media-width">
            <!-- title -->
            <div class="s-title">Address</div>
            <!-- addressList -->
            <div class="address-list fontcolor666">
                <div class="address-item" :class="{'border-999':!item.isSelect,'border-333':item.isSelect}" v-for="(item,key) in addressList" :key="key" @click="clickAddress(key)">
                    <div class="name fontcolor333 font18 fontBold">{{item.name}}</div>
                    <!-- addressInfo -->
                    <div class="address-info flex-column-nocenter font13">
                        <div class="detail">{{item.detail}}</div>
                        <div class="state">{{item.state}}</div>
                        <div class="area">
                            <span>{{item.city}},{{item.country}}</span>
                        </div>
                    </div>
                    <!-- Edit & Remove -->
                    <div class="opration flex-row font14">
                        <!-- edit -->
                        <div class="edit flex-row cursor-pointer" @click="goAdd">
                            <div class="opration-icon">
                                <img src="../../assets/edit.png"/>
                            </div>
                            <span>Edit</span>
                        </div>
                        <!-- remove -->
                        <div class="remove flex-row cursor-pointer" @click="removeAddress(key)">
                            <div class="opration-icon">
                                <img src="../../assets/remove.png"/>
                            </div>
                            <span>Remove</span>
                        </div>
                    </div>
                    <!-- selBack -->
                    <div class="select-back" v-if="item.isSelect">
                        <img src="../../assets/sback.png"/>
                    </div>
                </div>
            </div>
            <!-- add address -->
            <div class="add-address flex-row fontcolor0 cursor-pointer font16" @click="goAdd">
                <div class="flex-row">
                    <div class="add-icon">
                        <img src="../../assets/add.png"/>
                    </div>
                    <span>ADD NEW ADDRESS</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            addressList:[
                {name:'Levi.Rowling',detail:'88 RUE MARIE DE MEDICIS 88 RUE MARIE DE MEDICIS 88 RUE MARIE DE',state:'CARCASSONNE,310000',city:'New York',country:'America',isSelect:true},
                {name:'Jane.Rowling',detail:'88 RUE MARIE DE MEDICIS 88 RUE MARIE DE MEDICIS 88 RUE MARIE DE',state:'CARCASSONNE,310000',city:'New York',country:'America',isSelect:false},
                {name:'JK.Rowling',detail:'88 RUE MARIE DE MEDICIS 88 RUE MARIE DE MEDICIS 88 RUE MARIE DE',state:'CARCASSONNE,310000',city:'New York',country:'America',isSelect:false},
            ]
        }
    },
    methods: {
        goAdd(){
            this.$router.push('/user/addAddress');
        },
        clickAddress(id){
            this.addressList.forEach((item,index) => {
                if(id === index){
                    item.isSelect = true;
                }else{
                    item.isSelect = false;
                }
            })
        },
        removeAddress(id){
            this.addressList.splice(id,1);
        }
    },
}
</script>

<style scoped lang='less'>
@import url('../../components/common.css');
@item-bottom:25px;      //每个地址间的距离
@l-title-bottom:15px;   //地址列表中大标题的margin-bottom的大小

.address-list{
    .address-item{
        position: relative;
        text-align: left;
        padding: 20px;
        border-radius: 4px;
        margin-bottom: @item-bottom;
        .name{
            margin-bottom: @l-title-bottom;
        }
        .address-info{
            height: 60px;
            justify-content: space-between;
            margin-bottom: @l-title-bottom;
        }
        .opration{
            .opration-icon{
                width: 16px;
                height: 16px;
                margin-right:4px; 
            }
            .edit{
                margin-right: 14px;
            }
        }
        .select-back{
            position:absolute;
            bottom: 0px;
            right: 0px;
            width: 24px;
            height: 20px;
        }
    }

}
.add-address{
    width:100%;
    border: 1px dashed #999;
    border-radius: 4px;
    padding: 60px 0;
    justify-content: center;
    margin-bottom: 80px;
    .add-icon{
        width: 24px;
        height: 24px;
        margin-right: 20px;
    }
}
</style>
