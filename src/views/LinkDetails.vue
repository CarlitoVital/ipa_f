<template>
  <h1>Link Titel</h1>
  <div class="detailContainer">
    <img src="" alt="" class="cardImage" />
    <div class="cardContent">
      <div class="cardTitleContainer">
        <h2 class="cardTitle">Beschreibung</h2>
        <img src="" alt="" class="cardIcon" />
      </div>
      <div class="cardButtonsContainer">
        <p class="cardClicks">
          clicks:<br />
          122
        </p>
        <!-- <router-link
          class="buttonSize buttonGrey buttonDetails"
          :to="{ name: 'LinkDelete', params: { id: link.id } }"
          >Löschen</router-link
        > -->
        <router-link
          class="buttonSize buttonGrey buttonDetails"
          :to="{ name: 'LinkEdit', params: { id: link.id } }"
          >Editieren</router-link
        >
        <a :href="link.attributes.url" class="buttonSize buttonPink buttonSite">
          zur Seite
        </a>
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
        console.log("link:", response.data.data);
        this.link = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
