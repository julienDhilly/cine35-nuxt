<template>
  <div class="c35-section">
    <div class="row">
      <div class="col-12">
        <c35-strike>
          Les salles les plus proches
        </c35-strike>
      </div>
    </div>
    <div class="row mx-n1">
      <template v-for="(cinema, index) in cinemas">
        <div
          :key="cinema.id"
          :class="{
            'd-none': index > 1,
            'd-lg-block': index > 1,
          }"
          class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-lg-6 py-1 px-1"
        >
          <c35-cinema-preview :cinema="cinema" />
        </div>
      </template>
    </div>
    <div class="text-center mt-3">
      <nuxt-link :to="{ name: 'cinemas' }" class="btn btn-primary c35-btn">
        Voir toutes les salles
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import C35Strike from "~/components/commons/Strike"
import C35CinemaPreview from "~/components/commons/CinemaPreview"

export default {
  name: "C35HomeCinemas",
  components: {
    C35Strike,
    C35CinemaPreview,
  },
  data() {
    return {
      cinemas: [
        {
          id: 1541,
          name: "CGR la mézière",
          city: "La Mézière",
          postalCode: "35520",
          distance: "15km",
        },
        {
          id: 846,
          name: "Gaumont Rennes",
          city: "Rennes",
          postalCode: "35000",
          distance: "1km",
        },
        {
          id: 98746,
          name: "CGR la mézière",
          city: "La Mézière",
          postalCode: "35520",
          distance: "15km",
        },
        {
          id: 181,
          name: "Gaumont Rennes",
          city: "Rennes",
          postalCode: "35000",
          distance: "1km",
        },
      ],
    }
  },
}
</script>
