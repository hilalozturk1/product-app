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
  sellProduct({ commit, state, dispatch }, payload) {
    console.log("payload", payload);
    let product = state.products.filter(element => {
      console.log("element", element);
      return element.key == payload.key;
    });

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
