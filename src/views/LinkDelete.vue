<template>
  <h1>Willst du den Link wirklich löschen?</h1>
  <div class="deleteContainer">
    <div class="deleteButtonBox">
      <button
        type="button"
        @click="deleteLink"
        class="buttonSize buttonPink buttonDetails"
      >
        Ja
      </button>
    </div>
    <div class="deleteButtonBox">
      <router-link
        class="buttonSize buttonGrey buttonDetails"
        :to="{ name: 'LinkDetails', params: { id: id } }"
        >Nein</router-link
      >
    </div>
  </div>
</template>
<script>
// import of the API Services, which are defined in the linked file
import LinkService from "@/services/LinkService.js";

export default {
  props: ["id"],
  methods: {
    deleteLink() {
      // function to use the delete API (delete data from strapi)
      LinkService.deleteLink(this.id)
        .then((response) => {
          console.log(response);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
