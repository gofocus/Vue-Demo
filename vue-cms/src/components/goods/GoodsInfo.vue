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
                <div class="mui-card-header">页眉</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                    </div>
                </div>
                <div class="mui-card-footer">页脚</div>
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

    export default {
        name: "GoodsInfo",
        data() {
            return {
                id: this.$route.params.id,
                goodsInfo: {},
                carouselList: [],

            }
        },
        methods: {
            getGoodsInfo() {
                this.axios.get(this.api + '/goods/getdesc/' + this.id)
                    .then(res => {
                        if (res.data.status === 0) {
                            this.goodsInfo = res.data.message[0];
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
            this.getGoodsInfo();
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

        .mint-swipe {
            height: 200px;
            text-align: center;

            a {
                text-align: center;
            }

            img {
                height: 100%;
            }
        }
    }
</style>
