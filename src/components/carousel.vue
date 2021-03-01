<template>
    <div>
        <div class="flex-row">
            <div class="carousel-left flex-column-nocenter">
                <div v-for="(item,index) in imgs" :key="index" :class="{'goods-item border-333':imgIndex === index,'goods-item':imgIndex !== index}" @click="goImg(index,$event)">
                    <img :src="item"/>
                </div>
            </div>
            <!-- 轮播图右侧 -->
            <div class="carousel-right cursor-pointer flex-row" @mousemove="mosuseMove">
                <div class="img-overflow">
                    <div class="change-big-span"  :style="moveStyle"></div>
                    <div class="img flex-row"  ref="carousel" :style="containerStyle">
                        <img v-for="(item,index) in imgs" :key="index" :src="item"/>
                    </div>
                </div>
                <div class="goods-img-model">
                    <img :style="modelStyle"  :src="bigImg"/>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgs:[require('../assets/goods/detail1.png'),require('../assets/goods/detail1.png'),require('../assets/goods/detail1.png')],
            distance:0,
            bigImg:require('../assets/goods/detail1.png'),
            imgIndex:0, //每个img都会有id但imgIndex为所选中的那个图片的id
            move_top:0,
            move_left:0,
            cRight:null
        }
    },
    computed:{
        // 监听distance，当触发goImg时改变distance从而修改div的translate3d而移动
        containerStyle() {
            return {
                transform:`translate3d(${this.distance}px, 0, 0)`
                // marginLeft:`${this.distance}px`
            }
        },
        moveStyle(){
            return{
                top:this.move_top+'px',
                left:this.move_left+'px'
            }
        },
        modelStyle(){
            return{
                marginLeft:-this.move_left*2+'px',
                marginTop:-this.move_top*2+'px',
            }
        }
    },
    methods:{
        goImg(index,e){
            this.imgIndex = index;
            this.bigImg = this.imgs[index];
            this.distance = index * -600;
        },
        mosuseMove(e){
            this.move_top = e.pageY - this.cRight.offsetTop - 75;
            this.move_left = e.pageX - this.cRight.offsetLeft - 75;
            if(this.move_top < 0)
                this.move_top = 0;
            if(this.move_top > 450)
                this.move_top = 450;
            if(this.move_left < 0)
                this.move_left = 0;
            if(this.move_left > 450)
                this.move_left = 450;
            console.log(e.y)

        },
    },
    mounted(){
        this.cRight = document.getElementsByClassName('carousel-right')[0];
    }

}
</script>
<style scoped lang="less">
@import url('../components/common.css');

    .carousel-left{
        height: 620px;
        padding-right:10px;
        
        .goods-item{
            width: 50px;
            height: 50px;
            margin: 5px 0;
            box-sizing: border-box;
        }
    }
    .carousel-right{
        height: 600px;
        width: 600px;
        position: relative;
        animation: fadeIn 1s linear;
        -webkit-animation: fadeIn 1s linear;
        .img-overflow{
            overflow: hidden;
        }
        .goods-img-model{
            width: 300px;
            height: 300px;
            position: absolute;
            top:50px;
            right: -300px;
            z-index: 10;
            overflow: hidden;
            display: none;
            img{
                width: 1200px;
                height: 1200px;
            }

        }
        .change-big-span{
            width: 150px;
            height: 150px;
            background: rgba(000, 000, 000, 0.3);
            position: absolute;
            z-index: 10;
            display: none;
        }
        .img{
            height: 600px;
            width: 600px;
            transition: all 1s linear;
            -moz-transition: all 1s linear;
            -webkit-transition: all 1s linear;
            -o-transition: all 1s linear;
        }

    }

    .carousel-right:hover{
        .change-big-span{
            display: block;
        }
        .goods-img-model{
            display: block;
        }
    }
</style>