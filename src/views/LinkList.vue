<template>
  <div class="filterContainer">
    <h2 class="filterTitle">Kategorie</h2>
    <div class="categoryFilter">
      <button
        v-for="category in categories"
        :key="category.id"
        :category="category"
        class="filterButton"
      >
        <i :class="`${category.attributes.icon} filterIcon`"></i>
        {{ category.attributes.name }}
      </button>
    </div>
    <button @click="filterDropdown">Filter</button>
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
      dropdown: false,
    };
  },
  methods: {
    filterDropdown() {
      if ()
    }
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