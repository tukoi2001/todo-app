<template>
  <div class="app-box">
    <div class="app-content">
      <the-header />
      <nav-button/>
      <transition name="slide-fade">
          <router-view />
      </transition>
      <the-footer />
    </div>
  </div>
</template>

<script>
import NavButton from './components/common/NavButton.vue';
import TheFooter from "./components/common/TheFooter.vue";
import TheHeader from "./components/common/TheHeader.vue";
export default {
  components: { TheHeader, TheFooter, NavButton },
  name: "App",
};
</script>

<style scoped>
.app-box {
  background-color: #ccc;
  height: 100vh;
  width: 100%;
}
.app-content {
  height: 100%;
  width: 420px;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
@media (max-width:420px) {
  .app-content {
    width: 100%;
  }
}
</style>
