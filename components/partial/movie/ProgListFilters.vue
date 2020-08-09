<template>
  <div>
    <div class="c35-prog-list-filters d-none d-md-block">
      <div class="c35-prog-list-filters-title font-rubik">
        Filtres
      </div>

      <template v-for="group in groups">
        <div :key="group.name" class="mt-2">
          <div class="c35-prog-list-filters-group-title text-capitalize">
            {{ group.name }}
          </div>
          <div class="c35-prog-list-filters-group">
            <template v-for="filter in group.filters">
              <div
                :key="`${group.key}-${filter.value}`"
                class="c35-prog-list-filter"
              >
                <input
                  :id="`${group.key}-${filter.value}`"
                  type="checkbox"
                  :data-group="group.key"
                  :value="filter.value"
                />
                <label :for="`${group.key}-${filter.value}`">
                  {{ filter.label }}
                </label>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>

    <div
      id="c35-prog-list-filters-mobile-container"
      class="c35-prog-list-filters d-block d-md-none mb-2"
    >
      <div class="c35-prog-list-filters-mobile-title d-flex">
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
        <button id="c35-btn-filter-prog-list-ok" class="ml-2 btn btn-primary">
          OK
        </button>
      </div>
      <div id="c35-prog-list-filters-filters-container" class="mt-1 mb-3">
        <template v-for="group in groups">
          <div :key="group.name" class="mt-2">
            <div class="c35-prog-list-filters-group-title text-capitalize">
              {{ group.name }}
            </div>
            <div class="c35-prog-list-filters-group">
              <template v-for="filter in group.filters">
                <div
                  :key="`${group.key}-${filter.value}`"
                  class="c35-prog-list-filter"
                >
                  <input
                    :id="`mobile-${group.key}-${filter.value}`"
                    type="checkbox"
                    :data-group="group.key"
                    :value="filter.value"
                  />
                  <label :for="`mobile-${group.key}-${filter.value}`">
                    {{ filter.label }}
                  </label>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "C35ProgListFilters",
  data() {
    return {
      groups: [
        {
          name: "Version",
          key: "lang",
          filters: [
            {
              label: "VF",
              value: "vf",
            },
            {
              label: "VFAD",
              value: "vfad",
            },
            {
              label: "VFST",
              value: "vfst",
            },
            {
              label: "VO",
              value: "vo",
            },
            {
              label: "VOSTF",
              value: "vostfr",
            },
          ],
        },
        {
          name: "Formart",
          key: "dimension",
          filters: [
            {
              label: "2D",
              value: "2d",
            },
            {
              label: "3D",
              value: "3d",
            },
          ],
        },
        {
          name: "image",
          key: "format",
          filters: [
            {
              label: "2K",
              value: "2k",
            },
            {
              label: "4K",
              value: "4k",
            },
            {
              label: "4K+",
              value: "4k+",
            },
          ],
        },
        {
          name: "confort",
          key: "confort",
          filters: [
            {
              label: "ICE",
              value: "ice",
            },
            {
              label: "DC",
              value: "dc",
            },
            {
              label: "4DX",
              value: "4dx",
            },
          ],
        },
        {
          name: "son",
          key: "sound",
          filters: [
            {
              label: "Dolby 7.1",
              value: "7.1",
            },
            {
              label: "Dolby Atmos",
              value: "atmos",
            },
          ],
        },
      ],
    }
  },
}
</script>
