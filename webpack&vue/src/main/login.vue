<template>
    <div>
        <p>{{ msg }}</p>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                msg: '这是login组件'
            }
        },
        methods: {
            foo() {
                console.log("foo");
            }
        }
    }

</script>

<style scoped lang="scss">
    body {
        div {
            color: red;
            font-style: italic;
        }
    }
</style>
