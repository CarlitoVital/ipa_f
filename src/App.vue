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

<style>
</style>

<script>
</script>
