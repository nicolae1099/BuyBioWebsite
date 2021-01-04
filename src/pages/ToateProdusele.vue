<template>
  <div>
    <TieredMenu :model="items" />
  </div>
  <div>
    <input type="file" id="photo" />
    <button @click="uploadImage()">Upload Image</button>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      items: [
        {
          //item1
          label: "Fructele",
          icon: "pi pi-fw pi-file",
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
          label: "Carne",
          icon: "pi pi-fw pi-calendar",
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
  },
  mounted() {
    firebase
      .firestore()
      .collection("produse")
      .get()
      .then(querySnapshot => {
        //console.log(querySnapshot);
        querySnapshot.forEach(doc => {
          console.log(doc.data());
        });
      });
  },
  methods: {
    uploadImage() {
      const ref = firebase.storage().ref();
      console.log(document.querySelector("#photo").files[0]);
      const file = document.querySelector("#photo").files[0];
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

<style></style>
