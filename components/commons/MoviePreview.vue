<template>
  <!-- This is the component for movie preview -->
  <a
    class="c35-movie-preview"
    :href="`/movies/${movie.id}`"
    :title="movie.name"
    :data-filter-pegi="pegi"
  >
    <img :src="`/previews/${movie.preview}`" alt="ALERTE" />
    <div class="c35-movie-preview-overlay">
      <div class="c35-movie-preview-overlay-text">
        <span>{{ movie.name }}</span>
        <div>
          {{ directors }}<br />
          {{ realeseYear }}<br />
          {{ duration }}
        </div>
      </div>
    </div>
  </a>
</template>

<script>
function secondsToHms(d) {
  d = Number(d)
  const h = Math.floor(d / 3600)
  const m = Math.floor((d % 3600) / 60)
  //   const s = Math.floor((d % 3600) % 60)

  const hDisplay = h > 0 ? `${h}h` : ""
  const mDisplay = m > 0 ? (m < 10 ? `0${m}m` : `${m}m`) : ""
  //  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return hDisplay + mDisplay
}

export default {
  name: "C35MoviePreview",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      pegi: null,
    }
  },
  computed: {
    directors() {
      const directors = this.movie.directors.map(
        ({ firstName, lastName }) => `${firstName} ${lastName}`
      )
      return directors.join(",")
    },
    realeseYear() {
      return "2018"
    },
    duration() {
      return secondsToHms(this.movie.duration)
    },
  },
  created() {
    const pegies = [0, 3, 6, 10, 12, 16, 18]
    const rand = Math.floor(Math.random() * pegies.length)
    this.pegi = pegies[rand]
  },
}
</script>
