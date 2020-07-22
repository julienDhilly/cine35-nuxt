<template>
  <div id="news-page">
    <div class="row">
      <div class="col-12">
        <c35-breadcrumb :crumbs="crumbs" />
      </div>
    </div>
    <div class="c35-section">
      <div class="container-md px-1">
        <div class="row mx-n1">
          <div class="col-12 pl-1">
            <c35-strike>
              Actualité
            </c35-strike>
          </div>
        </div>
      </div>

      <div class="news-list mt-4">
        <div class="news row mx-auto">
          <div class="col-12 col-md-6">
            <a href="/news/123" title="Lire la suite">
              <img
                src="/images/news/all_inclusive.jpg"
                alt="All Inclusive"
                style="width: 100%;"
              />
            </a>
          </div>
          <div class="col-12 col-md-6 mt-2 mt-md-0">
            <div class="c35-block-title" style="max-width: 280px;">
              avant-première
            </div>
            <div class="h4 text-primary my-3">
              <a href="/news/123" title="Lire la suite">
                All Inclusive
              </a>
            </div>
            <div class="font-italic">
              Avant-première du film All Inclusive au CGR La Mézière. Mardi 12
              février à 21h30.
              <a href="/news/123" title="Lire la suite">
                Lire la suite
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div class="news row mx-auto">
          <div class="col-12 col-md-6">
            <a href="/news/123" title="Lire la suite">
              <img
                src="/images/news/bon_dieu.jpg"
                alt="All Inclusive"
                style="width: 100%;"
              />
            </a>
          </div>
          <div class="col-12 col-md-6 mt-2 mt-md-0">
            <div class="c35-block-title" style="max-width: 280px;">
              équipe de film
            </div>
            <div class="h4 text-primary my-3">
              <a href="/news/123" title="Lire la suite">
                Qu’est-ce qu’on a fait au bon dieu ?
              </a>
            </div>
            <div class="font-italic">
              L’équipe de Qu’est-ce qu’on a fait au bon dieu ? présente à
              Vern-sur-Seiche.
              <a href="/news/123" title="Lire la suite">
                Lire la suite
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div class="news row mx-auto">
          <div class="col-12 col-md-6">
            <a href="/news/123" title="Lire la suite">
              <img
                src="/images/news/all_inclusive.jpg"
                alt="All Inclusive"
                style="width: 100%;"
              />
            </a>
          </div>
          <div class="col-12 col-md-6 mt-2 mt-md-0">
            <div class="c35-block-title" style="max-width: 280px;">
              évenement
            </div>
            <div class="h4 text-primary my-3">
              <a href="/news/123" title="Lire la suite">
                Festival Court Métrange
              </a>
            </div>
            <div class="font-italic">
              Festival Court Métrange à Rennes du 25 mars au 14 avril 2019.
              <a href="/news/123" title="Lire la suite">
                Lire la suite
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import C35Strike from "~/components/commons/Strike"
import C35Breadcrumb from "~/components/partial/Breadcrumb"

export default {
  name: "C35SearchResult",
  components: {
    C35Strike,
    C35Breadcrumb,
  },
  data() {
    return {
      crumbs: [
        {
          routeName: "index",
          title: "Accueil",
        },
        {
          title: "Actualités",
          active: true,
        },
      ],
    }
  },
}
</script>
