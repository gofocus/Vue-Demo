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
                                <div class="mui-btn mui-btn-primary" @click="addToCart">加入购物车</div>

                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="mui-card-footer">页脚</div>-->
            </div>
        </div>

        <div class="goods-content">
            <div class="mui-card">
                <div class="mui-card-header">商品参数</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p>商品货号：{{ info.goods_no }}</p>
                        <p>库存情况：{{ info.stock_quantity }}</p>
                        <p>上架时间：{{ info.add_time | dateFormatter }}</p>
                    </div>
                </div>
                <div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="gotoDesc">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain @click="gotoComments">商品评论</mt-button>
                </div>
            </div>
        </div>

        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
        >
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>

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
                carouselList: [],
                ballFlag: false,
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
            //跳转到图文详情页面
            gotoDesc() {
                this.$router.push({name: 'goodsDesc', params: {id: this.id}});
                // this.$router.push('/home/goodsDesc/' + this.id);
            },
            //跳转到商品评论页面
            gotoComments() {
                this.$router.push({name: 'goodsComments', params: {id: this.id}});
                // this.$router.push('/home/goodsDesc/' + this.id);
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
            },
            addToCart(){
                this.ballFlag = true;
            },
            beforeEnter(el) {
                el.style.transform = "translate(0,0)";
            },
            enter(el, done) {
                // 动态计算小球移动距离
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                // 子组件不能通过ref去拿父组件的元素，虽然Vue不推荐操作DOM，但针对的是数据绑定，这里直接操作DOM拿到徽标是最方便的
                const badgePosition = document.getElementById('cart_badge').getBoundingClientRect();
                const xDist = badgePosition.left - ballPosition.left;
                const yDist = badgePosition.top - ballPosition.top;
                console.log(xDist);
                console.log(yDist);
                el.offsetWidth;
                el.style.transform = `translate(${xDist}px,${yDist}px)`;
                el.style.transition = "all .5s ease";
                done();
            },
            afterEnter(el) {
                this.ballFlag = false;
            }
        },
        created() {
            this.getCarouselList();
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

        .goods-content {
            .mui-btn {
                width: 100%;
            }

            button {
                margin: 10px 0;
            }
        }

        .mui-card-footer {
            display: block;
        }
    }
    .ball {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        top: 390px;
        left: 140px;
        z-index: 99;
    }
</style>
