<template>
  <div class="container">
    <c35-breadcrumb :crumbs="crumbs" />

    <div
      class="c35-movie-banner"
      :style="{
        'background-image':
          'url(https://media.senscritique.com/media/000019107216/1200/Filles_de_joie.jpg)',
      }"
    >
      <div class="row px-4">
        <div class="col-6 col-lg-9">
          <h1 class="c35-movie-title mt-5">
            La fureur de vaincre
          </h1>
          <h2 class="c35-movie-description ml-3 mt-3">
            La Mérière<br />
            à 15km
          </h2>
        </div>
        <div class="col-6 col-lg-3">
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
              class="nav-link active"
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
              class="nav-link"
              data-toggle="tab"
              href="#sessions"
              role="tab"
              aria-controls="sessions"
              aria-selected="false"
            >
              Scéance
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
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="informations-tab"
          >
            <c35-entity-informations :informations="informations" />
          </div>
          <div
            id="sessions"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="sessions-tab"
          >
            Content Sessions
          </div>
          <div
            id="reviews"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            Content Reviews
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import C35Breadcrumb from "~/components/partial/Breadcrumb"
import C35EntityInformations from "~/components/commons/EntityInformations"

export default {
  components: { C35Breadcrumb, C35EntityInformations },
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
          title: "{{Movie name}}",
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
