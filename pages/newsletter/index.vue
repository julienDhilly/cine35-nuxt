<template>
  <div id="page-invitations">
    <div class="row">
      <div class="col-12">
        <c35-breadcrumb :crumbs="crumbs" />
      </div>
    </div>
    <div class="c35-section">
      <div class="row">
        <div class="col-12">
          <c35-strike>
            NEWSLETTER
          </c35-strike>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="text-center">
            <p>
              <strong>
                INSCRIPTION
              </strong>
              <br />
              <br />
              Vous souhaitez recevoir gratuitement les infos cinéma par email ?
              <br />
              <br />
              Avant-premières
              <br />
              Sorties nationales
              <br />
              Annonces des jeux
              <br />
              Cadeaux...
              <br />
              <br />
              Pour s'inscrire c'est très simple, entrez votre e-mail ci-dessous.
            </p>
          </div>

          <form class="mt-4">
            <div class="form-group row">
              <label for="email" class="col-sm-3 col-form-label text-sm-right">
                Addresse mail* :
              </label>
              <div class="col-sm-9">
                <input id="email" type="email" class="form-control" required />
              </div>
            </div>
            <div class="text-center">
              <input
                class="btn btn-primary c35-btn"
                type="submit"
                value="S'inscrire"
              />
            </div>
          </form>

          <div class="text-center mt-5">
            <p>
              <strong>
                DÉSINSCRIPTION
              </strong>
              <br />
              <br />
              Vous recevez actuellement les infos cinéma par email et vous
              souhaitez vous désinscrire ?
              <br />
              Entrez votre e-mail ci-dessous, vous ne recevrez plus aucune
              information.
            </p>
          </div>

          <form class="mt-4">
            <div class="form-group row">
              <label for="email" class="col-sm-3 col-form-label text-sm-right">
                Addresse mail* :
              </label>
              <div class="col-sm-9">
                <input id="email" type="email" class="form-control" required />
              </div>
            </div>
            <div class="text-center">
              <input
                class="btn btn-primary c35-btn"
                type="submit"
                value="Se désinscrire"
              />
            </div>
          </form>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import C35Breadcrumb from "~/components/partial/Breadcrumb"
import C35Strike from "~/components/commons/Strike"

export default {
  name: "C35Invitations",
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
          title: "Newsletter",
          active: true,
        },
      ],
    }
  },
}
</script>
