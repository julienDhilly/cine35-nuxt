<template>
  <div id="page-invitations" class="container">
    <div class="row">
      <div class="col-12">
        <c35-breadcrumb :crumbs="crumbs" />
      </div>
    </div>
    <div class="c35-section">
      <div class="row">
        <div class="col-12">
          <c35-strike>
            Jeux
          </c35-strike>
        </div>
      </div>
      <div class="row">
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
  name: "C35Games",
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
          title: "Jeux",
          active: true,
        },
      ],
    }
  },
}
</script>
