<template>
  <div id="home-page" class="container-md">
    <div class="row">
      <div class="col c35-col-left">
        <c35-movie-preview-list
          :movies="movies"
          link-to-more-title="Voir tous les films à l'affiche"
          link-to-more-name="movies-onrelease"
          limited
          title="À l'affiche"
        />
        <c35-movie-preview-list
          :movies="movies"
          link-to-more-title="Voir toutes les prochaines sorties"
          link-to-more-name="movies-comingsoon"
          limited
          title="Prochainement"
          class="mt-3"
        />
        <c35-home-cinemas class="mt-3" />
        <c35-home-box-office class="mt-3 mb-3" :movies="movies" />
      </div>
      <div class="col c35-col-right">
        <c35-home-news-sidebar />
        <c35-home-critiques-sidebar />

        <!-- pub 300x600 -->
        <div class="c35-sidebar-block d-none d-lg-block">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div
                  id="google-ads-test-colomn-1"
                  class="c35-responsive-ads-colomn"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- plugin Faceboob 300x500 -->
        <div class="c35-sidebar-block d-none d-lg-block">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <!-- replace content by Facebook plugin -->
                <div
                  style="width: 300px; height: 500px; background: #cccccc;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import C35MoviePreviewList from "~/components/commons/MoviePreviewList"
import C35HomeNewsSidebar from "~/components/partial/home/NewsSidebar"
import C35HomeCritiquesSidebar from "~/components/partial/home/CritiquesSidebar"
import C35HomeCinemas from "~/components/partial/home/Cinemas"
import C35HomeBoxOffice from "~/components/partial/home/BoxOffice"

export default {
  components: {
    C35MoviePreviewList,
    C35HomeNewsSidebar,
    C35HomeCritiquesSidebar,
    C35HomeCinemas,
    C35HomeBoxOffice,
  },
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
