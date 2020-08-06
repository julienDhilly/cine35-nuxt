<template>
  <div class="c35-movie-list-filters">
    <div class="c35-movie-list-filters-title mt-3">
      FILTRES
    </div>
    <div class="row mb-3">
      <div class="col-4">
        <div class="form-check">
          <input
            id="filter-all-public"
            type="checkbox"
            class="form-check-input c35-filter-input"
            data-filter-value="0"
          />
          <label class="form-check-label" for="filter-all-public">
            Tout public
          </label>
        </div>
      </div>

      <div class="col-4">
        <div class="text-left">
          Recommandé à partir de :
        </div>
        <div>
          <template v-for="(age, index) in recommendedAges">
            <div :key="index" class="form-check">
              <input
                :id="`filter-age-${age}`"
                type="checkbox"
                class="form-check-input c35-filter-input"
                :data-filter-value="age"
              />
              <label class="form-check-label" :for="`filter-age-${age}`">
                {{ age }} ans
              </label>
            </div>
          </template>
        </div>
      </div>

      <div class="col-4">
        <div class="text-left">
          Interdit aux moins de :
        </div>
        <div>
          <template v-for="(age, index) in forbiddenAges">
            <div :key="index" class="form-check">
              <input
                :id="`filter-age-${age}`"
                type="checkbox"
                class="form-check-input c35-filter-input"
                :data-filter-value="age"
              />
              <label class="form-check-label" :for="`filter-age-${age}`">
                {{ age }} ans
              </label>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "C35MoviePreviewListFilters",
  data() {
    return {
      recommendedAges: [3, 6, 10],
      forbiddenAges: [12, 16, 18],
    }
  },
}
</script>
