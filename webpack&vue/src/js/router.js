import VueRouter from "vue-router";

import account from '../main/account.vue';
import login from '../main/login.vue';
import register from '../main/register.vue';

export default new VueRouter({
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
