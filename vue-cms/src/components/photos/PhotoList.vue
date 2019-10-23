<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',(item.id === 0)? 'mui-active':'']" data-wid="tab-top-subpage-1.html"
                       v-for="item in imgCategory"
                       :key="item.id">
                        {{ item.title }}
                    </a>

                </div>
            </div>

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

        },
        created() {
            this.getImgCategory();
        },
        mounted() {
            //挂载(DOM渲染)好之后初始化顶端滚动条
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        }
    }
</script>

<style scoped>

</style>
