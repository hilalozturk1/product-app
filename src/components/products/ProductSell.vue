<template
  ><div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product Quit</h3>
          <hr />
          <div class="form-group">
            <label>Product Name</label>
            <select
              class="form-control"
              v-model="selectedProduct"
              @change="productSelected()"
            >
              <option selected disabled>Please select an option...</option>
              <option
                :value="product.key"
                v-for="product in getProducts"
                :disabled="product.count == 0"
                >{{ product.title }}</option
              >
            </select>
          </div>
          <transition name="fade" mode="out-in">
            <div class="card mb-2 border border-danger" v-if="product !== null">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge badge-info"
                        >Stock : {{ product.count }}</span
                      >
                      <span class="badge badge-primary"
                        >Price : {{ product.price }}</span
                      >
                    </div>
                    <p class="border border-warning p-2 text-secondary">
                      {{ product.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div class="form-group">
            <label>Count</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter product count"
              v-model="product_count"
            />
          </div>
          <hr />
          <button class="btn btn-primary" @click="save">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedProduct: "",
      product: null,
      product_count: null
    };
  },
  computed: mapGetters(["getProducts"]),
  methods: {
    productSelected() {
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    },
    save() {
      let product = {
        key: this.selectedProduct,
        count: this.product_count
      };
      this.$store.dispatch("sellProduct", product);
    }
  }
};
</script>
<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>
