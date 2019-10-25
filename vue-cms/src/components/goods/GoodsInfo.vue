<template>
    <div class="goods-info">
        <div class="goods-img">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <swipe :carouselList="carouselList" :isFull="false"></swipe>
                    </div>
                </div>
            </div>
        </div>

        <div class="goods-title">
            <div class="mui-card">
                <div class="mui-card-header">{{ info.title }}</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <div class="price">
                            市场价：<span class="old">￥{{ info.market_price }}</span> &nbsp; &nbsp;
                            销售价：<span class="now">￥{{ info.sell_price }}</span>
                        </div>
                        <div class="purchase">
                            <span>购买数量:</span>
                            <div class="mui-numbox" data-numbox-min='1'>
                                <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                                <input class="mui-numbox-input" type="number" value="1"/>
                                <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
                            </div>
                            <br/>
                            <div class="purchase-btn">
                                <div class="mui-btn mui-btn-danger">立即购买</div>
                                <div class="mui-btn mui-btn-primary">加入购物车</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="mui-card-footer">页脚</div>-->
            </div>
        </div>

        <div class="goods-content">
            <div class="mui-card">
                <div class="mui-card-header mui-card-media"
                     style="height:40vw;background-image:url(../images/cbd.jpg)"></div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p>Posted on January 18, 2016</p>
                        <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
                    </div>
                </div>
                <div class="mui-card-footer">
                    <a class="mui-card-link">Like</a>
                    <a class="mui-card-link">Read more</a>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import swipe from '../subComp/swipe.vue';
    import {Toast} from 'mint-ui';
    import mui from '../../lib/mui/js/mui.js';

    export default {
        name: "GoodsInfo",
        data() {
            return {
                id: this.$route.params.id,
                info: {},
                desc: {},
                carouselList: [],

            }
        },
        methods: {
            getInfo() {
                this.axios.get(this.api + '/goods/getinfo/' + this.id)
                    .then(res => {
                        if (res.data.status === 0) {
                            this.info = res.data.message[0];
                        }
                    })
            },
            getDesc() {
                this.axios.get(this.api + '/goods/getdesc/' + this.id)
                    .then(res => {
                        if (res.data.status === 0) {
                            this.desc = res.data.message[0];
                        }
                    })
            },
            getCarouselList() {
                this.axios.get(this.api + '/getthumimages/' + this.id)
                    .then(res => {
                        if (res.data.status === 0) {
                            this.carouselList = res.data.message;
                        }
                        else {
                            Toast('获取轮播图失败');
                        }
                    })

            }
        },
        created() {
            this.getCarouselList();
            this.getDesc();
            this.getInfo();
        },
        mounted() {
            mui('.mui-numbox').numbox();
        },
        components: {
            swipe
        }
    }
</script>

<style scoped lang="scss">
    .goods-info {
        background-color: #eeeeee;
        overflow: hidden;
        .goods-img {

            .mint-swipe {
                height: 200px;
                text-align: center;

                img {
                    height: 100%;
                }
            }
        }

        .goods-title {

            .price {
                margin: 7px 0;

                .now {
                    color: red;
                    font-size: 16px;
                }
                .old {
                    text-decoration: line-through;
                    font-size: 13px;
                }
            }

            .purchase {
                .mui-numbox {
                    height: 26px;
                }
                .purchase-btn {
                    margin: 7px 0;
                }
            }

        }


    }
</style>
