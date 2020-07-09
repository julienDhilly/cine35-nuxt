<template>
  <div class="c35-prog-schedule">
    <div class="c35-prog-schedule-dates">
      <template v-if="schedule.startDate !== schedule.endDate">
        <div>Du {{ schedule.startDate }}</div>
        <div>au {{ schedule.endDate }}</div>
      </template>
      <template v-else>
        <div>Le {{ schedule.startDate }}</div>
      </template>
    </div>
    <div class="c35-prog-schedule-hours-icons d-block d-lg-flex">
      <div class="c35-prog-schedule-hours">
        {{ hours }}
      </div>
      <div class="c35-prog-schedule-icons">
        <c35-icon-movie-lang :lang="schedule.lang" />
        <c35-icon-movie-dimension :dimension="schedule.dimension" />
        <c35-icon-movie-format :format="schedule.format" />
        <c35-icon-movie-sound :sound="schedule.sound" />
        <c35-icon-movie-confort :confort="schedule.confort" />
      </div>
    </div>
  </div>
</template>

<script>
import C35IconMovieLang from "~/components/commons/icons/IconMovieLang.vue"
import C35IconMovieDimension from "~/components/commons/icons/IconMovieDimension.vue"
import C35IconMovieFormat from "~/components/commons/icons/IconMovieFormat.vue"
import C35IconMovieSound from "~/components/commons/icons/IconMovieSound.vue"
import C35IconMovieConfort from "~/components/commons/icons/IconMovieConfort.vue"

export default {
  name: "C35Schedule",
  components: {
    C35IconMovieLang,
    C35IconMovieDimension,
    C35IconMovieFormat,
    C35IconMovieSound,
    C35IconMovieConfort,
  },
  props: {
    schedule: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hours() {
      return this.schedule.hours.join(", ")
    },
  },
}
</script>
