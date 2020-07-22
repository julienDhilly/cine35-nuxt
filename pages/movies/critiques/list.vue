<template>
  <div id="critiques-list-page">
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
              Liste des critiques
            </c35-strike>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <div class="h4">
          A
        </div>
        <ul>
          <li>
            <a
              href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
              title="Voir la critique"
            >
              Akira
            </a>
          </li>
          <li>
            <a
              href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
              title="Voir la critique"
            >
              Aladdin
            </a>
          </li>
          <li>
            <a
              href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
              title="Voir la critique"
            >
              Avengers
            </a>
          </li>
        </ul>
      </div>

      <div class="mt-4">
        <div class="h4">
          B
        </div>
        <ul>
          <li>
            <a
              href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
              title="Voir la critique"
            >
              Batman
            </a>
          </li>
          <li>
            <a
              href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
              title="Voir la critique"
            >
              Battle Royale
            </a>
          </li>
          <li>
            <a
              href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
              title="Voir la critique"
            >
              Bienvenue chez les Ch'tis
            </a>
          </li>
        </ul>
      </div>

      <div class="mt-4">
        <div class="h4">
          C
        </div>
        <ul>
          <li>
            <a
              href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4?tabIndex=3"
              title="Voir la critique"
            >
              ...
            </a>
          </li>
        </ul>
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
  name: "C35CritiquesList",
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
          routeName: "movies-critiques",
          title: "Critiques",
        },
        {
          title: "Liste des critiques",
          active: true,
        },
      ],
    }
  },
}
</script>
