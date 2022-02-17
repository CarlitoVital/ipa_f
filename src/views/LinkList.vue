<template>
  <div class="filterContainer">
    <div class="linkSearchContainer">
      <label class="linkInputLabel" for="link">Suche</label>
      <input
        class="linkInput"
        id="search"
        type="text"
        v-model="search"
        placeholder="Suche nach Links"
      />
    </div>
    <h2 class="filterTitle">Kategorie</h2>
    <div class="categoryFilter">
      <select name="category" v-model="selectedCategory">
        <option
          :value="category.id"
          v-for="category in categories"
          :key="category.id"
        >
          {{ category.attributes.name }}
        </option>
      </select>
      <!-- try to filter links with inputs -->
      <!-- <div class="filteredButton">
        <input
          type="radio"
          id="allCategories"
          v-model="selectedCategory"
          :value="-1"
          name="ALL"
        />
        <label for="allCategories">ALL</label>
      </div>
      <div
        class="filterButton"
        v-for="category in categories"
        :key="category.id"
      >
        <input
          type="radio"
          v-model="selectedCategory"
          :id="category.attributes.name"
          :value="category.id"
        />
        <i :class="`${category.attributes.icon} filterIcon`"></i>
        <label
          :for="category.attributes.name"
          :name="category.attributes.name"
          >{{ category.attributes.name }}</label
        >
      </div> -->
    </div>
    <button @click="filterDropdown">Filter</button>
  </div>
  <h1>Linkpinnwand</h1>
  <div class="linkList" v-if="links">
    <LinkCard v-for="link in filteredLinks" :key="link.id" :link="link" />
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
      selectedCategory: -1,
      searchQuery: null,
      search: "",
    };
  },
  computed: {
    filteredLinks: function () {
      let links = this.filteredLinksbyCategory(this.links);
      links = this.filteredLinksbyTitle(links);
      return links;
    },
  },
  methods: {
    filteredLinksbyCategory(links) {
      console.log(this.selectedCategory);

      if (this.selectedCategory == -1) {
        return this.links;
      }

      var filteredLinksbyCategory = links.filter((link) => {
        return link.attributes.category_id?.data?.id === this.selectedCategory;
      });

      return filteredLinksbyCategory;
    },
    filteredLinksbyTitle(links) {
      console.log(this.search);

      var filteredLinksbyTitle = links.filter((link) => {
        return link.attributes.title
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });

      return filteredLinksbyTitle;
    },
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