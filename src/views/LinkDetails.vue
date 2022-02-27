<template>
  <h1>{{ link.attributes.title }}</h1>
  <div v-if="link" class="detailContainer">
    <img
      :src="link.attributes.image"
      :alt="link.attributes.title"
      class="cardImage"
    />
    <div class="cardContent">
      <div class="cardTitleContainer detailsCardDescriptionMargin">
        <h2 class="cardDescription">{{ link.attributes.description }}</h2>
        <i
          :class="`${link.attributes.category_id.data?.attributes?.icon} cardIcon`"
        ></i>
      </div>
      <div class="cardButtonsContainer">
        <p class="cardClicks">
          clicks:<br />
          {{ link.attributes.clicks }}
        </p>
        <div class="cardButtonsFlexBox">
          <router-link
            class="buttonSize buttonGrey buttonDetails"
            :to="{ name: 'LinkDelete', params: { id: link.id } }"
            >Löschen</router-link
          >
          <router-link
            class="buttonSize buttonGrey buttonDetails"
            :to="{ name: 'LinkEdit', params: { id: link.id } }"
            >Editieren</router-link
          >
          <a
            :href="link.attributes.url"
            class="buttonSize buttonPink buttonSite"
          >
            zur Seite
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import of the API Services, which are defined in the linked file
import LinkService from "@/services/LinkService.js";

export default {
  props: ["id"],
  data() {
    return {
      link: null,
    };
  },
  created() {
    // function to use the get API (get data from strapi)
    LinkService.getLink(this.id)
      .then((response) => {
        // console.log("link:", response.data.data);
        this.link = response.data.data;
        console.log("Link Service Details", this.link);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
