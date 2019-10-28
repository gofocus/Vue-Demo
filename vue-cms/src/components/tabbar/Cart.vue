<template>
    <div class="cart-container">
        <div class="goods-list-container">
            <div class="goods-list" v-for="item in $store.state.cart" :key="item.id">
                <div class="goods-select">
                    <div class="mui-input-row mui-checkbox mui-left">
                        <label></label>
                        <input name="checkbox" value="Item 1" type="checkbox" :checked="item.selected">
                    </div>
                </div>
                <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200119256512.jpg" alt="">
                <div class="goods-info">
                    <h1 class="goods-title">{{ item.title }}</h1>
                    <p class="goods-info-bottom">
                        <span class="goods-price">{{ '￥' + item.price }}</span>
                        <span class="goods-count">
                            <!--把numBox抽离成组件是有必要的-->
                            <cartNumBox :id="item.id" :count="item.count"></cartNumBox>
                        </span>
                        <a class="goods-del" @click.prevent="removeCartItem(item.id)">删除</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="goods-count">

        </div>

    </div>
</template>

<script>
    import cartNumBox from '../subComp/cartNumbox.vue';


    export default {
        name: "Cart",
        data() {
            return {};
        },
        methods: {
            removeCartItem(id) {
                this.$store.commit('removeCartItem', id);
            }
        },
        created() {

        },
        components:{
            cartNumBox
        }
    }
</script>

<style scoped lang="scss">
    .cart-container {

        .goods-list-container {
            background: #eee;
            padding: 10px 0;

            .goods-list {
                display: flex;
                align-items: center;
                height: 100px;
                margin: 10px 20px;
                background-color: white;
                box-shadow: 0 0 5px grey;

                .goods-select {
                    width: 60px;
                    line-height: 30px;
                    .mui-checkbox {
                        margin: auto;
                    }
                }

                img {
                    height: 80%;
                }

                .goods-info {
                    .goods-title {
                        font-size: 14px;
                        padding: 10px;
                    }
                    .goods-info-bottom {
                        display: flex;

                        .goods-price {
                            padding: 0 7px;
                            color: red;
                            font-weight: bold;
                            margin: auto 0;
                        }

                        .goods-count {
                            padding: 0 7px;

                            .mui-numbox {
                            }
                        }

                        .goods-del {
                            padding: 0 7px;
                            margin: auto 0;

                        }
                    }
                }
            }
        }
    }

</style>
