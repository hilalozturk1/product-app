import Vue from "vue";
import ProductList from "./components/products/ProductList.vue";
import ProductPurchase from "./components/products/ProductPurchase.vue";
import ProductSell from "./components/products/ProductSell.vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: ProductList },
  { path: "/product-operations", component: ProductPurchase },
  { path: "/product-quit", component: ProductSell },
  { path: "*", redirect: "/" },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
