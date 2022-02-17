<template>
  <template>
    <h1>Link Erstellen</h1>

    <form class="linkForm" v-if="link" @submit.prevent="updateLink">
      <div class="linkInputContainer">
        <label class="linkInputLabel" for="link">URL</label>
        <input
          class="linkInput"
          type="text"
          id="link"
          v-model="link.attributes.url"
        />
      </div>
      <button
        class="buttonAutofill buttonGrey"
        type="button"
        @click="getMetaDataFromUrl"
      >
        Autofill
      </button>
      <div class="linkInputContainer">
        <label class="linkInputLabel" for="title">Titel</label>
        <input
          class="linkInput"
          type="text"
          id="title"
          v-model="link.attributes.title"
        />
      </div>
      <div class="linkInputContainer">
        <label class="linkInputLabel" for="description">Beschreib</label>
        <input
          class="linkInput"
          type="text"
          id="description"
          v-model="link.attributes.description"
        />
      </div>
      <div class="linkInputContainer">
        <label class="linkInputLabel" for="image">Bild</label>
        <input
          class="linkInput"
          type="text"
          id="image"
          v-model="link.attributes.image"
        />
      </div>
      <button class="buttonSize buttonCreate" type="submit">Erstellen +</button>
    </form>
  </template>
</template>

<script>
// import of the API Services, which are defined in the linked file
import LinkService from "../services/LinkService.js";

export default {
  props: ["id"],
  data() {
    return {
      link: null,
      error: null,
    };
  },
  methods: {
    updateLink() {
      const link = {
        id: this.link.id,
        url: this.link.attributes.url,
        title: this.link.attributes.title,
        description: this.link.attributes.description,
        image: this.link.attributes.image,
      };
      LinkService.putLink(link)
        .then((response) => {
          console.log(response);
          this.$router.push("/");
        })
        .catch((error) => {
          this.error = error;
        });
    },
    getMetaDataFromUrl() {
      LinkService.postUrlForMetaData(this.link.attributes.url).then(
        (response) => {
          console.log(response);
          const metaData = response.data.data;
          console.log(metaData);
          this.link.attributes.title = metaData.title;
          this.link.attributes.description = metaData.description;
          this.link.attributes.image = metaData.image;
        }
      );
    },
  },
  created() {
    LinkService.getLink(this.id)
      .then((response) => {
        this.link = response.data.data;
        this.selectedCategory = this.link.attributes.category.data?.id;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
