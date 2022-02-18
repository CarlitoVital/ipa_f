<template>
  <h1>Link Erstellen</h1>

  <form class="linkForm" @submit.prevent="createLink">
    <div class="linkInputContainer">
      <label class="linkInputLabel" for="link">URL</label>
      <input class="linkInput" type="text" id="link" v-model="link.url" />
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
      <input class="linkInput" type="text" id="title" v-model="link.title" />
    </div>
    <div class="linkInputContainer">
      <label class="linkInputLabel" for="description">Beschreib</label>
      <input
        class="linkInput"
        type="text"
        id="description"
        v-model="link.description"
      />
    </div>
    <div class="linkInputContainer">
      <label class="linkInputLabel" for="image">Bild</label>
      <input class="linkInput" type="text" id="image" v-model="link.image" />
    </div>
    <div class="createCategoryContainer">
      <h2 class="createCategoryTitle">Kategorie</h2>
      <select
        id="category"
        name="category"
        v-model="link.category"
        :value="link.attributes.category_id.data?.attributes?.name"
      >
        <option
          :value="category.id"
          v-for="category in categories"
          :key="category.id"
        >
          {{ category.attributes.name }}
        </option>
      </select>
    </div>
    <button class="buttonSize buttonCreate" type="submit">Erstellen +</button>
  </form>
</template>

<script>
// import of the API Services, which are defined in the linked file
import LinkService from "../services/LinkService.js";
import CategoryService from "../services/CategoryService.js";

export default {
  data() {
    return {
      // define array for post, fot fill data from html form in array
      link: {
        title: "",
        description: "",
        url: "",
        category: "",
        image: "",
      },
      categories: [],
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
      // posts url of link and gets meta tags from the backend
      LinkService.postUrlForMetaData(this.link.url).then((response) => {
        console.log(response);
        const metaData = response.data.data;
        console.log(metaData);
        this.link.title = metaData.title;
        this.link.description = metaData.description;
        this.link.image = metaData.image;
      });
    },
    // use api request to get categories
    getCategories() {
      CategoryService.getCategories().then((response) => {
        console.log("categories:", response.data.data);
        this.categories = response.data.data;
      });
    },
  },
};
</script>
