<template>
  <div class="filterContainer">
    <div class="categoryFilter">
      <button v-for="category in categories" :key="category.id">
        {{ category.name }}
      </button>
    </div>
  </div>
  <h1>Linkpinnwand</h1>
  <div class="linkList" v-if="links">
    <LinkCard v-for="link in links" :key="link.id" :link="link" />
  </div>
</template>

<script>
// import of the API Services, which are defined in the linked file
import LinkService from "@/services/LinkService.js";
import CategoryService from "@/services/CategoryService.js";
// import of card component
import LinkCard from "@/components/LinkCard.vue";

export default {
  name: "LinkList",
  components: {
    LinkCard,
  },
  data() {
    return {
      links: null,
      categories: null,
    };
  },
  // functions get API (get data from strapi)
  created() {
    LinkService.getLinks()
      .then((response) => {
        console.log(response);
        this.links = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    CategoryService.getCategories()
      .then((response) => {
        this.categories = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>