<template>
    <div>
        <mt-swipe>
            <mt-swipe-item v-for="item in carouselList" :key="item.id">
                <a :href="item.url"><img :src="item.img"/></a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';


    export default {
        name: "Home",
        data() {
            return {
                carouselList: [],

            }
        },
        methods: {
            getCarousel() {
                this.axios.get(this.api + '/getlunbo').then((response) => {
                    if (response.status === 200) {
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
            this.getCarousel();

        },
    }
</script>

<style scoped lang="scss">
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            &:nth-child(1) {
                background-color: blue;
            }
            &:nth-child(2) {
                background-color: greenyellow;
            }
            &:nth-child(3) {
                background-color: pink;
            }
        }

        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
