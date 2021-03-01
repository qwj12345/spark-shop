<template>
    <div>
        <div class="header">
            <s-user-header></s-user-header>
        </div>
        <router-view></router-view>

    </div>
</template>

<script>
const SUserHeader = () => import('components/userHeader')
export default {
components:{
    SUserHeader
},
}
</script>

<style scoped lang='less'>
@import url('../../components/common.css');
.header{
    position: fixed;
    top: 88px;
    z-index: 50;
}
</style>
