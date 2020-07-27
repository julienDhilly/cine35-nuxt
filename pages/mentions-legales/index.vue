<template>
  <div id="page-mention-legales">
    <div class="row">
      <div class="col-12">
        <c35-breadcrumb :crumbs="crumbs" />
      </div>
    </div>
    <div class="c35-section">
      <div class="row">
        <div class="col-12">
          <c35-strike>
            Mentions légales
          </c35-strike>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          [Placer le contenue de la page ici]
        </div>
      </div>
    </div>
  </div>
</template>

ate>

<script>
import C35Breadcrumb from "~/components/partial/Breadcrumb"
import C35Strike from "~/components/commons/Strike"

export default {
  name: "C35Legal",
  components: {
    C35Breadcrumb,
    C35Strike,
  },
  data() {
    return {
      crumbs: [
        {
          routeName: "index",
          title: "Accueil",
        },
        {
          title: "Mentions Légales",
          active: true,
        },
      ],
    }
  },
}
</script>
