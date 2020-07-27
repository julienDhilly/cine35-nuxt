<template>
  <div id="news-page">
    <div class="row">
      <div class="col-12">
        <c35-breadcrumb :crumbs="crumbs" />
      </div>
    </div>
    <div class="c35-section">
      <div class="px-1">
        <div class="row mx-n1">
          <div class="col-12 pl-1">
            <c35-strike>
              avant-première
            </c35-strike>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div style="max-width: 900px;" class="mx-auto mt-3 col-12">
            <div class="mx-auto text-center" style="max-width: 500px;">
              <img
                src="/images/news/all_inclusive.jpg"
                alt="All inclusive"
                style="width: 100%;"
              />
            </div>

            <h1 class="h3 mt-4 text-center">
              All Inclusive
            </h1>

            <div class="mt-4">
              <p class="font-weight-bold text-left">
                Festival Court Métrange à Rennes du 25 mars au 14 avril 2019.
              </p>
              <p class="text-left">
                Ça faisait longtemps que l’envie de flâner du côté de l’Italie
                fantastique en ses plus prolifiques années nous caressait. Bien
                belle époque des Maestri, des débrouillards, des artisans bien
                inspirés ou des falsificateurs grandioses. Dans cette abondante
                production (dont nous ne retenons que les genres qui nous
                concernent) s’invitaient un érotisme vénéneux, un macabre
                spectaculaire et d’énigmatiques silhouettes en imper noir. De
                vertigineux voyages à l’italienne qui réveillent une nostalgie
                tenace. Comme une friandise dont on recule la dégustation pour
                mieux la savourer, nous nous sommes armés de patience, guettant
                l’occasion, l’herbe tendre. Elle se présenta sous la forme d’une
                rencontre inespérée avec le réalisateur d’argent, celui-là même
                qui régala nos pupilles de ses invraisemblables fantasmes
                colorés, toujours objets d’un culte féroce. Mais le prodige
                romain, après avoir donné son accord, dût finalement décliner
                l’invitation avec des excuses et sa bénédiction. Impossible d’en
                rester là. Nous nous vengeons de cette cruelle absence en nous
                emparant de deux œuvres incontournables du maestro que vous
                verrez dans leur version restaurée, Suspiria et Profondo Rosso.
              </p>
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
  name: "C35Critique",
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
          routeName: "movies-critiques",
          title: "Critiques",
        },
        {
          title: "Article",
          active: true,
        },
      ],
    }
  },
}
</script>
