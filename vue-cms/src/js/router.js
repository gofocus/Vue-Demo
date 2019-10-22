import VueRouter from "vue-router";
import home from '../components/tabbar/Home.vue'
import member from '../components/tabbar/Member.vue'
import cart from '../components/tabbar/Cart.vue'
import search from '../components/tabbar/Search.vue'
import NewsList from '../components/news/NewsList.vue';
import NewsInfo from '../components/news/NewsInfo.vue';


export default new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: home},
        {path: '/member', component: member},
        {path: '/cart', component: cart},
        {path: '/search', component: search},
        {path: '/home/newsList', component: NewsList},
        {path: '/home/newsInfo/:id', component: NewsInfo},
    ],
    linkActiveClass: 'mui-active'
});
