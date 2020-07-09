<template>
  <div class="c35-section">
    <div class="row">
      <div class="col-12">
        <c35-strike>
          Box-Office Rennes
        </c35-strike>
      </div>
    </div>
    <div class="row mx-n1">
      <template v-for="(movie, index) in movies">
        <div
          :key="movie.id"
          :class="{
            'd-none': index > 3,
            'd-lg-block': index > 3,
          }"
          class="col-6 col-sm-3 py-1 px-1"
        >
          <div class="c35-box-office-score">
            {{ index + 1 }}
          </div>
          <c35-movie-preview :movie="movie" />
        </div>
      </template>
    </div>
    <div class="text-center mt-3">
      <nuxt-link
        :to="{ name: 'movies-onrelease' }"
        class="btn btn-primary c35-btn"
      >
        Voir tous les films à l'affiche
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import C35Strike from "~/components/commons/Strike"
import C35MoviePreview from "~/components/commons/MoviePreview"

export default {
  name: "C35HomeBoxOffice",
  components: { C35Strike, C35MoviePreview },
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
}
</script>
