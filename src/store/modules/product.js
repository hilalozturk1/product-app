import Vue from "vue";
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
  saveProduct({ commit }, payload) {
    //vue resource
    Vue.http
      .post(
        "https://product-operations-74152-default-rtdb.firebaseio.com/products.json",
        payload
      )
      .then(response => {
        payload.id = response.body.name;
        commit("updateProductList", payload);
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
