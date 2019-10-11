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
        data() {
            return {
                toastInstance: null,

            }
        },
        methods: {
            getList() {
                this.show();
                setTimeout( ()=>{
                    this.toastInstance.close();
                }, 3000)
            },
            show() {
                this.toastInstance = Toast({
                    iconClass: 'oi oi-check',
                    message: '提示信息',
                    position: 'top',
                    duration: -1,
                    className: 'myToast',   //
                })
            }
        },
        created() {
            this.getList();
        },
    }
</script>

<style scoped>

</style>
