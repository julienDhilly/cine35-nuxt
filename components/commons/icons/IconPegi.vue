<template>
  <img
    v-if="pegi"
    :src="`/icons/picto_age_${pegi}_100.png`"
    :alt="`pagi ${pegi}`"
    :title="title"
    :width="width"
    data-toggle="tooltip"
    data-placement="top"
  />
</template>

<script>
export default {
  name: "C35IconPegi",
  props: {
    pegi: {
      type: Number,
      required: false,
      default: null,
    },
    width: {
      type: Number,
      required: false,
      default: 40,
    },
  },
  computed: {
    title() {
      switch (this.pegi) {
        case 3:
          return "Recommandé à partir de 3 ans"
        case 6:
          return "Recommandé à partir de 6 ans"
        case 10:
          return "Recommandé à partir de 10 ans"
        case 12:
          return "Interdit aux moins de 12 ans"
        case 16:
          return "Interdit aux moins de 16 ans"
        case 18:
          return "Interdit aux moins de 19 ans"
      }
      return null
    },
  },
}
</script>
