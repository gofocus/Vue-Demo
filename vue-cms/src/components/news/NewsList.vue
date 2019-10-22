<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="news in newsList" :key="news.id">
                <router-link :to="'/home/newsInfo/'+ news.id ">
                    <img class="mui-media-object mui-pull-left" :src="news.img_url">
                    <div class="mui-media-body">
                        <h1>{{ news.title }}</h1>
                        <p class="mui-ellipsis">
                            <span>{{ news.add_time | dateFormatter("YYYY-MM-DD HH:mm") }}</span>
                            <span>{{ news.click }}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from "mint-ui"

    export default {
        name: "NewsList",
        data() {
            return {
                newsList: [],

            }
        },
        methods:{
            getNewsList(){
                this.axios.get(this.api + '/getnewslist').then(res => {
                    console.log(res.data);
                    if (res.data.status === 0) {
                        this.newsList = res.data.message;
                    }
                    else {
                        Toast('获取新闻列表失败');
                    }
                })
            }
        },
        created() {
            this.getNewsList();

        }
    }
</script>

<style scoped lang="scss">
    .mui-table-view {
        li {
            h1 {
                font-size: 12px;
            }

            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;

            }
        }
    }


</style>
