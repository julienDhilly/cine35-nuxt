<template>
  <img v-if="lang" :src="imgSource" :alt="lang" width="40" />
</template>

<script>
export default {
  name: "C35IconMovieLang",
  props: {
    lang: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    imgSource() {
      switch (this.lang) {
        case "fr":
          return "/icons/picto_version_vf_100.png"
        case "vfad":
          return "/icons/picto_version_vfad_100.png"
        case "vfst":
          return "/icons/picto_version_vfst_100.png"
        case "vo":
          return "/icons/picto_version_vo_100.png"
        case "vost":
          return "/icons/picto_version_vost_100.png"
      }
      return "/icons/picto_version_vf_100.png"
    },
  },
}
</script>
