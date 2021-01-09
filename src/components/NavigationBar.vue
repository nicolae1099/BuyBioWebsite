<template>
  <nav
    class="header w-full bg-gradient-to-r from divide-blue-800 to from-blue-600 text-white px-4 py-2"
  >
    <router-link v-for="item in list" :key="item.to" class="mx-2" :to="item.to">
      {{ item.title }}
    </router-link>
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <span class="p-inputgroup-addon">
        <i class="pi pi-search"></i>
      </span>
      <span class="p-float-label">
        <InputText
          id="inputgroup"
          type="text"
          v-model="searchText"
          placeholder="Ai libertatea sa mananci sanatos"
        />
      </span>
    </span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "Toate Produsele", to: "/ToateProdusele" },
        { title: "Despre Noi", to: "/DespreNoi" }
      ],
      searchText: null
    };
  }
};
</script>

<style></style>
