<template>
  <div>
    <div class="c35-movie-list-filters d-none d-sm-block">
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

    <div
      id="c35-movie-filter-mobile-container"
      class="c35-movie-list-filters d-block d-sm-none mt-2"
    >
      <div class="c35-movie-list-filters-title d-flex">
        <button id="c35-btn-movie-filters-mobile" class="btn c35-btn-filter">
          <img
            src="/icons/picto_filters_black_100.png"
            width="20"
            class="mr-2"
          />
          <span>
            Filtres
          </span>
        </button>
        <button id="c35-btn-filter-movies-ok" class="ml-2 btn btn-primary">
          OK
        </button>
      </div>
      <div id="c35-filter-movie-filters-container" class="mt-1 mb-3">
        <div>
          <div class="form-check">
            <input
              id="filter-all-public-mobile"
              type="checkbox"
              class="form-check-input c35-filter-input"
              data-filter-value="0"
            />
            <label class="form-check-label" for="filter-all-public-mobile">
              Tout public
            </label>
          </div>
        </div>

        <div>
          <div class="mt-1">
            Recommandé à partir de :
          </div>
          <div>
            <template v-for="(age, index) in recommendedAges">
              <div :key="index" class="form-check">
                <input
                  :id="`filter-age-${age}-mobile`"
                  type="checkbox"
                  class="form-check-input c35-filter-input"
                  :data-filter-value="age"
                />
                <label
                  class="form-check-label"
                  :for="`filter-age-${age}-mobile`"
                >
                  {{ age }} ans
                </label>
              </div>
            </template>
          </div>
        </div>

        <div>
          <div class="mt-1">
            Interdit aux moins de :
          </div>
          <div>
            <template v-for="(age, index) in forbiddenAges">
              <div :key="index" class="form-check">
                <input
                  :id="`filter-age-${age}-mobile`"
                  type="checkbox"
                  class="form-check-input c35-filter-input"
                  :data-filter-value="age"
                />
                <label
                  class="form-check-label"
                  :for="`filter-age-${age}-mobile`"
                >
                  {{ age }} ans
                </label>
              </div>
            </template>
          </div>
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
