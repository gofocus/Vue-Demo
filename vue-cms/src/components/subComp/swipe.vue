<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in carouselList" :key="item.src">
            <a :href="item.src"><img :src="item.src"></a>
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {

        name: "swipe",
        data() {
            return {
                carouselList: [],
            }
        },
        props: ['url'],
        methods: {
            getCarousel(url) {
                this.axios.get(this.api + url).then((response) => {
                    if (response.data.status === 0 ) {
                        this.carouselList = response.data.message;
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
            this.getCarousel(this.url);
        },
    }
</script>

<style scoped lang="scss">
    .mint-swipe {
        height: 200px;

/*        .mint-swipe-item {
            &:nth-child(1) {
                background-color: blue;
            }
            &:nth-child(2) {
                background-color: greenyellow;
            }
            &:nth-child(3) {
                background-color: pink;
            }
        }*/

        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
