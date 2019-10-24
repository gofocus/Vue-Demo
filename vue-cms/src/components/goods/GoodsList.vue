<template>
    <div>
        <div class="goods-list">
            <!--<router-link class="goods-item" v-for="item in goodsList" :key="item.id" :to="'/home/goodsInfo/' + item.id" tag="div">-->
            <!--编程式路由-->
            <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="gotoDetails(item.id)">
                <img :src="item.img_url"/>
                <h1 class="title">{{ item.title }}</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥{{ item.sell_price }}</span>
                        <span class="old">￥{{ item.market_price }}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩{{ item.stock_quantity }}件</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="mui-btn mui-btn-danger" @click="getGoodsList">加载更多</div>

    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "GoodsList",
        data() {
            return {
                pageIndex: 1,
                goodsList: [],

            }
        },
        methods: {
            getGoodsList() {
                this.axios.get(this.api + '/getgoods?pageindex=' + this.pageIndex)
                    .then(res => {
                        if (res.data.status === 0) {
                            if (res.data.message.length === 0) {
                                Toast('没有更多商品了')
                            }
                            else {
                                this.goodsList = this.goodsList.concat(res.data.message);
                                this.pageIndex++;
                            }

                        }
                        else {
                            Toast('获取商品列表失败');
                        }
                    })
            },
            gotoDetails(id){
                // 编程式路由
                this.$router.push({path: `/home/goodsInfo/${id}`});
            }
        },
        created() {
            this.getGoodsList();

        },

    }
</script>

<style scoped lang="scss">
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 7px;

        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 5px #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;

            img {
                width: 100%;
            }

            .title {
                font-size: 14px;
            }

            .info {
                background-color: #eee;

                p {
                    margin-bottom: 0;
                    padding: 4px;
                }

                .price {
                    .old {
                        text-decoration: line-through;
                        margin-left: 10px;
                        font-size: 12px;
                    }
                    .new {
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                }

                .sell {
                    display: flex;
                    justify-content: space-between;

                }

            }

            .title, .info {
            }

        }

    }

    .mui-btn.mui-btn-danger {
        width: 100%;
    }
</style>
