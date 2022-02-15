<template>
  <h1>Link Editieren</h1>
  <form v-if="link" @submit.prevent="updateLink">
    <label for="link">URL</label>
    <input type="text" id="link" v-model="link.attributes.url" />
    <button type="submit">Save</button>
  </form>
</template>

<script>
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
