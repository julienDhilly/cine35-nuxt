<template>
  <div>
    <div class="row">
      <div class="col-4 text-right">
        <strong>Salles participantes</strong>
      </div>
      <div class="col-4 text-center">
        <strong>Billets gratuits</strong>
      </div>
      <div class="col-4">
        <strong>Bons de réduction</strong>
      </div>
    </div>
    <template v-for="partner in partners">
      <div :key="partner.name" class="row mt-3">
        <div class="col-4 text-right">
          <strong>
            {{ partner.name }}
          </strong>
        </div>
        <div class="col-4 text-center">
          {{ partner.free }}
        </div>
        <div class="col-4">
          {{ partner.reduction }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          name: "Arvor",
          free: "oui",
          reduction: "non",
        },
        {
          name: "Ciné-TNB",
          free: "oui",
          reduction: "non",
        },
        {
          name: "Cinéville Bruz / Vern",
          free: "oui",
          reduction: "non",
        },
        {
          name: "Cinéma Gaumont",
          free: "oui",
          reduction: "non",
        },
        {
          name: "CGR Cinémas",
          free: "oui",
          reduction: "6,00 EUR",
        },
        {
          name: "Espérance",
          free: "non",
          reduction: "4,00 EUR",
        },
      ],
    }
  },
}
</script>
