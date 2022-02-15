<template>
  <div id="nav" class="navbar">
    <!-- links to all the sites that are shown in menu -->
    <router-link :to="{ name: 'LinkList' }">Links</router-link> |
    <router-link :to="{ name: 'LinkCreate' }">Link Create</router-link> |
    <router-link :to="{ name: 'Info' }">Info</router-link> |
    <router-link :to="{ name: 'Impressum' }">Impressum</router-link> |
  </div>
  <!-- the view that is selected at the moment will be rendered inside this tag -->
  <router-view></router-view>
</template>
 


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
