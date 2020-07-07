<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <c35-breadcrumb :crumbs="crumbs" />
        <c35-movie-preview-list
          title="A l'affiche"
          :movies="movies"
          :nb-preview-per-line-lg="6"
        >
          <template #before-list>
            <c35-movie-preview-list-filters />
          </template>
        </c35-movie-preview-list>
      </div>
    </div>
  </div>
</template>

<script>
import C35Breadcrumb from "~/components/partial/Breadcrumb"
import C35MoviePreviewList from "~/components/commons/MoviePreviewList"
import C35MoviePreviewListFilters from "~/components/commons/MoviePreviewListFilters"

export default {
  components: {
    C35Breadcrumb,
    C35MoviePreviewList,
    C35MoviePreviewListFilters,
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
