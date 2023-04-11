<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Product List</h3>
          <hr />
          <table class="table table-hover table-striped table-bordered">
            <thead>
              <th>id</th>
              <th>Product Name</th>
              <th>Count</th>
              <th>Price</th>
              <th>Description</th>
            </thead>
            <tbody>
              <tr v-for="product in getProducts" :key="product.id">
                <td class="align-middle text-center">
                  <span class="badge badge-info"> {{ product.id }} </span>
                </td>
                <td class="align-middle text-center">{{ product.title }}</td>
                <td class="align-middle text-center">{{ product.count }}</td>
                <td style="width: 120px;">{{ product.price }}</td>
                <td class="align-middle">{{ product.description }}</td>
              </tr>
            </tbody>
          </table>
          <div class="alert alert-warning" v-if="!getProducts">
            <strong>There is no product so far</strong>
            <br />
            <small
              >You can go to the Product Operations Menu to add any
              registration</small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getProducts"])
  }
};
</script>
<style></style>
