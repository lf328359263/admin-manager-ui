import { appRouter } from '../../router/router';
// import Util from '@/libs/util';
// import Cookies from 'js-cookie';
// import Vue from 'vue';

const app = {
    state: {
        cachePage: [],
        lang: '',
        isFullScreen: false,
        openedSubmenuArr: [], // 要展开的菜单数组
        menuTheme: 'dark', // 主题
        themeColor: '',
        pageOpenedList: [{
            title: '首页',
            path: '',
            name: 'home_index'
        }],
        currentPageName: '',
        currentPath: [
            {
                title: '首页',
                path: '',
                name: 'home_index'
            }
        ], // 面包屑数组
        menuList: [],
        routers: [
            // otherRouter,
            ...appRouter
        ],
        // tagsList: [...otherRouter.children],
        messageCount: 0,
        dontCache: ['text-editor', 'artical-publish'] // 在这里定义你不想要缓存的页面的name属性值(参见路由配置router.js)
    },
    mutations: {
        // setTagsList (state, list) {
        //     state.tagsList.push(...list);
        // },
        updateMenuList (state) {
            // let menuList = [];
            state.menuList = appRouter
        }
    }
};

export default app;
