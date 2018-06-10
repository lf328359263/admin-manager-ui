const loginRouter = {
    path: '/login',
    meta: {
        title: '登录'
    },
    name: 'login',
    component: (resolve) => require(['../views/login.vue'], resolve)
};

const homeRouter = {
    path: '/',
    name: 'home',
    redirect: '/server/services'
};

export const appRouter = [
    {
        path: '/server',
        icon: 'cloud',
        name: 'server',
        title: '服务中心',
        component: (resolve) => require(['../views/index.vue'], resolve),
        children: [
            {
                path: 'services',
                title: '服务列表',
                name: 'services',
                icon: 'grid',
                component: (resolve) => require(['../views/web/services.vue'], resolve)
            },
            {
                path: 'hello',
                title: '测试',
                name: 'hello',
                icon: 'chatbox',
                component: (resolve) => require(['../views/web/hello.vue'], resolve)
            }
        ]
    }
];

export const routers = [
    homeRouter,
    loginRouter,
    ...appRouter
];