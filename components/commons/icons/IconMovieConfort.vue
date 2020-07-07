<template>
  <img v-if="confort" :src="imgSource" :alt="confort" width="40" />
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
  },
}
</script>
