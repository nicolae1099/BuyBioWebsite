<template>
  <div class="card">
    <Carousel
      :value="products"
      :numVisible="4"
      :numScroll="4"
      :responsiveOptions="responsiveOptions"
      :circular="true"
      :autoplayInterval="5000"
    >
      <template #header>
        <div class="flex flex-wrap">
          <h1 class="text-2xl mx-10">Cele mai apreciate fructe</h1>
          <Button label="Vezi oferta completa" @click="veziOfertaCompleta" />
        </div>
      </template>
      <template #item="slotProps">
        <div class="product-item">
          <div class="product-item-content">
            <div class="p-mb-3">
              <img
                :src="slotProps.data.imagineLink"
                :alt="slotProps.data.numeProdus"
                class="product-image w-20"
              />
            </div>
            <div>
              <h4 class="p-mb-1">{{ slotProps.data.numeProdus }}</h4>
              <h6 class="p-mt-0 p-mb-3">${{ slotProps.data.pret }}</h6>
              <span
                :class="'product-badge status-' + slotProps.data.statusStock"
                >{{ slotProps.data.statusStock }}</span
              >
              <div class="car-buttons p-mt-5">
                <Button
                  icon="pi pi-search"
                  class="p-button p-button-rounded p-mr-2"
                />
                <Button
                  icon="pi pi-star"
                  class="p-button-success p-button-rounded p-mr-2"
                />
                <Button
                  icon="pi pi-cog"
                  class="p-button-help p-button-rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      products: [],
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 3
        },
        {
          breakpoint: "600px",
          numVisible: 2,
          numScroll: 2
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1
        }
      ],

      numeProdus: null,
      pret: null,
      cantitate: null
    };
  },

  mounted() {
    firebase
      .firestore()
      .collection("Fructe")
      .get()
      .then(querySnapshot => {
        //console.log(querySnapshot);
        querySnapshot.forEach(doc => {
          //this.products = doc.data();
          this.products.push({
            imagineLink: doc.data().imagineLink,
            statusStock: "În stock",
            categorie: "Fructe",
            numeProdus: doc.data().numeProdus,
            pret: doc.data().pret,
            cantitate: doc.data().cantitate
          });
        });
      });
  },

  methods: {
    veziOfertaCompleta() {
      this.$router.push("./Fructe");
    }
  }
};
</script>

<style></style>
