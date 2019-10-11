import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './App.vue';
import account from './main/account.vue';
import login from './main/login.vue';
import register from './main/register.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        { path:'/account',
            component: account,
            children:[
                { path: 'register', component: register},
                { path: 'login', component: login},
            ]
        },
    ]
});

new Vue({
    el: '#app',
    components:{
        app
    },
    // render: foo => foo(login)
    router,
});


