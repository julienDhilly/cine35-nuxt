<template>
  <div id="news-page" class="container">
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
              Critiques
            </c35-strike>
          </div>
        </div>
      </div>

      <div class="news-list mt-4">
        <div class="text-center mb-4">
          <a
            href="/movies/critiques/list"
            title="Voir la liste des critiques"
            class="btn btn-primary c35-btn"
            style="padding-left: 2rem; padding-right: 2rem; font-size: 1.2rem;"
          >
            Voir la liste des critiques
          </a>
        </div>
        <div class="news row mx-auto">
          <div class="col-12 col-md-6">
            <a
              href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
              title="Lire la critique"
            >
              <img
                src="/images/critiques/le_dahlia_noir.jpg"
                alt="Le dahlia noir"
                style="width: 100%;"
              />
            </a>
          </div>
          <div class="col-12 col-md-6 mt-2 mt-md-0">
            <div class="c35-block-title" style="max-width: 280px;">
              LE DAHLIA NOIR
            </div>
            <div class="h4 text-primary my-3">
              <a
                href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
                title="Lire la critique"
              >
                par Martin G.
              </a>
            </div>
            <div class="font-italic">
              Un désastre d’1h45”.
              <a
                href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
                title="Lire la critique"
              >
                Lire la critique
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div class="news row mx-auto">
          <div class="col-12 col-md-6">
            <a
              href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
              title="Lire la critique"
            >
              <img
                src="/images/critiques/un_apresmidi_de_chien.png"
                alt="Un après-midi de chien"
                style="width: 100%;"
              />
            </a>
          </div>
          <div class="col-12 col-md-6 mt-2 mt-md-0">
            <div class="c35-block-title" style="max-width: 280px;">
              Un après-midi de chien
            </div>
            <div class="h4 text-primary my-3">
              <a
                href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
                title="Lire la critique"
              >
                par Laura T.
              </a>
            </div>
            <div class="font-italic">
              “Le chef d’oeuvre de son auteur”.
              <a
                href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
                title="Lire la critique"
              >
                Lire la critique
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div class="news row mx-auto">
          <div class="col-12 col-md-6">
            <a
              href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
              title="Lire la critique"
            >
              <img
                src="/images/critiques/les_tortues_ninja.jpg"
                alt="Les tortues ninja"
                style="width: 100%;"
              />
            </a>
          </div>
          <div class="col-12 col-md-6 mt-2 mt-md-0">
            <div class="c35-block-title" style="max-width: 280px;">
              Les tortues ninja
            </div>
            <div class="h4 text-primary my-3">
              <a
                href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
                title="Lire la critique"
              >
                par John G.
              </a>
            </div>
            <div class="font-italic">
              Vous reprendrez bien de la pizza ?
              <a
                href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
                title="Lire la critique"
              >
                Lire la critique
              </a>
            </div>
          </div>
        </div>
      </div>

      <c35-pagination class="mt-4" />
    </div>
  </div>
</template>

<script>
import C35Strike from "~/components/commons/Strike"
import C35Breadcrumb from "~/components/partial/Breadcrumb"
import C35Pagination from "~/components/commons/Pagination"

export default {
  name: "C35Critiques",
  components: {
    C35Strike,
    C35Breadcrumb,
    C35Pagination,
  },
  data() {
    return {
      crumbs: [
        {
          routeName: "index",
          title: "Accueil",
        },
        {
          title: "Critiques",
          active: true,
        },
      ],
    }
  },
}
</script>
