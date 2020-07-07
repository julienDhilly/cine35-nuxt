<template>
  <div class="row c35-prog">
    <div class="c35-prog-poster col-sm-3">
      <img :src="`/previews/${prog.movie.preview}`" :alt="prog.movie.name" />
    </div>
    <div class="c35-prog-content col-12 col-sm-9">
      <div class="c35-prog-movie-title">
        {{ prog.movie.name }}
        <span> ({{ prog.movie.releaseYear }}) </span>
      </div>
      <div class="c35-prog-schedules">
        <c35-schedule
          v-for="(schedule, index) in prog.schedules"
          :key="index"
          :schedule="schedule"
        />
      </div>
    </div>
  </div>
</template>

<script>
import C35Schedule from "./Schedule"

export default {
  name: "C35Prog",
  components: { C35Schedule },
  props: {
    prog: {
      type: Object,
      required: true,
    },
  },
}
</script>
