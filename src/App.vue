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
    <div class="mobilNavBurgerContainer">
      <div class="mobilLogoAdveryContainer">
        <img class="logoAdvery" src="@/assets/logos/logo_advery.svg" />
      </div>
      <div class="burgerContainer">
        <button class="burger" @click="burger = !burger">
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
// const OFFSET = 60;

// export default {
//   data() {
//     return {
//       burger: false,
//       showNavbar: true,
//       lastScrollPosition: 0,
//       scrollValue: 0,
//     };
//   },
//   mounted() {
//     this.lastScrollPosition = window.pageYOffset;
//     window.addEventListener("scroll", this.onScroll);
//     const viewportMeta = document.createElement("meta");
//     viewportMeta.name = "viewport";
//     viewportMeta.content = "width=device-width, initial-scale=1";
//     document.head.appendChild(viewportMeta);
//   },

//   beforeUnmount() {
//     window.removeEventListener("scroll", this.onScroll);
//   },

//   methods: {
//     onScroll() {
//       if (window.pageYOffset < 0) {
//         return;
//       }
//       if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
//         return;
//       }
//       this.showNavbar = window.pageYOffset < this.lastScrollPosition;
//       this.lastScrollPosition = window.pageYOffset;
//     },
//   },
// };
</script>

<style>
</style>