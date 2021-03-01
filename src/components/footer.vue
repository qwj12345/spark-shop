<template>
    <div class="footer flex-row">
        <div class="footer-content flex-row media-width">
            <!-- footer左半部分 -->
            <div class="footer-left flex-row">
                <!-- 左半部分的左半部分 -->
                <div class="footer-shop flex-column-nocenter">
                    <span class="shop-title font14 fontBold fontcolor333">SHOP</span>
                    <div class="flex-column-nocenter fontcolor333 font12">
                        <span>Backpacks</span>
                        <span>Sleeves</span>
                        <span>Luggage</span>
                        <span>Interior organizers</span>
                    </div>
                </div>
                <!-- 左半部分的右半部分 -->
                <div class="footer-shop flex-column-nocenter">
                    <span class="shop-title font14 fontBold fontcolor333">HELP</span>
                    <div class="flex-column-nocenter fontcolor333 font12">
                        <span>Shipping</span>
                        <span>Warranty</span>
                        <span>Returns & Refunds</span>
                        <span>Contact Us</span>
                    </div>
                </div>
            </div>
            <!-- footer的右半部分 -->
            <div class="footer-right fontcolor333 flex-column-nocenter">
                <div class="right-top flex-row">
                    <span class="font14 fontBold">Follow us on</span>
                    <div class="right-icon flex-row">
                        <img src='../assets/INS.svg'/>
                    </div>
                    <div class="right-icon flex-row">
                        <img src='../assets/Facebook.svg'/>
                    </div>
                    <div class="right-icon flex-row">
                        <img src='../assets/Twitter.svg'/>
                    </div>
                    <div class="right-icon flex-row">
                        <img src='../assets/Youtube.svg'/>
                    </div>
                </div>
                
                <div class="right-center font12 ">
                    Exceptional quaily Ethical factories Radical 
                    Transparency.Sign up to enjoy free U.S.shipping
                    and returns on yours first order.
                </div>
            
                <div class="right-footer flex-row">
                    <div class="right-footer-icon">
                        <img src="../assets/Email.svg"/>
                    </div>
                    <h1></h1>
                    <input class="font12" placeholder="Email Address"/>
                    <!-- <span ></span> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
    .footer{
        padding: 30px 0px 50px;
        justify-content: center;
        border-top: 3px solid #ffd637;
        background: #fafaf9;
        .footer-content{
            justify-content: space-between;
           
            .footer-left{
                width:340px;
                justify-content: space-between;
                *{
                    text-align: left;
                }
                .footer-shop{
                    .shop-title{
                        margin-bottom: 26px;
                    }
                    div{
                        justify-content: space-between;
                        height: 90px;
                    }
                }
            }
            .footer-right{
                width: 230px;
                height: 132px;
                .right-top{
                    
                    justify-content: space-between;
                    margin-bottom: 26px;
                    .right-icon{
                        height: 20px;
                        width: 20px;
                        border: 1px solid #666;
                        border-radius: 50%;
                        align-items: center;
                        justify-content: center;
                        img{
                            width: 60%;
                            height: 60%;
                        }
                    }
                }
                .right-center{
                    text-align: left;
                    margin-bottom: 10px;
                }
                .right-footer{                   
                    border-bottom: 1px solid #adadad;
                    padding: 4px 0px;
                    .right-footer-icon{
                        width: 26px;
                        height: 26px;
                        margin-right: 10px;
                    }
                    input{
                        border: none;
                        height: 20px;
                        outline:none;
                    }
                }
            }
        }
    }
</style>
