import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './js/router.js';
import app from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
import './lib/mui/fonts/mui-icons-extra.ttf';
import './lib/mui/js/webviewGroup.js';
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment';

import store from './js/store.js';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(MintUI);
Vue.prototype.api = 'http://www.liulongbin.top:3005/api';


// 全局时间过滤器
Vue.filter('dateFormatter', function (date, pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(date).format(pattern);
});

new Vue({
    el: '#app',
    components:{
        app
    },
    router,
    store
});


