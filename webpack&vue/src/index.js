import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './App.vue';
import router from './js/router.js'

Vue.use(VueRouter);

new Vue({
    el: '#app',
    components:{
        app
    },
    // render: foo => foo(login)
    router,
});


