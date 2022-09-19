import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
    },
    state: {
        serviceData: null,
    },
    mutations: {
        saveServiceData(state, data) {
            state.serviceData = data;
        },
    },
    actions: {
        saveServiceData(context, data) {
            context.commit("saveServiceData", data)
        }
    },
    getters: {
        serviceData: state => state.serviceData,
    },
    plugins: [createPersistedState()],
});

export default store;
