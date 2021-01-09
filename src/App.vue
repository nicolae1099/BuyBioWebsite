<template>
  <AppHeader />
  <NavigationBar />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <div>
    <LoginModal />
  </div>
  <div>
    <img src="./assets/buyBioSubHeader.jpeg" class="w-full" />
  </div>
  <div>
    <TopFructe />
  </div>
  <div>
    <TopFructe />
  </div>
  <div>
    <TopFructe />
  </div>
  <div>
    <TopFructe />
  </div>
  <div>
    <TopFructe />
  </div>
  <div>
    <Footer />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import firebase from "./utilities/firebase";
import TopFructe from "./pages/TopFructe";
import Footer from "./components/Footer";
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
  components: { NavigationBar, AppHeader, LoginModal, TopFructe, Footer }
};
</script>

<style></style>
