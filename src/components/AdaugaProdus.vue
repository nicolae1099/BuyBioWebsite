<template>
  <div class="p-fluid">
    <div class="p-field p-col-4 p-md-4">
      <span class="p-float-label">
        <label for="inputtext">Nume Produs</label>
        <InputText
          id="inputtext"
          type="text"
          v-model="value1"
          placeholder="Nume produs"
        />
      </span>
    </div>

    <div class="p-field p-col-12 p-md-4">
      <span class="p-float-label">
        <label for="inputtext">Pret</label>
        <InputText
          id="inputtext"
          type="text"
          v-model="value1"
          placeholder="pret"
        />
      </span>
    </div>

    <div class="p-field p-col-12 p-md-4">
      <span class="p-float-label">
        <label for="inputtext">Cantitate</label>
        <InputText
          id="inputtext"
          type="text"
          v-model="value1"
          placeholder="cantitate"
        />
      </span>
    </div>

    <div class="p-field">
      <span class="p-float-label">
        <label for="multiselect">Selecteaza unde poti livra</label>
        <MultiSelect
          v-model="selectedCities"
          :options="cities"
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
        name="demo[]"
        url="https://console.firebase.google.com/u/0/project/buybio-7da47/storage/buybio-7da47.appspot.com/files"
        @upload="onUpload"
        :multiple="true"
        accept="image/*"
        :maxFileSize="1000000"
        :customUpload="true"
        @uploader="myUploader"
      >
        <template #empty>
          <p>Drag and drop files to here to upload.</p>
        </template>
      </FileUpload>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      selectedCities: null,
      categorieSelectata: null,
      cities: [
        { name: "Pitesti", code: "NY" },
        { name: "Bascov", code: "RM" },
        { name: "Mioveni", code: "LDN" },
        { name: "Stefanesti", code: "IST" },
        { name: "Topoloveni", code: "PRS" },
        { name: "Bradu", code: "PRS" }
      ],
      categorii: [
        { name: "Fructe" },
        { name: "Legume" },
        { name: "Prajituri" },
        { name: "Branzeturi" }
      ]
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
          console.log(url);
          //document.querySelector("#image").src = url;
        })
        .catch(console.error);
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
