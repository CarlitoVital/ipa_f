<template>
  <h1>Link Erstellen</h1>

  <form @submit.prevent="createLink">
    <label for="link">URL</label>
    <input type="text" id="link" v-model="link.url" />
    <button type="button" @click="getMetaDataFromUrl">autofill</button>
    <input type="text" id="link" v-model="link.title" />
    <input type="text" id="link" v-model="link.description" />
    <input type="text" id="link" v-model="link.image" />
    <button type="submit">create <b>+</b></button>
  </form>
</template>

<script>
// import of the API Services, which are defined in the linked file
import LinkService from "../services/LinkService.js";

export default {
  data() {
    return {
      // define array for post, fot fill data from html form in array
      link: {
        url: "",
      },
      error: null,
    };
  },
  methods: {
    // function to use Post API (send data to strapi for new link post)
    createLink() {
      LinkService.postLink(this.link)
        .then(() => {
          this.$router.push("/");
        })
        // if the post doesn't work the error will be catched and showed in the console
        .catch((error) => {
          this.error = error;
        });
    },
    getMetaDataFromUrl() {
      LinkService.postUrlForMetaData(this.link.url).then((response) => {
        console.log(response);
        const metaData = response.data.data;
        console.log(metaData);
        this.link.title = metaData.title;
        this.link.description = metaData.description;
        this.link.image = metaData.image;
      });
    },
  },
};
</script>
