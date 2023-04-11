<template>
  <div>
    <app-header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <app-footer />
  </div>
</template>
<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  created() {
    this.$store.dispatch("getTradeResult");
  }
};
</script>
<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-out;
  opacity: 0;
}
</style>
