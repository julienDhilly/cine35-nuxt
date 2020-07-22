<template>
  <div class="invitation-option">
    <div class="form-check invitation-option-title">
      <input
        :id="`input-${id}`"
        :value="id"
        class="form-check-input"
        style="margin-top: 10px;"
        type="radio"
        name="invitation-value"
        checked
      />
      <label class="form-check-label font-oswald" :for="`input-${id}`">
        SCOTT PILGRIM (2010)
      </label>
    </div>
    <div class="row mt-3">
      <div class="col-9">
        <c35-entity-informations :informations="informations" space="20px" />
      </div>
      <div class="col-3">
        <img src="/previews/eva_et_moi.jpg" alt="ALERTE" style="width: 100%;" />
      </div>
    </div>
  </div>
</template>

<script>
import C35EntityInformations from "~/components/commons/EntityInformations"

export default {
  components: {
    C35EntityInformations,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
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
          title: "Pays d'origine",
          content: "Hong Kong ",
        },
        {
          title: "Durée",
          content: "1h48",
        },
        {
          title: "CGR CINEMAS",
          content: "La Mézière",
        },
        {
          title: "11/06/2020",
          content: "10:45, 16:00 et 20:20",
        },
      ],
    }
  },
}
</script>
