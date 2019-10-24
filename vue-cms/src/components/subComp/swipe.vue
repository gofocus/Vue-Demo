<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in carouselList" :key="item.src">
            <a :href="item.url"><img :src="item.src" :class="{full:isFull}"></a>
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {

        name: "swipe",
        data() {
            return {}
        },
        props: ['carouselList', 'isFull'],
        methods: {},
        created() {
        },
    }
</script>

<style scoped lang="scss">
    .mint-swipe {
        height: 200px;

        img {
            height: 100%;
        }
    }

    .full {
        width: 100%;
    }
</style>
