import Vue from 'vue';
// import Vue from '../node_modules/vue/dist/vue.js';
import login from './login.vue';


new Vue({
    el: '#app',
    components:{
        login
    },
    // render: foo => foo(login)
});


