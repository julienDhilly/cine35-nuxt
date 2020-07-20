<template>
  <div>
    <div class="row">
      <div class="col-3">
        <a href="/cinemas/1541" title="Voir AUDITORIUM LE VOLUME">
          <img
            src="/previews/cinemas/cineville.jpg"
            alt=" AUDITORIUM LE VOLUME"
            style="width: 100%;"
          />
        </a>
      </div>
      <div class="col-9">
        <div class="h2 text-primary">
          <a
            href="/cinemas/1541"
            title="Voir AUDITORIUM LE VOLUME"
            class="text-uppercase"
          >
            AUDITORIUM LE VOLUME
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
  name: "C35ResultsCinemas",
  components: { C35EntityInformations },
  data() {
    return {
      informations: [
        {
          title: "Address",
          content:
            "Centre Culturel Le Volume, Avenue de la Chalotais 35770 Vern-sur-Seiche ",
        },
        {
          title: "Distance",
          content: "15km",
        },
        {
          title: "Nombre de films",
          content: "XX films à l’affiche dans ce cinéma ",
        },
      ],
    }
  },
}
</script>
