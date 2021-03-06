import VueRouter from "vue-router";
import home from '../components/tabbar/Home.vue'
import member from '../components/tabbar/Member.vue'
import cart from '../components/tabbar/Cart.vue'
import search from '../components/tabbar/Search.vue'
import NewsList from '../components/news/NewsList.vue';
import NewsInfo from '../components/news/NewsInfo.vue';
import PhotoList from '../components/photos/PhotoList.vue';
import PhotoInfo from '../components/photos/PhotoInfo.vue';
import GoodsList from '../components/goods/GoodsList.vue';
import GoodsInfo from '../components/goods/GoodsInfo.vue';
import GoodsDesc from '../components/goods/GoodsDesc.vue';
import GoodsComments from '../components/goods/GoodsComments.vue';

export default new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: home},
        {path: '/member', component: member},
        {path: '/cart', component: cart},
        {path: '/search', component: search},
        {path: '/home/newsList', component: NewsList},
        {path: '/home/newsInfo/:id', component: NewsInfo},
        {path: '/home/photoList', component: PhotoList},
        {path: '/home/photoInfo/:id', component: PhotoInfo},
        {path: '/home/goodsList', component: GoodsList},
        {path: '/home/goodsInfo/:id', component: GoodsInfo},
        {path: '/home/goodsDesc/:id', component: GoodsDesc, name: 'goodsDesc'},
        {path: '/home/goodsComments/:id', component: GoodsComments, name: 'goodsComments'},
    ],
    linkActiveClass: 'mui-active'
});
