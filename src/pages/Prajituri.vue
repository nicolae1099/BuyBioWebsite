<template>
  <!--
  <Card style="width: 25em">
    <template #header>
      <img
        alt="user header"
        src="../assets/mar.jpg"
        class="object-contain h-48 w-full"
      />
    </template>
    <template #title> Mere </template>
    <template subtitle> Din gradina lui Ion </template>
    <template #content>
      <div class="flex flex-col">
        <p>Pret: 1</p>
        <p>Cantitate: 5</p>
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
    <img src="../assets/img2.jpg" class="w-full h-85" />
  </Card>
  -->

  <DataView
    :value="products"
    :layout="layout"
    :paginator="false"
    :rows="9"
    :sortOrder="sortOrder"
    :sortField="sortField"
  >
    <template #header>
      <div class="p-grid p-nogutter">
        <div class="p-col-6" style="text-align: left">
          <Dropdown
            v-model="sortKey"
            :options="sortOptions"
            optionLabel="label"
            placeholder="Sorteaza in functie de pret"
            @change="onSortChange($event)"
          />
        </div>
        <div class="p-col-6" style="text-align: right">
          <DataViewLayoutOptions v-model="layout" />
        </div>
      </div>
    </template>
    <template #grid="slotProps">
      <div class="p-col-12 p-md-4">
        <div class="product-grid-item card">
          <div class="product-grid-item-top">
            <div>
              <i class="pi pi-tag product-category-icon"></i>
              <span class="product-category">{{
                slotProps.data.categorie
              }}</span>
            </div>
            <span
              :class="'product-badge status-' + slotProps.data.inventoryStatus"
              >{{ slotProps.data.statusStock }}</span
            >
          </div>
          <div class="product-grid-item-content">
            <img :src="slotProps.data.imagineLink" :alt="slotProps.data.name" />
            <div class="product-name">{{ slotProps.data.numeProdus }}</div>
            <div class="product-description">
              {{ slotProps.data.description }}
            </div>
            <Rating
              :modelValue="slotProps.data.rating"
              :readonly="true"
              :cancel="false"
            ></Rating>
          </div>
          <div class="product-grid-item-bottom">
            <span class="product-price">${{ slotProps.data.pret }}</span>
            <Button
              icon="pi pi-shopping-cart"
              :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"
            ></Button>
          </div>
        </div>
      </div>
    </template>

    <template #list="slotProps">
      <div class="p-col-12">
        <div class="product-list-item">
          <img :src="slotProps.data.imagineLink" :alt="slotProps.data.name" />
          <div class="product-list-detail">
            <div class="product-name">{{ slotProps.data.numeProdus }}</div>
            <div class="product-description">
              {{ slotProps.data.description }}
            </div>
            <Rating
              :modelValue="slotProps.data.rating"
              :readonly="true"
              :cancel="false"
            ></Rating>
            <i class="pi pi-tag product-category-icon"></i
            ><span class="product-category">{{
              slotProps.data.categorie
            }}</span>
          </div>
          <div class="product-list-action">
            <span class="product-price">${{ slotProps.data.pret }}</span>
            <Button
              icon="pi pi-shopping-cart"
              label="Add to Cart"
              :disabled="slotProps.data.statusStock === 'OUTOFSTOCK'"
            ></Button>
            <span
              :class="'product-badge status-' + slotProps.data.statusStock"
              >{{ slotProps.data.statusStock }}</span
            >
          </div>
        </div>
      </div>
    </template>
  </DataView>
</template>

<script>
import firebase from "../utilities/firebase";

export default {
  data() {
    return {
      products: [],
      layout: "grid",
      sortKey: null,
      sortOrder: null,
      sortField: null,
      numeProdus: null,
      pret: null,
      cantitate: null,
      sortOptions: [
        { label: "Pret descrescator", value: "!price" },
        { label: "Pret crescator", value: "price" }
      ]
    };
  },
  productService: null,
  created() {
    this.productService = firebase.firestore();
  },
  mounted() {
    firebase
      .firestore()
      .collection("Prajituri")
      .get()
      .then(querySnapshot => {
        //console.log(querySnapshot);
        querySnapshot.forEach(doc => {
          //this.products = doc.data();
          this.products.push({
            imagineLink: doc.data().imagineLink,
            statusStock: "În stock",
            categorie: "Prajituri",
            numeProdus: doc.data().numeProdus,
            pret: doc.data().pret,
            cantitate: doc.data().cantitate
          });
        });
      });
  },
  methods: {
    onSortChange(event) {
      const value = event.value.value;
      const sortValue = event.value;

      if (value.indexOf("!") === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
        this.sortKey = sortValue;
      } else {
        this.sortOrder = 1;
        this.sortField = value;
        this.sortKey = sortValue;
      }
    }
  }
};
</script>

<style></style>
