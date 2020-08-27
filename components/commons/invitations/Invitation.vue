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
        <c35-entity-informations
          :informations="informations"
          classes="style2"
          space="10px"
        />
        <div class="mt-3">
          <div class="font-weight-bold">
            CGR CINEMAS - La Mézière
          </div>
          <div class="mt-2">
            24/09/2020
          </div>
          <div class="font-weight-bold">
            12:30, 20:30
          </div>
          <div class="mt-2">
            25/09/2020
          </div>
          <div>12:30, 20:30</div>
        </div>
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
          title: "Acteurs",
          content: "Bruce Lee, Nora Miao, James Tien",
        },
        {
          title: "Nationalité",
          content: "Hong Kong ",
        },
        {
          title: "Année",
          content: "2020",
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
