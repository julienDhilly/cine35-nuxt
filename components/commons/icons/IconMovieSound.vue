<template>
  <img
    v-if="sound"
    :src="imgSource"
    :alt="sound"
    :title="title"
    width="40"
    data-toggle="tooltip"
    data-placement="top"
  />
</template>

<script>
export default {
  name: "C35IconMovieSound",
  props: {
    sound: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    imgSource() {
      switch (this.sound) {
        case "7.1":
          return "/icons/picto_son_71_100.png"
        case "atmos":
          return "/icons/picto_son_atmos_100.png"
      }
      return null
    },
    title() {
      switch (this.sound) {
        case "7.1":
          return "Son Dolby 7.1"
        case "atmos":
          return "Son Dolby Atmos"
      }
      return null
    },
  },
}
</script>
