<template>
  <div id="movie-page">
    <c35-breadcrumb :crumbs="crumbs" />

    <div
      class="c35-movie-banner"
      style="background-image: url('/previews/cinemas/cineville.jpg');"
    >
      <div class="row px-4">
        <div class="col-12 col-sm-6">
          <h1 class="c35-movie-title mt-5">
            CGR LA MÉZIÈRE
          </h1>
          <h2 class="c35-movie-description ml-3 mt-3">
            Mézière - 35520
          </h2>
        </div>
        <div class="col-12 d-none d-sm-block col-sm-6 text-right">
          <img
            class="c35-movie-banner-poster"
            src="/logos/cgr.png"
            alt="CGR La Mézière"
          />
        </div>
      </div>
    </div>

    <div class="row pt-4">
      <div class="col-12">
        <ul class="nav nav-tabs c35-nav-tabs" role="tablist">
          <li class="nav-item">
            <a
              id="informations-tab"
              class="nav-link"
              data-toggle="tab"
              href="#informations"
              role="tab"
              aria-controls="informations"
              aria-selected="false"
            >
              Informations
            </a>
          </li>
          <li class="nav-item">
            <a
              id="sessions-tab"
              class="nav-link active"
              data-toggle="tab"
              href="#programmation"
              role="tab"
              aria-controls="sessions"
              aria-selected="true"
            >
              Programmation
            </a>
          </li>
        </ul>
        <div class="tab-content c35-tab-content c35-movie-tab-informations">
          <div
            id="informations"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="informations-tab"
          >
            <div class="c35-cinema-title d-flex justify-content-between mb-4">
              <div>
                <h1>CGR LA MÉZIÈRE/</h1>
                <h2>Mézière</h2>
                <div class="c35-distance">
                  à 15km
                </div>
              </div>
              <div class="mt-2">
                <a
                  href="https://www.facebook.com/CGRLaMeziere/"
                  title="page facebook"
                  target="_blank"
                  class="mr-3"
                >
                  <img
                    src="/icons/picto_fb_100.png"
                    alt="page facebook"
                    width="40"
                  />
                </a>
                <a
                  href="https://www.cgrcinemas.fr/lameziere/"
                  title="page facebook"
                  target="_blank"
                  class="mr-3"
                >
                  <img
                    src="/icons/picto_web_100.png"
                    alt="site internet"
                    width="40"
                  />
                </a>
              </div>
            </div>
            <c35-entity-informations :informations="informations" />
          </div>
          <div
            id="programmation"
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="sessions-tab"
          >
            <c35-prog-list />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import C35Breadcrumb from "~/components/partial/Breadcrumb"
import C35EntityInformations from "~/components/commons/EntityInformations"
import C35ProgList from "~/components/partial/cinema/ProgList"

export default {
  components: { C35Breadcrumb, C35EntityInformations, C35ProgList },
  data() {
    return {
      crumbs: [
        {
          routeName: "index",
          title: "Accueil",
        },
        {
          title: "Salle",
        },
        {
          title: "{{Cinema name}}",
          active: true,
        },
      ],
      informations: [
        {
          title: "Adresse",
          content: "Zone de Millet, ZAC de Cap Malo, 35520 La Mézière",
        },
        {
          title: "Tarifs",
          content: "10 € / 5 € étudiants / 3 € enfants",
        },
        {
          title: "Nombre de salles",
          content: "7 salles dont une 4DX 4K",
        },
        {
          title: "Nombre de places",
          content: "546 places",
        },
        {
          title: "Informations complémentaires",
          content:
            "Avant-premières, événements et espaces privatisables dans une chaîne de cinémas multiplexes grand public.",
        },
      ],
    }
  },
}
</script>
