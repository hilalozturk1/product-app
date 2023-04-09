import Vue from "vue";
import Vuex from "vuex";
import product from "./modules/product";
import * as getters from "./modules/getters";
import * as mutations from "./modules/mutations";
import * as actions from "./modules/actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    purchase: 0.0,
    sale: 0.0,
    balance: 0.0
  },
  getters,
  mutations,
  actions,  
  modules: {
    product
  }
});
