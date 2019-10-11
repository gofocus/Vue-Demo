import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './js/router.js';
import app from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css';

Vue.use(VueRouter);
Vue.use(MintUI);


new Vue({
    el: '#app',
    components:{
        app
    },
    router,
});


