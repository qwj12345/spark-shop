<template>
    <div>
        <div class="user-header">
            <div class="container media-width flex-row fontcolorCCC font13">
                <span :class="{'fontcolorFFF':menu_id===1}" class="cursor-pointer" @click="goPage('/warranty')">Warranty</span>
                <span :class="{'fontcolorFFF':menu_id===2}" class="cursor-pointer" @click="goPage('/profile')">Profile</span>
                <span :class="{'fontcolorFFF':menu_id===3}" class="cursor-pointer" @click="goPage('/address')">Addresses</span>
                <span :class="{'fontcolorFFF':menu_id===4}" class="cursor-pointer" @click="goPage('/orders')">Orders</span>
                <span :class="{'fontcolorFFF':menu_id===5}" class="cursor-pointer" @click="out">Log out</span>
            </div>
        </div>
    </div>
</template>

<script>
let stg = window.sessionStorage;
export default {
    data(){
        return{
            menu_id:1
        }
    },
    methods:{
        // 页面跳转
        goPage(path){
            if(path === '/warranty'){
                this.menu_id = 1;
            }else if(path === '/profile'){
                this.menu_id = 2;
            }else if(path === '/address'){
                this.menu_id = 3;
            }else if(path === '/orders'){
                this.menu_id = 4;
            }
            
            this.$router.push('/user'+path)
        },
        out(){
            this.$message.success('Log out Successful');
            this.$router.push('/home')
            stg.setItem('isLogin',0);
        }
    }
}
</script>

<style scoped lang='less'>
.user-header{
    background: #444;
    width: 100vw;
    z-index: 50;
    .container{
        padding: 8px 260px;
        margin: 0 auto;
        box-sizing: border-box;
        justify-content: space-between;
    }
}
</style>
