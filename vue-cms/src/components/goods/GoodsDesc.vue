<template>
    <div class="goods-desc-container">
        <div class="desc-title">
            <h1>{{ desc.title }}</h1>
        </div>
        <hr>
        <div class="desc-content">
            <div v-html="desc.content"></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GoodsDesc",
        data(){
            return {
                id: this.$route.params.id,
                desc: {},
            }
        },
        methods:{
            //获取图文详情
            getDesc(){
                this.axios.get(this.api + '/goods/getdesc/' + this.id)
                    .then(res => {
                        if (res.data.status === 0) {
                            this.desc = res.data.message[0];
                        }
                    })
            },

        },
        created(){
            this.getDesc();
        },
    }
</script>

<style lang="scss">
    .goods-desc-container{
        padding: 0 4px ;

        .desc-title {
            h1 {
                font-size: 14px;
                text-align:center;
                color: deepskyblue;
                margin: 11px 0 ;
            }
        }

        .desc-content{
            padding: 4px 4px;

            img {
                width: 100%;
            }
        }

    }
</style>
