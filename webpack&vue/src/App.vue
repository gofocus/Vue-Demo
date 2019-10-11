<template>
    <div>
        <p>App</p>
        <router-link to="/">index</router-link>
        <router-link to="/account">account</router-link>
        <router-view></router-view>
        <mt-button type="primary" size="large" @click="show">primary</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "App",
        methods: {
            show() {
                Toast({
                    iconClass:'oi oi-check',
                    message: '提示信息',
                    position: 'top',
                    duration: 2000,
                    className: 'myToast',
                })
            }
        }
    }
</script>

<style scoped>

</style>
