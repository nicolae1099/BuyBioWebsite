<template>
  <AppHeader />
  <NavigationBar />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <div>
    <LoginModal />
  </div>
  <Products />
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import firebase from "./utilities/firebase";
import Products from "./components/Products.vue";
export default {
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.commit("setIsLoggedIn", true);
        this.$store.commit("setLoginModal", false);
        this.$store.commit("setAuthUser", user);
      } else {
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setAuthUser", {});
      }
    });
  },
  components: { NavigationBar, AppHeader, LoginModal, Products }
};
</script>

<style></style>
