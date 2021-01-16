<template>
  <div class="navbar">
    <AppHeader />
  </div>

  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <div>
    <LoginModal />
  </div>
  <div class="content">
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
  </div>

  <div>
    <Footer />
  </div>
</template>

<script>
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
  components: { AppHeader, LoginModal, TopFructe, Footer }
};
</script>

<style>
.navbar {
  position: sticky;
  top: 0;
  height: 70px;
  line-height: 50px;
  font-size: 30px;
  width: 100%;
  padding: 0 20px;
  z-index: 9999;
}

.content {
  margin-top: 70px;
  padding: 12px;
  height: calc(100vh - 70px);
  box-sizing: border-box;
}
</style>
