import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import user from './modules/user';
import Cookies from "js-cookie";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        logout (state) {
            Cookies.remove('user');
            Cookies.remove('password');
        }
    },
    actions: {

    },
    modules: {
        app,
        user
    }
});

export default store;
