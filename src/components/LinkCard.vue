<template>
  <div v-if="link" class="cardContainer">
    <img
      :src="link.attributes.image"
      :alt="link.attributes.title"
      class="cardImage"
    />
    <div class="cardContent">
      <div class="cardTitleContainer">
        <h2 class="cardTitle">{{ link.attributes.title }}</h2>
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
            @click="addClick"
            class="buttonSize buttonGrey buttonDetails"
            :to="{ name: 'LinkDetails', params: { id: link.id } }"
            >Details</router-link
          >
          <a
            @click="addClick"
            :href="link.attributes.url"
            class="buttonSize buttonPink buttonSite"
          >
            zur Seite
          </a>
        </div>

        <!-- <button @click="addClick" class="buttonSize buttonPink buttonSite">
          Click
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import LinkService from "../services/LinkService";
export default {
  name: "LinkCard",
  props: {
    link: Object,
  },
  // data() {
  //   return {
  //     link: null,
  //   };
  // },
  methods: {
    addClick() {
      // make new const because the data is from another vue file, data can not be changed
      const link = {
        id: this.link.id,
        clicks: this.link.attributes.clicks,
      };
      // at one to click int
      link.clicks++;
      console.log(link);
      LinkService.putLink(link)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  addClick() {
    LinkService;
    // LinkService.getLink(link.id)
    //   .then((response) => {
    //     console.log(response);
    //     this.link = response.data.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>
