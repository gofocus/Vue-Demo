<template>
    <div>
        <div class="photoInfoContainer">
            <div class="photo-header">
                <h4 class="photo-title">{{ photoInfo.title }}</h4>
                <div class="photo-subtitle">
                    <span class="photo-date">发表时间：{{ photoInfo.add_time | dateFormatter }}</span>
                    <span class="photo-click">点击：{{ photoInfo.click }} 次</span>
                </div>
            </div>
            <hr>
            <div class="photo-info">
                <div class="photo-humimages">
                    <img :src="item.src" v-for="item in humimages" :key="item.src">
                </div>
                <div class="photo-content">
                    <p v-html="photoInfo.content"></p>
                </div>
            </div>
        </div>

        <comment :artid="id"></comment>

    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import comment from '../subComp/comment.vue';

    export default {
        name: "PhotoInfo",
        data() {
            return {
                id: this.$route.params.id,
                photoInfo: {},
                humimages: [],
            };
        },
        methods: {
            getPhotoInfo() {
                this.axios.get(this.api + '/getimageInfo/' + this.id)
                    .then(res => {
                        if (res.data.status === 0) {
                            this.photoInfo = res.data.message[0];
                        }
                        else {
                            Toast('获取图片信息失败');
                        }
                    })
            },
            getHumImages(){
                this.axios.get(this.api + '/getthumimages/' + this.id)
                    .then(res => {
                        if (res.data.status === 0) {
                            this.humimages = res.data.message;
                        }
                        else {
                            Toast('获取缩略图失败');
                        }
                    })
            }
        },
        created() {
            this.getPhotoInfo();
            this.getHumImages();
        },
        mounted() {


        },
        components:{
            comment
        }
    }
</script>

<style scoped lang="scss">
    .photoInfoContainer {
        padding: 0 4px;
        .photo-header{
            .photo-title {
                text-align: center;
                font-size: 15px;
                color: deepskyblue;
                padding: 7px;
            }

            .photo-subtitle {
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                color: grey;
            }

        }

        .photo-info {
            .photo-humimages {
                img {
                    width: 30%;
                    height: 30%;
                    margin: 4px;
                    box-shadow:0 0 5px;
                }
            }

            .photo-content {
                p {
                    line-height: 25px;
                    color: black;
                    padding: 4px;
                }
            }
        }


    }
</style>
