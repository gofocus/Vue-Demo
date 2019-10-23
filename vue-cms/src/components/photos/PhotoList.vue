<template>
    <div>
        <!--顶部滚动条-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',(item.id === 0)? 'mui-active':'']" data-wid="tab-top-subpage-1.html"
                       v-for="item in imgCategory"
                       :key="item.id"
                       @click="getImg(item.id)"
                    >
                        {{ item.title }}
                    </a>

                </div>
            </div>
        </div>

        <!--图片列表-->
        <div class="imgContainer">
            <ul class="img-list">
                <li v-for="item in imgList" :ke="item.id">
                    <img v-lazy="item.img_url">
                    <div class="info">
                        <div class="info-title">{{ item.title }}</div>
                        <div class="info-body">{{ item.zhaiyao }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    // 支持顶部滑动条
    import mui from '../../lib/mui/js/mui.js';
    import {Toast} from 'mint-ui';

    export default {
        name: "PhotoList",
        data() {
            return {
                imgCategory: [{title: "全部", id: 0}],
                imgList: [],
                cateId: 0,

            };
        },
        methods: {
            // 获取图片分类
            getImgCategory() {
                this.axios.get(this.api + '/getimgcategory')
                    .then(res => {
                        if (res.data.status === 0) {
                            this.imgCategory = this.imgCategory.concat(res.data.message);
                        }
                        else {
                            Toast('获取图片分类失败');
                        }
                    })
            },
            // 获取图片
            getImg(cateId) {
                this.axios.get(this.api + '/getimages/' + cateId)
                    .then(res => {
                        if (res.data.status === 0) {
                            this.imgList = res.data.message;
                        }
                    })
            }

        },
        created() {
            this.getImgCategory();
            this.getImg(0);
        },
        mounted() {
            //挂载(DOM渲染)好之后初始化顶端滚动条
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        }
    }
</script>

<style scoped lang="scss">

    .imgContainer {
        .img-list {
            list-style: none;
            margin: 0;
            padding: 10px;

            li {
                background-color: #ccc;
                text-align: center;
                margin-bottom: 10px;
                box-shadow: 0 0 8px #999;
                position:relative;

                img {
                    width: 100%;
                    vertical-align: middle;
                }
                img[lazy=loading] {
                    width: 40px;
                    height: 300px;
                    margin: auto;
                }

                .info {
                    color: white;
                    text-align: left;
                    position:absolute;
                    bottom:0;
                    background-color: rgba(0,0,0,0.4);
                    max-height: 80px;

                    .info-title {
                        font-size: 14px;
                    }

                    .info-body {
                        font-size: 12px;
                    }
                }
            }

        }
    }

</style>
