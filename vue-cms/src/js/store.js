import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

//刷新页面时会将本地的购物车数据交给vuex
var cart = JSON.parse(localStorage.getItem("cart") || '[]');

export default new Vuex.Store({     //注意Store的s要大写
    state: {
        cart: cart,
    },
    mutations: {
        //加入购物车
        increment(state, goodsInfo) {
            var existed = false;
            state.cart.some(element => {
                if (element.id === goodsInfo.id) {
                    existed = true;
                    element.count += parseInt(goodsInfo.count);
                    return true;
                }
            })

            if (!existed) {
                state.cart.push(goodsInfo);
            }

            //刷新页面vuex中的数据会消失，暂时用localStorage将购物车数据存储到本地，实际应存储到后台
            localStorage.setItem("cart", JSON.stringify(state.cart));

        },

        // 购物车中直接修改商品的数量
        changeCount(state, obj) {
            state.cart.some(item=>{
                if (item.id === obj.id) {
                    item.count = obj.count;
                    return true;
                }
            })

            localStorage.setItem('cart', JSON.stringify(cart));
        },

        removeCartItem(state, id) {
            state.cart.some((item, index) => {
                if (item.id === id) {
                    cart.splice(index, 1);
                }
            })

            localStorage.setItem('cart', JSON.stringify(cart));
        }

    },
    getters: {
        //getter类似computed，会将数据缓存起来，只有依赖的数据发生了变化，才会重新计算
        //❤对象数组内的对象发生了变化，也会触发getter重新计算数据
        getTotalCount: (state) => {
            var total = 0;
            state.cart.forEach(item => {
                if (item.selected) {
                    total += item.count;
                }
            })
            return total;
        }
    }
})
