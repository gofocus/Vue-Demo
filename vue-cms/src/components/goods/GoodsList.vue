<template>
    <div>
        <div class="goods-list">
            <div class="goods-item">
                <img src="https://m.360buyimg.com/babel/jfs/t1/51796/3/3090/165250/5d0da795Eab1d07e8/780a99bc93e0230b.png"
                     alt="">
                <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥899</span>
                        <span class="old">￥999</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </div>
            <div class="goods-item">
                <img src="//m.360buyimg.com/babel/jfs/t1/52299/20/12979/274134/5d9d9fdeE71d91646/1b4dedd95e4c32fb.jpg!q70.jpg"
                     alt="">
                <h1 class="title">努比亚 nubia 红魔3S电竞游戏手机 8GB+128GB 玄铁黑 骁龙855Plus UFS3.0 内置风扇 5000mA</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥899</span>
                        <span class="old">￥999</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </div>
            <div class="goods-item">
                <img src="//m.360buyimg.com/babel/jfs/t1/67822/22/9911/141808/5d7804a3E1c1796ce/a4ff0dd48086f3e4.jpg!q70.jpg"
                     alt="">
                <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥899</span>
                        <span class="old">￥999</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        data() {
            return {

            }
        },
        methods: {

        },
        created() {

        },

    }
</script>

<style scoped lang="scss">
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        padding: 7px;


        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow:0 0 5px #ccc;
            margin:4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content:space-between;
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

</style>
