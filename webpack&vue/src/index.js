import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './App.vue';
import router from './js/router.js'
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'


Vue.use(VueRouter);
Vue.use(MintUi);

new Vue({
    el: '#app',
    components:{
        app
    },
    // render会整个替换el属性对应的标签
    // render: foo => foo(login)
    router,
});


