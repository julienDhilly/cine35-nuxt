<template>
  <div>
    <c35-movie-preview-list title="A l'affiche" :movies="movies" />
  </div>
</template>

<script>
import C35MoviePreviewList from "~/components/commons/MoviePreviewList"

export default {
  components: { C35MoviePreviewList },
  async fetch({ store }) {
    await store.dispatch("movies/fetch")
  },
  computed: {
    movies() {
      return this.$store.getters["movies/collection"]
    },
  },
}
</script>
