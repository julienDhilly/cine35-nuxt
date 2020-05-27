<template>
  <div class="container-md">
    <div class="row">
      <div class="col-12 col-lg-8">
        <c35-movie-preview-list
          :movies="movies"
          limited
          title="A l'affiche"
          link-to-more="movies-onrelease"
        />
        <c35-movie-preview-list
          :movies="movies"
          limited
          title="Prochainement"
          class="mt-3"
        />
      </div>
      <div class="col-12 col-lg-4">
        <div class="c35-sidebar-block">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h3>Actualités</h3>
                <div class="mt-3">
                  <div class="c35-sidebar-content-wrapper">
                    <div class="row">
                      <div class="col-5 pr-1 my-auto">
                        <div class="c35-sibera-content-title">
                          événement
                        </div>
                      </div>
                      <div class="col-7 pl-1">
                        <div class="c35-sibera-content-desc">
                          Festibal
                          <span class="text-primary font-weight-bold">
                            Court métrange
                          </span>
                          à Rennes du 25 mars au 14 avril 2019
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="c35-sidebar-content-wrapper">
                    <div class="row">
                      <div class="col-5 pr-1 my-auto">
                        <div class="c35-sibera-content-title">
                          avant-première
                        </div>
                      </div>
                      <div class="col-7 pl-1">
                        <div class="c35-sibera-content-desc">
                          <span class="text-primary font-weight-bold">
                            All inclusive
                          </span>
                          au CGR La Mézière. Mardi 12 février à 21h30
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="c35-sidebar-content-wrapper">
                    <div class="row">
                      <div class="col-5 pr-1 my-auto">
                        <div class="c35-sibera-content-title">
                          événement
                        </div>
                      </div>
                      <div class="col-7 pl-1">
                        <div class="c35-sibera-content-desc">
                          Festibal Court métrange à Rennes du 25 mars au 14
                          avril 2019
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="c35-sibera-content-action">
                  <a class="btn btn-primary c35-btn">
                    Voir toutes les actualités
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="c35-sidebar-block">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h3>critiques</h3>
                <div class="mt-3">
                  <div class="c35-sidebar-content-wrapper">
                    <div class="row">
                      <div class="col-5 pr-1 my-auto">
                        <div class="c35-sibera-content-title">
                          événement
                        </div>
                      </div>
                      <div class="col-7 pl-1">
                        <div class="c35-sibera-content-desc">
                          Festibal
                          <span class="text-primary font-weight-bold">
                            Court métrange
                          </span>
                          à Rennes du 25 mars au 14 avril 2019
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="c35-sidebar-content-wrapper">
                    <div class="row">
                      <div class="col-5 pr-1 my-auto">
                        <div class="c35-sibera-content-title">
                          avant-première
                        </div>
                      </div>
                      <div class="col-7 pl-1">
                        <div class="c35-sibera-content-desc">
                          <span class="text-primary font-weight-bold">
                            All inclusive
                          </span>
                          au CGR La Mézière. Mardi 12 février à 21h30
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="c35-sidebar-content-wrapper">
                    <div class="row">
                      <div class="col-5 pr-1 my-auto">
                        <div class="c35-sibera-content-title">
                          événement
                        </div>
                      </div>
                      <div class="col-7 pl-1">
                        <div class="c35-sibera-content-desc">
                          Festibal Court métrange à Rennes du 25 mars au 14
                          avril 2019
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="c35-sibera-content-action">
                  <a class="btn btn-primary c35-btn">
                    Voir toutes les actualités
                  </a>
                </div>
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
