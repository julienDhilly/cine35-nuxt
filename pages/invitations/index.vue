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
            Invitations
          </c35-strike>
        </div>
      </div>
      <div class="mx-auto mt-5 px-2" style="max-width: 800px;">
        <div class="text-center">
          <p>
            <strong>
              Cine35.com et ses partenaires vous invitent au cinéma !
            </strong>
          </p>
          <br />
          <p>
            ATTENTION : Vous allez écrire au webmaster de Cine35.com et non à un
            cinéma en particulier. Pour toute question concernant les billets,
            les réservations ou les tarifs, merci de contacter directement
            l'établissement concerné.
          </p>
          <br />
          <p>
            <strong>
              Informations importantes :
            </strong>
            <br />
            Vous pouvez demander des invitations pour plusieurs films.<br />
            Il est inutile de faire des demandes multiples avec le même nom pour
            une même séance, vous n'augmentez pas vos chances, seule la première
            validation est prise en compte.
          </p>
          <br />
          <br />
          <p>
            <strong>
              Cochez la séance qui vous intéresse :
            </strong>
          </p>
        </div>

        <form>
          <c35-invitation :id="1" />
          <c35-invitation :id="2" />
          <c35-invitation :id="3" />
          <c35-invitation :id="4" />
          <c35-invitation-inputs style="margin-top: 8rem;" />
          <c35-invitation-partners style="margin-top: 8rem;" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import C35Breadcrumb from "~/components/partial/Breadcrumb"
import C35Strike from "~/components/commons/Strike"
import C35Invitation from "~/components/commons/invitations/Invitation"
import C35InvitationInputs from "~/components/commons/invitations/InvitationInputs"
import C35InvitationPartners from "~/components/commons/invitations/InvitationPartners"

export default {
  name: "C35Invitations",
  components: {
    C35Breadcrumb,
    C35Strike,
    C35Invitation,
    C35InvitationInputs,
    C35InvitationPartners,
  },
  data() {
    return {
      crumbs: [
        {
          routeName: "index",
          title: "Accueil",
        },
        {
          title: "Invitations",
          active: true,
        },
      ],
    }
  },
}
</script>
