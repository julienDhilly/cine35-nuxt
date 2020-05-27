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
      <div class="row mx-n1">
        <template v-for="(movie, index) in movies">
          <div :key="movie.id" :class="responsiveClasses(index)">
            <c35-movie-preview :movie="movie" />
          </div>
        </template>
      </div>
    </div>
  </div>
  <!-- <div
          v-if="limited"
          class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-2 py-1 px-1"
          @click="onClick"
        >
          <div class="c35-more">
            <div>
              <span>Voir plus</span>
              <svg
                class="bi bi-arrow-right-short"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div> -->
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
    linkToMore: {
      type: String,
      required: false,
      default: null,
    },
  },
  methods: {
    responsiveClasses(/*index*/) {
      const classes = [
        "col-6",
        "col-sm-4",
        "col-md-3",
        "col-lg-3",
        "col-xl-3",
        "py-1",
        "px-1",
      ]
      // if (this.limited) {
      //   if (index > 3) {
      //     classes.push("d-none d-sm-block")
      //   }
      //   if (index > 4) {
      //     classes.push("d-xl-none")
      //   } else {
      //     classes.push("d-xl-block")
      //   }
      // }

      return classes
    },
    onClick() {
      this.$router.push({ name: this.linkToMore })
    },
  },
}
</script>
