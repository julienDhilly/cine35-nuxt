<template>
  <div>
    <div class="row align-items-start">
      <template v-for="movie in movies">
        <c35-movie-preview
          :key="movie.id"
          :movie="movie"
          class="col-6 col-sm-3 col-md-2"
        />
      </template>
    </div>
  </div>
</template>

<script>
import C35MoviePreview from "~/components/commons/MoviePreview"

export default {
  components: { C35MoviePreview },
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
