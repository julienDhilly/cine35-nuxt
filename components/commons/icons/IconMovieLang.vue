<template>
  <img
    v-if="lang"
    :src="imgSource"
    :alt="lang"
    :title="title"
    width="40"
    data-toggle="tooltip"
    data-placement="top"
  />
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
        case "vf":
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
    title() {
      switch (this.lang) {
        case "vf":
          return "Version française"
        case "vfad":
          return "Version française en audio description pour malvoyants"
        case "vfst":
          return "Version française sous-titrée pour malentendants"
        case "vo":
          return "Version originale"
        case "vost":
          return "Version originale sous-titrée"
      }
      return null
    },
  },
}
</script>
