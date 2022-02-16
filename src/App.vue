<template>
  <div class="navContainer">
    <div id="nav" class="navbar">
      <img class="logoAdvery" src="assets/logos/logo_advery.svg" />
      <!-- links to all the sites that are shown in menu -->
      <router-link :to="{ name: 'LinkList' }">Links</router-link>
      <router-link :to="{ name: 'LinkCreate' }">Link Create</router-link>
      <router-link :to="{ name: 'Info' }">Info</router-link>
      <router-link :to="{ name: 'Impressum' }">Impressum</router-link>
      <img class="iconLeuchturm" src="assets/logos/logo_lt.svg" />
    </div>
  </div>

  <!-- the view that is selected at the moment will be rendered inside this tag -->
  <router-view></router-view>
</template>