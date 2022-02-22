<template>
  <h1>Link Erstellen</h1>

  <form v-if="link" class="linkForm" @submit.prevent="updateLink">
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
    <select
      id="category"
      class="form-select"
      name="category"
      v-model="selectedCategory"
    >
      <option
        :value="category.id"
        v-for="category in categories"
        :key="category.id"
      >
        {{ category.attributes.name }}
      </option>
      <!-- done! -->
    </select>
    <button class="buttonSize buttonCreate" type="submit">Erstellen +</button>
  </form>
</template>

<script>
// import of the API Services, which are defined in the linked file
import LinkService from "../services/LinkService.js";
import CategoryService from "@/services/CategoryService.js";

export default {
  props: ["id"],
  data() {
    return {
      link: null,
      error: null,
      categories: [],
      selectedCategory: null,
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
        category: this.selectedCategory,
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
    // get meta data from strapi api to the site that has been choosen
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
    // getCategories() {
    //   CategoryService.getCategories().then((response) => {
    //     this.categories = response.data.data;
    //   });
    // },
  },
  created() {
    // this.getCategories();
    CategoryService.getCategories()
      .then((response) => {
        this.categories = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    LinkService.getLink(this.id)
      .then((response) => {
        console.log("response", response);
        this.link = response.data.data;
        this.selectedCategory = this.link.attributes.category_id?.data?.id;
        console.log("Link Service Edit", this.link);
        console.log("Link Service Edit2", this.selectedCategory);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
