<template>
  <img v-if="dimension" :src="imgSource" :alt="dimension" width="40" />
</template>

<script>
export default {
  name: "C35IconMovieDimension",
  props: {
    dimension: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    imgSource() {
      switch (this.dimension) {
        case "2d":
          return "/icons/picto_2d_100.png"
        case "3d":
          return "/icons/picto_3d_100.png"
      }
      return "/icons/picto_2d_100.png"
    },
  },
}
</script>
