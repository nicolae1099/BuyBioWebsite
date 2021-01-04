<template>
  <div>
    <Card style="width: 25em">
      <template #header>
        <img
          alt="user header"
          src="../assets/mar.jpg"
          class="object-contain h-48 w-full"
        />
      </template>
      <template #title> {{ this.numeProdus }} </template>
      <template subtitle> Din gradina lui Ion </template>
      <template #content>
        <div class="flex flex-col">
          <p>Pret: {{ this.pret }}</p>
          <p>Cantitate: {{ this.cantitate }}</p>
          <p>Rating: 4.5</p>
        </div>
      </template>
      <template #footer>
        <Button icon="pi pi-check" label="Save" />
        <Button
          icon="pi pi-times"
          label="Cancel"
          class="p-button-secondary"
          style="margin-left: 0.5em"
        />
      </template>
    </Card>
  </div>
</template>

<script>
//import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      numeProdus: null,
      pret: null,
      cantitate: null
    };
  },
  created() {
    /*firebase
      .firestore()
      .collection("Fructe")
      .get()
      .then((querySnapshot) => {
        //console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          this.numeProdus = doc.data().numeProdus;
          this.pret = doc.data().pret;
          this.cantitate = doc.data().cantitate;
          console.log(this.numeProdus);
          console.log(this.pret);
          console.log(this.cantitate);
        });
      });
      */
  }
};
</script>

<style></style>
