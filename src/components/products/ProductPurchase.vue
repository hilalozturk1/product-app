<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product Operations</h3>
          <hr />
          <div class="form-group">
            <label>Product Name</label>
            <input
              v-model="product.title"
              type="text"
              class="form-control"
              placeholder="Enter product name.."
            />
          </div>
          <div class="form-group">
            <label>Count</label>
            <input
              v-model="product.count"
              type="number"
              class="form-control"
              placeholder="Enter product count.."
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              v-model="product.price"
              type="number"
              class="form-control"
              placeholder="Enter product price.."
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              v-model="product.description"
              cols="30"
              rows="5"
              placeholder="Enter product description..."
              class="form-control"
            ></textarea>
          </div>
          <hr />
          <button
            class="btn btn-primary"
            @click="saveProduct"
            :disabled="disabled"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, watch } from "vue";
export default {
  data() {
    return {
      product: {
        title: "",
        count: null,
        price: null,
        description: ""
      }
    };
  },
  methods: {
    saveProduct() {
      this.$store.dispatch("saveProduct", this.product);
    }
  },
  computed: {
    disabled() {
      let product = this.product;
      return product.title &&
        product.count &&
        product.description &&
        product.price
        ? false
        : true;
    }
  }
};
</script>
