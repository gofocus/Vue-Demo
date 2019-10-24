<template>
    <div class="home">
        <!--轮播图-->
        <swipe :carouselList="carouselList"></swipe>

        <!--六宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/newsList">
                    <img src="../../images/grid/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/photoList">
                    <img src="../../images/grid/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/goodsList">
                    <img src="../../images/grid/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/grid/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/grid/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/grid/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div>
            </a></li>
        </ul>


    </div>
</template>

<script>
    import swipe from '../subComp/swipe.vue';

    export default {
        name: "Home",
        data() {
            return {
                carouselList: [],
            }
        },
        methods: {
            getCarouselList() {
                this.axios.get(this.api + '/getlunbo').then((response) => {
                    if (response.data.status === 0 ) {
                        this.carouselList = response.data.message;
                        this.carouselList.forEach(item => {
                            item.src = item.img;
                        })
                    }
                    else {
                        Toast({
                            message: '获取轮播图失败'
                        })
                    }
                })
            },
        },
        created() {
            this.getCarouselList();
        },
        components:{
            swipe
        }
    }
</script>

<style scoped lang="scss">
    .home {


        .mui-grid-view.mui-grid-9 {
            background-color: white;

            .mui-table-view-cell {
                border: 0;

                img {
                    height: 60px;
                    width: 60px;
                }

                .mui-media-body {
                    font-size: 13px;
                }
            }
        }

    }
</style>
