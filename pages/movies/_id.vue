<template>
  <div>
    <c35-breadcrumb :crumbs="crumbs" />

    <div
      class="c35-movie-banner"
      :style="{
        'background-image':
          'url(https://media.senscritique.com/media/000019107216/1200/Filles_de_joie.jpg)',
      }"
    >
      <div class="row px-4">
        <div class="col-12 col-sm-9">
          <div class="d-flex mt-5">
            <h1 class="c35-movie-title">
              La fureur de vaincre
            </h1>
            <span>
              <img
                src="/icons/picto_age_10_100.png"
                alt="Pegi 10"
                class="ml-4"
                style="width: 55px;"
                title=" Recommandé à partir de 10 ans"
                data-toggle="tooltip"
                data-placement="top"
              />
            </span>
          </div>
          <h2 class="c35-movie-description ml-3 mt-3">
            La Mérière<br />
            à 15km
          </h2>
        </div>
        <div class="col-12 d-none d-sm-flex col-sm-3">
          <img :src="`/previews/bluebird.jpg`" alt="ALERTE" />
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
              aria-selected="true"
            >
              Informations
            </a>
          </li>
          <li class="nav-item">
            <a
              id="sessions-tab"
              class="nav-link active"
              data-toggle="tab"
              href="#sessions"
              role="tab"
              aria-controls="sessions"
              aria-selected="false"
            >
              Séance
            </a>
          </li>
          <li class="nav-item">
            <a
              id="reviews-tab"
              class="nav-link"
              data-toggle="tab"
              href="#reviews"
              role="tab"
              aria-controls="reviews"
              aria-selected="false"
            >
              Critiques
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
            <c35-entity-informations :informations="informations" />
            <div class="mt-5 d-flex justify-content-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/momDLiUwqzM"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div
            id="sessions"
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="sessions-tab"
          >
            <c35-prog-list />
          </div>
          <div
            id="reviews"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            <c35-movie-critique />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import C35Breadcrumb from "~/components/partial/Breadcrumb"
import C35EntityInformations from "~/components/commons/EntityInformations"
import C35ProgList from "~/components/partial/movie/ProgList"
import C35MovieCritique from "~/components/partial/movie/MovieCritique"

export default {
  components: {
    C35Breadcrumb,
    C35EntityInformations,
    C35ProgList,
    C35MovieCritique,
  },
  data() {
    return {
      crumbs: [
        {
          routeName: "index",
          title: "Accueil",
        },
        {
          title: "Films",
        },
        {
          title: "La fureur de vaincre",
          active: true,
        },
      ],
      informations: [
        {
          title: "Réalisateur",
          content: "Lo Wei",
        },
        {
          title: "Pays d'origine",
          content: "Hong Kong",
        },
        {
          title: "Titre original",
          content: "Jing wu men",
        },
        {
          title: "Durée",
          content: "1h48",
        },
        {
          title: "Année",
          content: "1972",
        },
        {
          title: "Date de sortie nationale",
          content: "XX/XX/1972",
        },
        {
          title: "Genre",
          content: "Kung-fu, action, drame",
        },
        {
          title: "Casting",
          content: "Bruce Lee, Nora Miao, James Tien, ...",
        },
        {
          title: "Synopsis",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate odio sed risus volutpat, eget elementum diam auctor. Etiam auctor efficitur lacus. Ut molestie quam vel felis hendrerit, quis finibus sapien porta. Phasellus venenatis vehicula arcu ut interdum.  eleifend. Curabitur ac mi non ligula sollicitudin commodo. Ut sed dolor sit amet elit placerat congue. Vestibulum est nulla, vehicula vitae.",
        },
      ],
    }
  },
}
</script>
