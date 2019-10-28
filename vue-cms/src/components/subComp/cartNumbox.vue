<template>
    <div>

        <div class="mui-numbox" data-numbox-min='1'>
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number" :value="count"
                   @change="countChanged(id)" ref="numBox"/>
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>


    </div>
</template>

<script>
    export default {
        name: "cartNumbox",
        props: ['id','count'],
        methods:{

            //用change事件监听numBox的数值变化，然后通过ref得到numBox的数值，再通过store.commit修改购物车的商品的数量
            countChanged(id) {
                var count = parseInt(this.$refs.numBox.value);
                this.$store.commit('changeCount', {id: id, count: count});
            }
        },


    }
</script>

<style scoped>

</style>
