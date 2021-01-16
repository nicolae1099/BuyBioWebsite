<template>
  <div class="m-auto w-full flex justify-between">
    <ToggleButton
      v-model="checkedToggleButton"
      onIcon="pi pi-bars"
      offIcon="pi pi-times"
      @click="toggle"
      class="toateProdusele"
    />
    <TieredMenu ref="menu" :model="items" :popup="true" />

    <div>
      <img
        src="../assets/buyBioLogo.png"
        class="rounded w-20 mx-10"
        @click="goHome"
      />
    </div>

    <div class="p-inputtext-lg flex-grow">
      <span class="p-input-icon-left">
        <span class="p-inputgroup-addon">
          <i class="pi pi-search"></i>
        </span>
        <span class="p-float-label">
          <InputText
            class="w-full"
            id="inputgroup"
            type="text"
            v-model="searchText"
            placeholder="Ai libertatea sa mananci sanatos"
          />
        </span>
      </span>
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
    },

    toggle(event) {
      this.$refs.menu.toggle(event);
    }
  },

  data() {
    return {
      checkedToggleButton: false,
      items: [
        {
          //item1
          label: "Fructe",
          icon: "pi pi-fw pi-file",
          to: "./Fructe",
          command: event => {
            console.log(event.item);

            // event.originalEvent: Browser event
            // event.item: Menuitem instance
          },
          items: [
            {
              label: "New",
              icon: "pi pi-fw pi-plus",
              items: [
                {
                  label: "Bookmark",
                  icon: "pi pi-fw pi-bookmark"
                },
                {
                  label: "Video",
                  icon: "pi pi-fw pi-video"
                }
              ]
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-trash"
            },
            {
              separator: true
            },
            {
              label: "Export",
              icon: "pi pi-fw pi-external-link"
            }
          ]
        },
        //item2
        {
          label: "Legume",
          icon: "pi pi-fw pi-pencil",
          to: "./Legume",
          items: [
            {
              label: "Left",
              icon: "pi pi-fw pi-align-left"
            },
            {
              label: "Right",
              icon: "pi pi-fw pi-align-right"
            },
            {
              label: "Center",
              icon: "pi pi-fw pi-align-center"
            },
            {
              label: "Justify",
              icon: "pi pi-fw pi-align-justify"
            }
          ]
        },

        //item3
        {
          label: "Branzeturi",
          icon: "pi pi-fw pi-user",
          to: "./Branzeturi",
          items: [
            {
              label: "New",
              icon: "pi pi-fw pi-user-plus"
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-user-minus"
            },
            {
              label: "Search",
              icon: "pi pi-fw pi-users",
              items: [
                {
                  label: "Filter",
                  icon: "pi pi-fw pi-filter",
                  items: [
                    {
                      label: "Print",
                      icon: "pi pi-fw pi-print"
                    }
                  ]
                },
                {
                  icon: "pi pi-fw pi-bars",
                  label: "List"
                }
              ]
            }
          ]
        },

        // item4
        {
          label: "Prajituri",
          icon: "pi pi-fw pi-calendar",
          to: "./Prajituri",
          items: [
            {
              label: "Edit",
              icon: "pi pi-fw pi-pencil",
              items: [
                {
                  label: "Save",
                  icon: "pi pi-fw pi-calendar-plus"
                },
                {
                  label: "Delete",
                  icon: "pi pi-fw pi-calendar-minus"
                }
              ]
            },
            {
              label: "Archieve",
              icon: "pi pi-fw pi-calendar-times",
              items: [
                {
                  label: "Remove",
                  icon: "pi pi-fw pi-calendar-minus"
                }
              ]
            }
          ]
        },
        {
          separator: true
        },

        //item5
        {
          label: "Altele",
          icon: "pi pi-fw pi-power-off"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
::v-deep(.p-togglebutton) {
  .p-button-label {
    display: none;
  }
}
</style>
