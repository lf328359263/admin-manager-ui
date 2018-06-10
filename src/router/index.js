import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import {appRouter, routers} from './router'
import Cookies from "js-cookie";
import Util from "../libs/util";

Vue.use(VueRouter);

const RouterConfig = {
    routes: routers
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
    if (Cookies.get('locking') === '1' && to.name !== 'locking') {
        next({
            replace: true,
            name: 'locking'
        });
    } else if (Cookies.get('locking') === '0' && to.name === 'locking') {
        next(false);
    } else {
        if (!Cookies.get('user') && to.name !== 'login') {
            next({
                name: 'login'
            });
        } else if (Cookies.get('user') && to.name === 'login') {
            Util.title();
            next({
                name: 'home'
            });
        } else {
            next()
        }
    }
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});
