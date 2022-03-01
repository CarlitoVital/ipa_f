<template>
  <div class="filterContainer">
    <Transition name="bounce">
      <!-- dropdown filter -->
      <div class="filterDropdown" v-show="toggle">
        <div class="linkSearchContainer">
          <label class="linkSearchInputLabel" for="link">Suche</label>
          <input
            class="linkSearchInput"
            id="search"
            type="text"
            v-model="search"
            placeholder="Suche nach Links"
          />
        </div>
        <h2 class="filterTitle">Kategorie</h2>
        <div class="categoryFilter">
          <select
            class="selectCategoryFilter"
            name="category"
            v-model="selectedCategory"
          >
            <option value="-1">ALL</option>
            <option
              :value="category.id"
              v-for="category in categories"
              :key="category.id"
            >
              {{ category.attributes.name }}
            </option>
          </select>
        </div>
      </div>
    </Transition>
    <!-- buttons for filter dropdown -->
    <button class="filterTitle" v-if="toggle" @click="toggle = !toggle">
      Filter schliessen
    </button>
    <button class="filterTitle" v-else @click="toggle = !toggle">
      Filter öffnen
    </button>
    <!-- <FilterDropdown /> -->
  </div>

  <h1>Linkpinnwand</h1>
  <p class="startText"></p>
  <div class="linkList" v-if="links">
    <LinkCard v-for="link in filteredLinks" :key="link.id" :link="link" />
  </div>
  <div class="linkList loadingSpinner" v-else>
    <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
// import of the API Services, which are defined in the linked file
import LinkService from "@/services/LinkService.js";
import CategoryService from "@/services/CategoryService.js";
// import of card component
import LinkCard from "@/components/LinkCard.vue";
// import Burger from "@/components/Burger.vue";

export default {
  name: "LinkList",
  components: {
    LinkCard,
    // Burger,
  },
  data() {
    return {
      links: null,
      categories: null,
      selectedCategory: -1,
      searchQuery: null,
      search: "",
      dropdownStatus: 0,
      toggle: false,
    };
  },
  computed: {
    filteredLinks: function () {
      let links = this.filteredLinksByCategory(this.links);
      links = this.filteredLinksByTitle(links);
      return links;
    },

    rankLinks: function () {
      let links = this.rankedLinksByClicks(this.links);
      return links;
    },
  },
  methods: {
    filteredLinksByCategory(links) {
      console.log(this.selectedCategory);
      // is the value of selected category -1 (default) return normal list
      if (this.selectedCategory == -1) {
        return this.links;
      }
      // is value of the link ... category = the selected category push it in new list
      var filteredLinksbyCategory = links.filter((link) => {
        return link.attributes.category_id?.data?.id === this.selectedCategory;
      });

      return filteredLinksbyCategory;
    },
    // filter links by title
    filteredLinksByTitle(links) {
      // is the value of search var in the title value
      var filteredLinksbyTitle = links.filter((link) => {
        return link.attributes.title
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });

      return filteredLinksbyTitle;
    },
  },
  created() {
    // functions get API (get data from strapi)
    LinkService.getLinks()
      .then((response) => {
        console.log(response);
        this.links = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    // functions get API (get data from strapi)
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

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.6s;
}
.bounce-leave-active {
  animation: bounce-in 0.6s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>