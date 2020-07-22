<template>
  <div>
    <div class="row">
      <div class="col-12">
        <c35-breadcrumb :crumbs="crumbs" />
      </div>
    </div>
    <div class="c35-section">
      <div class="row">
        <div class="col-12">
          <c35-strike>
            CONTACT
          </c35-strike>
        </div>
      </div>
      <div class="row mt-4">
        <div class="d-none d-md-block col-md-2"></div>
        <div class="col-12 col-md-8">
          <div class="text-center">
            <p>
              Vous souhaitez faire parvenir un message à l'équipe du site ?<br />
              Nous vous apporterons une réponse sous 72 heures.
            </p>
            <br />
            <p>
              ATTENTION : Vous allez écrire au webmaster de Cine35.com et non à
              un cinéma en particulier. Pour toute question concernant les
              billets, les réservations ou les tarifs, merci de contacter
              directement l'établissement concerné.
            </p>
          </div>

          <form class="mt-5">
            <div class="form-group row">
              <label
                for="name"
                class="col-4 col-md-3 col-form-label text-right"
              >
                Nom* :
              </label>
              <div class="col-8 col-md-9">
                <input id="name" type="text" class="form-control" required />
              </div>
            </div>
            <div class="form-group row">
              <label
                for="firstName"
                class="col-4 col-md-3 col-form-label text-right"
              >
                Prénom :
              </label>
              <div class="col-8 col-md-9">
                <input id="firstName" type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label
                for="email"
                class="col-4 col-md-3 col-form-label text-right"
              >
                Addresse mail* :
              </label>
              <div class="col-8 col-md-9">
                <input id="email" type="email" class="form-control" required />
              </div>
            </div>
            <div class="form-group row">
              <label
                for="object"
                class="col-4 col-md-3 col-form-label text-right"
              >
                Object :
              </label>
              <div class="col-8 col-md-9">
                <input id="object" type="text" class="form-control" required />
              </div>
            </div>
            <div class="form-group row">
              <label
                for="message"
                class="col-4 col-md-3 col-form-label text-right"
              >
                Message* :
              </label>
              <div class="col-8 col-md-9">
                <textarea id="message" class="form-control" row="5" required />
              </div>
            </div>
            <div class="text-center">
              <input
                class="btn btn-primary c35-btn"
                type="submit"
                value="Envoyer"
                style="text-transform: uppercase;"
              />
            </div>
          </form>
        </div>
        <div class="d-none d-md-block col-md-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import C35Breadcrumb from "~/components/partial/Breadcrumb"
import C35Strike from "~/components/commons/Strike"

export default {
  name: "C35Contact",
  components: { C35Breadcrumb, C35Strike },
  data() {
    return {
      crumbs: [
        {
          routeName: "index",
          title: "Accueil",
        },
        {
          title: "Contact",
          active: true,
        },
      ],
    }
  },
}
</script>
