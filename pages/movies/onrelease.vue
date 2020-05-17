<template>
  <div class="container pb-4">
    <div class="row">
      <div class="col-12">
        <c35-strike class="mt-4 mb-2">
          A l'affiche
        </c35-strike>
      </div>
    </div>
    <div class="row">
      <template v-for="movie in movies">
        <div :key="movie.id" class="col-6 col-sm-4 col-md-4 col-lg-3">
          <c35-movie-preview :movie="movie" style="margin-right: -15px;" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import C35MoviePreview from "~/components/commons/MoviePreview"
import C35Strike from "~/components/commons/Strike"

export default {
  components: { C35MoviePreview, C35Strike },
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
