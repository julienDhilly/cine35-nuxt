<template>
  <div class="c35-entity-informations">
    <template v-for="(information, index) in informations">
      <div :key="index" class="row c35-entity-informations-row" :style="style">
        <div class="col-12 col-md-4 col-lg-3 c35-entity-informations-col-left">
          {{ information.title }} :
        </div>
        <div class="col-12 col-md-8 col-lg-9">
          {{ information.content }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "C35EntityInformations",
  props: {
    informations: {
      type: Array,
      required: true,
    },
    space: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    style() {
      if (this.space) {
        return { paddingBottom: this.space }
      }
      return {}
    },
  },
}
</script>
