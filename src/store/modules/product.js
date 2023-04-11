import Vue from "vue";
import { router } from "../../router";

const state = {
  products: []
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    return key =>
      state.products.filter(element => {
        return element.key === key;
      });
  }
};

const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  }
};

const actions = {
  //async
  initApp({ commit }) {
    Vue.http
      .get(
        "https://product-operations-74152-default-rtdb.firebaseio.com/products.json"
      )
      .then(response => {
        let data = response.body;
        for (let key in data) {
          data[key].key = key;
          commit("updateProductList", data[key]);
        }
      });
  },
  saveProduct({ dispatch, commit }, payload) {
    //vue resource
    Vue.http
      .post(
        "https://product-operations-74152-default-rtdb.firebaseio.com/products.json",
        payload
      )
      .then(response => {
        payload.key = response.body.name;

        commit("updateProductList", payload);

        let tradeResult = {
          purchase: payload.price,
          sale: 0,
          count: payload.count
        };
        console.log('tradeResult', tradeResult)
        dispatch("setTradeResult", tradeResult);
        router.replace("/");

      });
  },
  sellProduct({ commit, state, dispatch }, payload) {
   
    let product = state.products.filter(element => {
      return element.key == payload.key;
    });
    console.log("product", product)
    if (product) {
      let totalCount = product[0].count - payload.count;

      Vue.http
        .patch(
          "https://product-operations-74152-default-rtdb.firebaseio.com/products/" +
            payload.key +
            ".json",
          { count: totalCount }
        )
        .then(response => {
          product[0].count = totalCount;
          let tradeResult = {
            purchase: 0,
            sale: product[0].price,
            count: payload.count
          };
          console.log('tradeResult', tradeResult)
          dispatch("setTradeResult", tradeResult);
          router.replace("/");
        });
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
