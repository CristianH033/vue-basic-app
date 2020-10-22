<template>
  <div class="grid-container">
    <app-bar />
    <side-bar-menu />
    <router-view class="app-content" />
    <app-footer />
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import SideBarMenu from "./components/SideBarMenu.vue";
import AppFooter from "./components/AppFooter.vue";
// import AppBar from "./components/AppBar.vue";
export default {
  components: { AppBar, SideBarMenu, AppFooter }
};
</script>

<style lang="scss" scoped>
.grid-container {
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
  display: grid;
  grid-template-columns: minmax(200px, 300px) minmax(500px, 1fr);
  grid-template-rows: 60px 1fr 40px;
  gap: 10px 10px;
}
.app-content {
  overflow-y: auto;
}
</style>
