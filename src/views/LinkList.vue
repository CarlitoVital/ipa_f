<template>
  <div class="filterContainer">
    <Transition name="bounce">
      <div class="filterDropdown" v-show="toggle">
        <!-- v-if="dropdownStatus === 1" -->
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
            <option value="-1">ALL</option>
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

        <!-- <h2 class="orderByClicksTitle">Sortiere nach Klicks</h2>
      <button
        type="button"
        @click="rankLinks"
        class="buttonSize buttonPink buttonDetails"
      >
        Ranking
      </button> -->
      </div>
    </Transition>

    <!-- <Burger
      @toggle-menu="menuActive = !menuActive"
      :active="menuActive"
    ></Burger> -->

    <button class="filterTitle" @click="toggle = !toggle">Filter</button>
    <!-- <FilterDropdown /> -->
  </div>

  <h1>Linkpinnwand</h1>
  <p class="startText"></p>
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
    // filteredLinks: function () {
    //   let links = this.rankedLinksByClicks(this.links);
    //   links = this.filteredLinksByCategory(links);
    //   links = this.filteredLinksByTitle(links);
    //   return links;
    // },
    filteredLinks: function () {
      let links = this.filteredLinksByCategory(this.links);
      links = this.filteredLinksByTitle(links);
      return links;
    },

    rankLinks: function () {
      let links = this.rankedLinksByClicks(this.links);
      return links;
    },

    // rankLinks: function () {
    //   this.links | sortBy("created");
    //   return links;
    // },
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

    // rankedLinksByClicks(links) {

    //   link.sort((a, b) => b - a);
    //   return links;
    // },

    // rankedLinksByClicks(links) {
    //   links.sort((link) =>
    //     link.attributes.clicks > link.attributes.clicks ? 1 : -1
    //   );
    //   return links;
    // },

    // IDEA 1
    // sortByClicks(links) {
    //   links.sort((a, b) => (a[clicks] < b[clicks] ? -1 : 1));
    //   return links;
    // },

    // IDEA 2
    // sortFunc: function () {
    //   return this.links.slice().sort(function (a, b) {
    //     return a.clicks > b.clicks ? 1 : -1;
    //   });
    // },

    // IDEA 3
    // rankedLinksByClicks: function () {
    //   function compare(a, b) {
    //     if (a.name < b.name) return -1;
    //     if (a.name > b.name) return 1;
    //     return 0;
    //   }

    //   return this.arrays.sort(compare);
    // },

    // IDEA 4
    // rankedLinksByClicks(links) {
    //   var clicks = this.links.link.attributes.clicks;
    //   var rankedLinksByClicks = links.ranker((links) => {
    //     return links.orderBy(clicks);
    //   });

    //   return rankedLinksByClicks;
    // },

    // sortLinks(links) {
    //   return links.orderBy(this.clicks);
    // },

    // dropdownClick() {
    //   if (this.dropdownStatus === 0) {
    //     this.dropdownStatus === 1;
    //   } else {
    //     this.dropdownStatus === 0;
    //   }
    //   console.log(this.dropdownStatus);
    // },

    // updateLink() {
    //   const link = {
    //     clicks: this.link.attributes.clicks,
    //   };
    //   LinkService.putLink(link)
    //     .then((response) => {
    //       console.log(response);
    //       this.$router.push("/");
    //     })
    //     .catch((error) => {
    //       this.error = error;
    //     });
    // },

    // functions get API (get data from strapi)
  },
  created() {
    console.log("Hello");
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

<style scoped>
/* .v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */
.bounce-enter-active {
  animation: bounce-in 0.75s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
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