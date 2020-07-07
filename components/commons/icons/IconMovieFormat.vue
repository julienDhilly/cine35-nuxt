<template>
  <img v-if="format" :src="imgSource" :alt="format" width="40" />
</template>

<script>
export default {
  name: "C35IconMovieFormat",
  props: {
    format: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    imgSource() {
      switch (this.format) {
        case "35mm":
          return "/icons/picto_image_35mm_100.png"
        case "4k":
          return "/icons/picto_image_4k_100.png"
        case "4k+":
          return "/icons/picto_image_4Kplus_100.png"
      }
      return "/icons/picto_image_4k_100.png"
    },
  },
}
</script>
