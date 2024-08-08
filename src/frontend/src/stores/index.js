import Vue from 'vue';
import Vuex from 'vuex';
import mainMenu from './modules/linkList/mainMenu';
import moduleMenu from './modules/linkList/moduleMenu';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        linkList: {
            namespaced: true,
            modules: {
                mainMenu,
                moduleMenu
            }
        }
    }
});
