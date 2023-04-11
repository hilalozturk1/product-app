import Vue from "vue";
import { router } from "../../router";

const state = {
  products: []
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {}
};

const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  }
};

const actions = {
  //async
  initApp({ commit }) {},
  saveProduct({ dispatch, commit }, payload) {
    //vue resource
    Vue.http
      .post(
        "https://product-operations-74152-default-rtdb.firebaseio.com/products.json",
        payload
      )
      .then(response => {
        payload.id = response.body.name;

        commit("updateProductList", payload);

        let tradeResult = {
          purchase: payload.price,
          sale: 0,
          count: payload.count
        };

        dispatch("setTradeResult", tradeResult);
        router.replace("/");
        console.log(response);
      });
  },
  sellProduct({ commit }, payload) {
    //vue resource
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
