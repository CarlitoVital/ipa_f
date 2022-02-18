<template>
  <div class="cardContainer">
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
        <router-link
          class="buttonSize buttonGrey buttonDetails"
          :to="{ name: 'LinkDetails', params: { id: link.id } }"
          >Details</router-link
        >
        <a :href="link.attributes.url" class="buttonSize buttonPink buttonSite">
          zur Seite
        </a>
        <!-- <button @click="addClick" class="buttonSize buttonPink buttonSite">
          Click
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
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
  // methods: {
  //   addClick() {
  //     this.link.attributes.clicks = this.link.attributes.clicks++;
  //   },
  // },
  // created() {
  //   LinkService.getLink(link.id)
  //     .then((response) => {
  //       console.log(response);
  //       this.link = response.data.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
</script>
