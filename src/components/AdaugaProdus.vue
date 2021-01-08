<template>
  <div class="p-fluid">
    <div class="p-field p-col-4 p-md-4">
      <span class="p-float-label">
        <label for="inputtext">Nume Produs</label>
        <InputText type="text" v-model="numeProdus" placeholder="Nume produs" />
      </span>
    </div>

    <div class="p-field p-col-12 p-md-4">
      <span class="p-float-label">
        <label for="inputtext">Pret</label>
        <InputText type="text" v-model="pret" placeholder="pret" />
      </span>
    </div>

    <div class="p-field p-col-12 p-md-4">
      <span class="p-float-label">
        <label for="inputtext">Cantitate</label>
        <InputText type="text" v-model="cantitate" placeholder="cantitate" />
      </span>
    </div>

    <div class="p-field">
      <span class="p-float-label">
        <label for="multiselect">Selecteaza unde poti livra</label>
        <MultiSelect
          v-model="oraseSelectate"
          :options="orase"
          optionLabel="name"
          placeholder="Locatii alese"
          :filter="true"
          class="multiselect-custom"
        >
          <template #value="slotProps">
            <div
              class="country-item country-item-value"
              v-for="option of slotProps.value"
              :key="option.code"
            >
              <div>{{ option.name }}</div>
            </div>
            <template v-if="!slotProps.value || slotProps.value.length === 0">
              Locatii alese
            </template>
          </template>
          <template #option="slotProps">
            <div class="country-item">
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </MultiSelect>
      </span>
    </div>

    <div class="p-field">
      <span>
        <label for="dropdown">Categorie</label>
        <Dropdown
          v-model="categorieSelectata"
          :options="categorii"
          optionLabel="name"
          :filter="true"
          placeholder="Alege o categorie"
          :showClear="true"
          class="p-autocomplete"
        >
          <template #value="slotProps">
            <div class="country-item country-item-value" v-if="slotProps.value">
              <div>{{ slotProps.value.name }}</div>
            </div>
            <span v-else>
              {{ slotProps.placeholder }}
            </span>
          </template>
          <template #option="slotProps">
            <div class="country-item">
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </Dropdown>
      </span>
    </div>

    <div>
      <FileUpload
        :multiple="true"
        accept="image/*"
        :maxFileSize="1000000"
        :customUpload="true"
        @uploader="myUploader"
      >
        <template #empty>
          <p>Trage imagini aici.</p>
        </template>
      </FileUpload>
    </div>

    <div class="flex">
      <Button
        label="Creează produs"
        icon="pi pi-check"
        iconPos="right"
        class="mx-2"
        @click="creeazaProdus($event)"
      />
      <Button
        label="Creează & adaugă încă unul"
        icon="pi pi-check"
        iconPos="right"
        class="mx-2"
        @click="handleClick($event)"
      />
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      numeProdus: null,
      pret: null,
      cantitate: null,
      orase: [
        { name: "Pitesti" },
        { name: "Bascov" },
        { name: "Mioveni" },
        { name: "Stefanesti" },
        { name: "Topoloveni" },
        { name: "Bradu" }
      ],
      oraseSelectate: null,

      categorii: [
        { name: "Fructe" },
        { name: "Legume" },
        { name: "Prajituri" },
        { name: "Branzeturi" }
      ],
      categorieSelectata: null,
      imagineLink: null
    };
  },

  methods: {
    myUploader(event) {
      console.log(event.files[0]);
      //event.files == files to upload
      const ref = firebase.storage().ref();
      const file = event.files[0];
      const name = +new Date() + "-" + file.name;
      const metadata = {
        contentType: file.type
      };

      const task = ref.child(name).put(file, metadata);
      task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
          //console.log(url);
          this.imagineLink = url;
        })
        .catch(console.error);
    },

    creeazaProdus(event) {
      console.log(event);
      firebase
        .firestore()
        .collection(this.categorieSelectata.name)
        .add({
          imagineLink: this.imagineLink,
          numeProdus: this.numeProdus,
          pret: this.pret,
          cantitate: this.cantitate,
          oraseSelectate: this.oraseSelectate,
          categorieSelectata: this.categorieSelectata
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.p-multiselect {
  min-width: 15rem;
}
::v-deep(.multiselect-custom) {
  .p-multiselect-label:not(.p-placeholder) {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .country-item-value {
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    display: inline-flex;
    margin-right: 0.5rem;
    background-color: var(--primary-color);
    color: var(--primary-color-text);
    img.flag {
      width: 17px;
    }
  }
}
</style>
