<template>
  <div>
    <div class="row">
      <div class="col-12">
        <c35-breadcrumb :crumbs="crumbs" />
      </div>
    </div>
    <div class="c35-section mb-4">
      <div class="container-md px-1">
        <div class="row mx-n1">
          <div class="col-12 pl-1">
            <c35-strike>
              Résultats de recherche
            </c35-strike>
          </div>
        </div>
      </div>
      <div class="mt-4 text-center">
        <div>
          3 résultats trouvés pour la recherche suivante
        </div>
        <div class="h2 text-primary">
          "Fureur"
        </div>
      </div>
    </div>

    <div class="c35-section mb-4">
      <div class="container-md px-1">
        <div class="row mx-n1">
          <div class="col-12 pl-1">
            <c35-strike>
              Résultats de recherche
            </c35-strike>
          </div>
        </div>
      </div>
      <div class="mt-4 text-center">
        <div>
          0 résultats trouvés pour la recherche suivante
        </div>
        <div class="h2 text-primary">
          "Xfhjgd"
        </div>
        <p class="mt-4">
          Vérifiez l’orthographe de chaque mot de votre <br />recherche ou
          essayez essayez avec d’autres mots clés.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <ul class="nav nav-tabs c35-nav-tabs" role="tablist">
          <li class="nav-item">
            <a
              id="movies-tab"
              class="nav-link active"
              data-toggle="tab"
              href="#movies"
              role="tab"
              aria-controls="movies"
              aria-selected="true"
            >
              Films (3)
            </a>
          </li>
          <li class="nav-item">
            <a
              id="cinemas-tab"
              class="nav-link"
              data-toggle="tab"
              href="#cinemas"
              role="tab"
              aria-controls="cinemas"
              aria-selected="false"
            >
              Salles (0)
            </a>
          </li>
        </ul>
        <div class="tab-content c35-tab-content">
          <div
            id="movies"
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="movies-tab"
          >
            <c35-result-movies />
          </div>
          <div
            id="cinemas"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="cinemas-tab"
          >
            <c35-result-cinemas />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import C35Strike from "~/components/commons/Strike"
import C35Breadcrumb from "~/components/partial/Breadcrumb"
import C35ResultMovies from "~/components/partial/results/Movies"
import C35ResultCinemas from "~/components/partial/results/Cinemas"

export default {
  name: "C35SearchResult",
  components: {
    C35Strike,
    C35Breadcrumb,
    C35ResultMovies,
    C35ResultCinemas,
  },
  data() {
    return {
      crumbs: [
        {
          routeName: "index",
          title: "Accueil",
        },
        {
          title: "Résultats de recherche",
          active: true,
        },
      ],
    }
  },
}
</script>
