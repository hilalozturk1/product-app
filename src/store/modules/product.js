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
