<template>
  <div class="linkSearchContainer">
    <label class="linkInputLabel" for="link">Suche</label>
    <input
      class="linkInput"
      id="search"
      type="text"
      v-model="search"
      placeholder="Suche nach Links"
    />
  </div>
  <h2 class="filterTitle">Kategorie</h2>
  <div class="categoryFilter">
    <select name="category" v-model="selectedCategory">
      <option value="-1">ALL</option>
      <option
        :value="category.id"
        v-for="category in categories"
        :key="category.id"
      >
        {{ category.attributes.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FilterDropdown",
  props: {
    categories: Object,
  },
};
</script>
