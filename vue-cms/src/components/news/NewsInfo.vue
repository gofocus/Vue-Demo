<template>
    <div>
        <div class="newsInfo-container">
            <h1 class="title">{{ newsInfo.title }}</h1>
            <div class="subtitle">
                <span>发表时间：{{ newsInfo.add_time | dateFormatter }}</span>
                <span>浏览次数：{{ newsInfo.click }}</span>
            </div>
            <hr>
            <div class="newsInfo-content">
                <p v-html="newsInfo.content"></p>
            </div>

        </div>

    </div>

</template>

<script>
    import {Toast} from 'mint-ui';
    export default {
        name: "newsInfo",
        data(){
            return {
                id: this.$route.params.id,
                newsInfo: {},

            }
        },
        methods:{
            getNewsInfo(){
                this.axios.get(this.api + '/getnew/' + this.id).then(res=>{
                    if (res.data.status === 0) {
                        console.log(res);
                        this.newsInfo = res.data.message[0];
                    }else {
                        Toast('读取newsInfo失败');
                    }
                })
            }
        },
        created(){
            this.getNewsInfo();
        },
    }
</script>

<style scoped lang="scss">
    .newsInfo-container {

        padding:0 4px;

        .title {
            text-align: center;
            color: red;
            font-size: 16px;
            margin: 15px 0;
        }

        .subtitle {
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            color: #226aff;

        }

        .newsInfo-content {
            img {
                width: 100%;
            }
        }
    }


</style>
