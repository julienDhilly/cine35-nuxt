<template>
  <div class="c35-section">
    <div class="container-md px-1">
      <div v-if="title" class="row mx-n1">
        <div class="col-12 pl-1">
          <c35-strike>
            {{ title }}
          </c35-strike>
        </div>
      </div>
      <slot name="before-list" />
      <div class="row mx-n1">
        <template v-for="(movie, index) in movies">
          <div :key="movie.id" :class="responsiveClasses(index)">
            <c35-movie-preview :movie="movie" />
          </div>
        </template>
      </div>
      <template v-if="linkToMoreName">
        <div class="text-center mt-3">
          <nuxt-link
            :to="{ name: linkToMoreName }"
            class="btn btn-primary c35-btn"
          >
            {{ linkToMoreTitle }}
          </nuxt-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import C35MoviePreview from "~/components/commons/MoviePreview"
import C35Strike from "~/components/commons/Strike"

export default {
  name: "C35MoviePreviewList",
  components: { C35MoviePreview, C35Strike },
  props: {
    movies: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
    limited: {
      type: Boolean,
      required: false,
      default: null,
    },
    linkToMoreName: {
      type: String,
      required: false,
      default: null,
    },
    linkToMoreTitle: {
      type: String,
      required: false,
      default: null,
    },
    nbPreviewPerLineLg: {
      type: Number,
      required: false,
      default: 4,
    },
  },
  methods: {
    responsiveClasses(index) {
      const classes = [
        "col-6",
        "col-sm-3",
        "col-md-3",
        `col-lg-${12 / this.nbPreviewPerLineLg}`,
        `col-xl-${12 / this.nbPreviewPerLineLg}`,
        "py-1",
        "px-1",
      ]
      if (this.limited) {
        if (index > 3) {
          classes.push("d-none d-lg-block")
        }
      }

      return classes
    },
    onClick() {
      this.$router.push({ name: this.linkToMore })
    },
  },
}
</script>
