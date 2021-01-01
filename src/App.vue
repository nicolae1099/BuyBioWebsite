<template>
  <AppHeader />
  <NavigationBar />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: { NavigationBar, AppHeader }
};
</script>

<style></style>
