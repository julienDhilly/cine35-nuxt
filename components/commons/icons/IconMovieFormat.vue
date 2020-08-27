<template>
  <img
    v-if="format && imgSource"
    :src="imgSource"
    :alt="format"
    :title="title"
    width="40"
    data-toggle="tooltip"
    data-placement="top"
  />
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
      return null
    },
    title() {
      switch (this.format) {
        case "35mm":
          return "Format pellicule 35 mm"
        case "4k":
          return "Format numérique 4K"
        case "4k+":
          return "Format numérique 4K+"
      }
      return null
    },
  },
}
</script>
