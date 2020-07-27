<template>
  <div>
    <div class="row">
      <div class="col-12">
        <c35-breadcrumb :crumbs="crumbs" />
      </div>
    </div>
    <div class="c35-section">
      <div class="px-1">
        <div class="row mx-n1">
          <div class="col-12 pl-1">
            <c35-strike>
              Prochainement
            </c35-strike>
          </div>
        </div>
        <div class="c35-movie-list-date-section">
          SORTIE NATIONALE LE 01/07/2020
        </div>
        <div class="row mx-n1">
          <template v-for="movie in movies">
            <div
              :key="movie.id"
              class="col-6 col-sm-4 col-md-3 col-lg-2 py-1 px-1"
            >
              <c35-movie-preview :movie="movie" />
            </div>
          </template>
        </div>

        <div class="c35-movie-list-date-section">
          SORTIE NATIONALE LE 08/07/2020
        </div>
        <div class="row mx-n1">
          <template v-for="movie in movies">
            <div
              :key="movie.id"
              class="col-6 col-sm-4 col-md-3 col-lg-2 py-1 px-1"
            >
              <c35-movie-preview :movie="movie" />
            </div>
          </template>
        </div>

        <div class="c35-movie-list-date-section">
          SORTIE NATIONALE LE 15/07/2020
        </div>
        <div class="row mx-n1">
          <template v-for="movie in movies">
            <div
              :key="movie.id"
              class="col-6 col-sm-4 col-md-3 col-lg-2 py-1 px-1"
            >
              <c35-movie-preview :movie="movie" />
            </div>
          </template>
        </div>

        <c35-pagination class="mt-3" />
      </div>
    </div>
  </div>
</template>

<script>
import C35Strike from "~/components/commons/Strike"
import C35Breadcrumb from "~/components/partial/Breadcrumb"
import C35MoviePreview from "~/components/commons/MoviePreview"
// import C35MoviePreviewListFilters from "~/components/commons/MoviePreviewListFilters"
import C35Pagination from "~/components/commons/Pagination"

export default {
  components: {
    C35Strike,
    C35Breadcrumb,
    C35MoviePreview,
    //  C35MoviePreviewListFilters,
    C35Pagination,
  },
  async fetch({ store }) {
    await store.dispatch("movies/fetch")
  },
  data() {
    return {
      crumbs: [
        {
          routeName: "index",
          title: "Accueil",
        },
        {
          title: "A l'affiche",
          active: true,
        },
      ],
    }
  },
  computed: {
    movies() {
      return [...this.$store.getters["movies/collection"]]
    },
  },
}
</script>
