<template
  ><div class="container">
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
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
          <button class="btn btn-primary" @click="save" :disabled="disabled">
            Save
          </button>
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
      product_count: null,
      saveButtonClicked: false
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),
    isLoading() {
      if (this.saveClicked) {
        return {
          display: "block"
        };
      } else {
        return {
          display: "none"
        };
      }
    },
    disabled() {
      return (this.product_count > 0) & (this.selectedProduct !== null)
        ? false
        : true;
    }
  },
  methods: {
    productSelected() {
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    },
    save() {
      this.saveButtonClicked = true;
      let product = {
        key: this.selectedProduct,
        count: this.product_count
      };
      this.$store.dispatch("sellProduct", product);
    }
  },
  beforeRouteLeave(to, from, next) {
    let product = this.product;
    if (
      (this.selectedProduct !== null || this.product_count > 0) &&
      !this.saveButtonClicked
    ) {
      if (
        confirm("There are any unsaved changes. would you like to quit anyway?")
      ) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  }
};
</script>
<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>
