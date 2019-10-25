<template>
    <div class="goods-desc-container">
        <comment :artid="id"></comment>
    </div>
</template>

<script>
    import comment from '../subComp/comment.vue';

    export default {
        name: "GoodsDesc",
        data(){
            return {
                id: this.$route.params.id,
            }
        },
        components:{
            comment
        }
    }
</script>

<style lang="scss">
</style>
