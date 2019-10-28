<template>
    <div class="app-container">
        <!--header-->
        <mt-header fixed title="黑马Vue">
            <a slot="left" @click="goBack">
                <mt-button icon="back">返回</mt-button>
            </a>
        </mt-header>

        <!--router-view-->
        <div id="content-area">
            <transition>
                <router-view></router-view>
            </transition>
        </div>

        <!--tab bar-->
        <nav class="mui-bar mui-bar-tab">
            <!--编程式路由，解决tab bar在手机端无法切换的问题-->
            <a @click="goTo('/home')" class="mui-tab-item mui-active">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a @click="goTo('/member')" class="mui-tab-item">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </a>
            <a @click="goTo('/cart')" class="mui-tab-item">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="cart_badge">{{ $store.getters.getTotalCount
                    }}</span></span>
                <span class="mui-tab-label">购物车</span>
            </a>
            <a @click="goTo('/search')" class="mui-tab-item">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </a>
        </nav>

    </div>

</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            goTo(path) {
                this.$router.push(path);
            },
            goBack() {
                this.$router.go(-1);
            }
        },
    }
</script>

<style scoped lang="scss">
    .app-container {

        #content-area {
            padding-top: 40px;
            padding-bottom: 50px;
            overflow-x: hidden;

            .v-enter { // v-enter 、v-leave-to 表示的是状态
                opacity: 0;
                transform: translateX(100%); //表示在进入之前，页面在手机屏幕右边100%的地方
            }

            .v-leave-to {
                opacity: 0;
                transform: translateX(-100%); //表示在离开之后，页面在手机屏幕左边100%的地方
                position: absolute;
            }

            .v-enter-active, .v-leave-active {
                transition: all .5s ease;
            }

        }
    }


</style>
