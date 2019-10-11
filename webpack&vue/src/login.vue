<template>
    <div>
        <p>{{ msg }}</p>
    </div>

</template>

<script>
    export default {
        data(){
            return {
                msg:'这是login组件'
            }
        },
        methods:{
            foo(){
                console.log("foo");
            }
        }
    }

</script>

<style>


</style>
