<template>
  <div class="row c35-prog">
    <div class="c35-prog-poster col-sm-3">
      <a
        href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4"
        title="Voir Bluebird"
      >
        <img :src="`/previews/${prog.movie.preview}`" :alt="prog.movie.name" />
      </a>
    </div>
    <div class="c35-prog-content col-12 col-sm-9">
      <div class="c35-prog-movie-title">
        <a
          href="/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4"
          title="Voir Bluebird"
        >
          {{ prog.movie.name }}
        </a>
        <span> ({{ prog.movie.releaseYear }}) </span>
        <template v-if="prog.movie.pegi">
          <img
            :src="`/icons/picto_age_${prog.movie.pegi}_100.png`"
            width="40"
            :alt="`Pegi ${prog.movie.pegi}`"
          />
        </template>
      </div>
      <div class="c35-prog-schedules">
        <c35-schedule
          v-for="(schedule, index) in prog.schedules"
          :key="index"
          :schedule="schedule"
          class="ml-2"
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
