<template>
  <div>
    <div class="row">
      <div class="col-3">
        <a
          href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4"
          title="Just Kids"
        >
          <img
            src="/previews/just_kids.jpg"
            alt="Just kids"
            style="width: 100%;"
          />
        </a>
      </div>
      <div class="col-9">
        <div class="h3 text-primary" style="font-weight: 400;">
          <a
            href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4"
            title="Just Kids"
            class="text-uppercase"
          >
            Just Kids
          </a>
        </div>
        <c35-entity-informations
          :informations="informations"
          class="mt-4"
          space="1rem"
        />
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-3">
        <a
          href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4"
          title="Just Kids"
        >
          <img
            src="/previews/eva_et_moi.jpg"
            alt="Eva et moi"
            style="width: 100%;"
          />
        </a>
      </div>
      <div class="col-9">
        <div class="h3 text-primary" style="font-weight: 400;">
          <a
            href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4"
            title="Eva et moi"
            class="text-uppercase"
          >
            Eva et moi
          </a>
        </div>
        <c35-entity-informations
          :informations="informations"
          class="mt-4"
          space="1rem"
        />
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="col-3">
        <a href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4" title="Malmkrog">
          <img
            src="/previews/malmkrog.jpg"
            alt="Malmkrog"
            style="width: 100%;"
          />
        </a>
      </div>
      <div class="col-9">
        <div class="h3 text-primary" style="font-weight: 400;">
          <a
            href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4"
            title="Malmkrog"
            class="text-uppercase"
          >
            Malmkrog
          </a>
        </div>
        <c35-entity-informations
          :informations="informations"
          class="mt-4"
          space="1rem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import C35EntityInformations from "~/components/commons/EntityInformations"

export default {
  name: "C35ResultsMovies",
  components: { C35EntityInformations },
  data() {
    return {
      informations: [
        {
          title: "Réalisateur",
          content: "Lo Wei",
        },
        {
          title: "Casting",
          content: "Bruce Lee, Nora Miao, James Tien",
        },
        {
          title: "Date de sortie",
          content: "1972",
        },
        {
          title: "Pays d'origine",
          content: "Hong Kong",
        },
        {
          title: "Durée",
          content: "1h48",
        },
      ],
    }
  },
}
</script>
