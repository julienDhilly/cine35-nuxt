<template>
  <img
    v-if="confort"
    :src="imgSource"
    :alt="confort"
    :title="title"
    width="40"
    data-toggle="tooltip"
    data-placement="top"
  />
</template>

<script>
export default {
  name: "C35IconMovieConfort",
  props: {
    confort: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    imgSource() {
      switch (this.confort) {
        case "4dx":
          return "/icons/picto_confort_4dx_100.png"
        case "dc":
          return "/icons/picto_confort_dc_100.png"
        case "ice":
          return "/icons/picto_confort_ice_100.png"
        case "ice_lv":
          return "/icons/picto_confort_ice_lv_100.png"
      }
      return null
    },
    title() {
      switch (this.confort) {
        case "4dx":
          return "Salle dynamique 4DX"
        case "dc":
          return "Salle Dolby Cinema"
        case "ice":
          return "Salle Immersive Cinema Experience"
        case "ice_lv":
          return "Salle Immersive Cinema Experience + Light Vibes"
      }
      return null
    },
  },
}
</script>
