<template>
  <div class="navContainer">
    <div id="nav" class="navbar">
      <div class="logoAdveryContainer">
        <img class="logoAdvery" src="@/assets/logos/logo_advery.svg" />
      </div>

      <!-- links to all the sites that are shown in menu -->
      <router-link class="navMainLinks" :to="{ name: 'LinkList' }"
        >Übersicht</router-link
      >
      <router-link class="navMainLinks" :to="{ name: 'Info' }"
        >Info</router-link
      >
      <router-link class="navMainLinks" :to="{ name: 'LinkCreate' }"
        >Erstellen +</router-link
      >
      <div class="iconLeuchtturmContainer">
        <img class="iconLeuchtturm" src="@/assets/logos/logo_lt.svg" />
      </div>
    </div>
  </div>

  <!-- mobil nav -->
  <div class="mobilNavContainer">
    <Transition name="burger">
      <div class="mobilNavLinkContainer" v-show="burger">
        <router-link class="mobilNavMainLinks" :to="{ name: 'LinkList' }"
          >Übersicht</router-link
        >
        <router-link class="mobilNavMainLinks" :to="{ name: 'Info' }"
          >Info</router-link
        >
        <router-link class="mobilNavMainLinks" :to="{ name: 'LinkCreate' }"
          >Erstellen +</router-link
        >
      </div>
    </Transition>
    <div class="mobilNavBurgerContainer">
      <div class="mobilLogoAdveryContainer">
        <img class="logoAdvery" src="@/assets/logos/logo_advery.svg" />
      </div>
      <div class="burgerContainer">
        <!-- burger -->
        <button
          class="burger burgerOpen"
          @click="burger = !burger"
          v-if="burger"
        >
          <span></span>
          <span></span>
        </button>
        <button class="burger" @click="burger = !burger" v-else>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="mobilIconLeuchtturmContainer">
        <img class="iconLeuchtturm" src="@/assets/logos/logo_lt.svg" />
      </div>
    </div>
    <!-- links to all the sites that are shown in menu -->
  </div>

  <main>
    <!-- the view that is selected at the moment will be rendered inside this tag -->
    <router-view></router-view>
  </main>

  <footer>
    <router-link class="footerLink" :to="{ name: 'Impressum' }"
      >Impressum & Disclaimer</router-link
    >
  </footer>
</template>

<script>
export default {
  data() {
    return {
      burger: false,
    };
  },
};
</script>

<style>
.burger-enter-active {
  animation: bounce-in 0.75s;
}
.burger-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    /* transform: scale(0); */
    transform: translateY(-100px);
  }
  50% {
    /* transform: scale(1.1); */
  }
  100% {
    /* transform: scale(1); */
    transform: translateY(0);
  }
}
</style>