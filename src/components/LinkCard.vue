<template>
  <div class="cardContainer">
    <img src="" alt="" class="cardImage" />
    <div class="cardContent">
      <div class="cardTitleContainer">
        <h2 class="cardTitle">Titel</h2>
        <i :class="link.attributes.category.data?.attributes?.icon"></i>
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
};
</script>
