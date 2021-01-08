<template>
  <div class="m-auto w-full flex justify-between">
    <div>
      <img
        src="../assets/buyBioLogo.png"
        class="rounded w-20 mx-10"
        @click="goHome"
      />
    </div>
    <div>
      <section class="text-2xl">Suport</section>
      <section>0727907994</section>
      <section>buybio.ro@gmail.com</section>
    </div>
    <div class="flex">
      <Button
        label="Adaugă un produs nou"
        class="mx-1"
        @click="adaugaProdus"
      ></Button>
      <Button label="Inregistreaza producator" class="mx-1"></Button>
      <Button label="Inregistreaza cumparator" class="mx-1"></Button>
      <Button
        v-if="isLoggedIn"
        class="mx-2"
        @click="logout"
        label="Logout"
      ></Button>
      <Button
        v-else
        label="Autentificare"
        class="mx-1"
        @click="openLogin"
      ></Button>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      //.then((res) => {})
      //.catch((e) => {});
    },

    openLogin() {
      this.$store.commit("setLoginModal", true);
    },

    adaugaProdus() {
      this.$router.push("/adaugaProdus");
      /*firebase.firestore().collection("produse").add({
        nume: "pere",
        numeProducator: "Ionica",
        pret: 5,
      });
      */
    },

    goHome() {
      this.$router.push("./");
    }
  }
};
</script>

<style></style>
