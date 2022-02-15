<template>
  <p>{{ link.attributes.url }}</p>
  <router-link :to="{ name: 'LinkEdit', params: { id: link.id } }"
    >Edit Link</router-link
  >
</template>

<script>
export default {
  name: "LinkCard",
  props: {
    link: Object,
  },
};
</script>
