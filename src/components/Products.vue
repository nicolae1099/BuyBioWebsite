<template>
  <h1>produs</h1>
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
  </Card>

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
            placeholder="Sort By Price"
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
                slotProps.data.category
              }}</span>
            </div>
            <span
              :class="'product-badge status-' + slotProps.data.inventoryStatus"
              >{{ slotProps.data.inventoryStatus }}</span
            >
          </div>
          <div class="product-grid-item-content">
            <img
              :src="'demo/images/product/' + slotProps.data.image"
              :alt="slotProps.data.name"
            />
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
  </DataView>
</template>

<script>
import firebase from "../utilities/firebase";

export default {
  data() {
    return {
      products: [
        { numeProdus: "mere dulci", pret: "10", cantitate: "100" },
        { numeProdus: "pere bune", pret: "1", cantitate: "50" }
      ],
      layout: "grid",
      sortKey: null,
      sortOrder: null,
      sortField: null,
      numeProdus: null,
      pret: null,
      cantitate: null,
      sortOptions: [
        { label: "Price High to Low", value: "!price" },
        { label: "Price Low to High", value: "price" }
      ]
    };
  },
  productService: null,
  created() {
    this.productService = firebase.firestore();
  },
  mounted() {
    /*
    firebase
      .firestore()
      .collection("Fructe")
      .get()
      .then((querySnapshot) => {
        //console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          this.products = doc.data();
          this.numeProdus = doc.data().numeProdus;
          this.pret = doc.data().pret;
          this.cantitate = doc.data().cantitate;
          console.log(this.numeProdus);
          console.log(this.pret);
          console.log(this.cantitate);
        });
      });
      */
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
