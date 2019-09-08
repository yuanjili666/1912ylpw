import Vue from "vue"
import Vuex from "vuex"
import city from "./city"   //模块，多人合作
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        city
    }
})