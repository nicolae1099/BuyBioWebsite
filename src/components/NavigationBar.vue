<template>
  <nav
    class="w-full bg-gradient-to-r from divide-blue-800 to from-blue-600 text-white px-4 py-2"
  >
    <router-link v-for="item in list" :key="item.to" class="mx-2" :to="item.to">
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [{ title: "Toate Produsele", to: "/ToateProdusele" }]
    };
  }
};
</script>

<style></style>
