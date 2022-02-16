<template>
  <h1>Linkpinnwand</h1>
  <div v-if="links">
    <LinkCard v-for="link in links" :key="link.id" :link="link" />
  </div>
</template>

<script>
// import of the API Services, which are defined in the linked file
import LinkService from "@/services/LinkService.js";
import LinkCard from "@/components/LinkCard.vue";

export default {
  name: "LinkList",
  components: {
    LinkCard,
  },
  data() {
    return {
      links: null,
    };
  },
  // function to use the get API (get data from strapi)
  created() {
    LinkService.getLinks()
      .then((response) => {
        console.log(response);
        this.links = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style  scoped>
</style>
