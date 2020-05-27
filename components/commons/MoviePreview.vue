<template>
  <!-- This is the component for movie preview -->
  <div class="cine35-movie-preview" @click="onClick">
    <img :src="`/previews/${movie.preview}`" alt="ALERTE" />
    <div class="cine35-movie-preview-overlay">
      <div class="cine35-movie-preview-overlay-text">
        <span>{{ movie.name }}</span>
        <div>
          de
          <template v-for="director in movie.directors">
            {{ `${director.firstName} ${director.lastName}` }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "C35MoviePreview",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$router.push({ name: "movies-id", params: { id: this.movie.id } })
    },
  },
}
</script>
