<template>
  <div>
    <app-header />
    <router-view/>
    <app-footer />
  </div>
</template>
<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
};
</script>
<style></style>
