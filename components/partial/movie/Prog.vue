<template>
  <div class="row c35-prog">
    <div class="c35-prog-content col-12">
      <div class="c35-prog-movie-title">
        <a href="/cinemas/1541" title="Voir CGR La Mézière">
          {{ prog.cinema.name }}
        </a>
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
