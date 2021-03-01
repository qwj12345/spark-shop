<template>
<div>
    <s-header></s-header>
    <div class="marginTop88 main">
        <transition name="fade03">
            <router-view></router-view>
        </transition>
    </div>
    <s-footer></s-footer>
</div>
</template>

<script>
const SHeader = () => import('components/header')
const SFooter = () => import('components/footer')
export default {
    data(){
        return{
            showModel:false,
        }
    },
    components:{
        SHeader,
        SFooter
    },
    methods: {
        showLogin(){
            this.showModel = true;
        }
    }
}
</script>

<style type="text/css">
@import url('../../components/common.css');


</style>
