<template>
  <div>
    <div class="row">
      <div class="col-12">
        <c35-breadcrumb :crumbs="crumbs" />
      </div>
    </div>
    <div class="c35-section">
      <div class="row">
        <div class="col-12">
          <c35-strike>
            Salles
          </c35-strike>
        </div>
      </div>
      <div class="text-right mb-3">
        <div class="btn btn-primary c35-btn c35-geoloc-btn">
          Voir les salles autour de moi
        </div>
      </div>
      <div class="row mx-n1">
        <template v-for="cinema in cinemas">
          <div
            :key="cinema.id"
            class="col-12 col-md-6 col-lg-4 col-lg-4 py-1 px-1"
          >
            <c35-cinema-preview :cinema="cinema" />
          </div>
        </template>
      </div>
      <c35-pagination class="mt-3" />
    </div>
  </div>
</template>

<script>
import C35Breadcrumb from "~/components/partial/Breadcrumb"
import C35Strike from "~/components/commons/Strike"
import C35CinemaPreview from "~/components/commons/CinemaPreview"
import C35Pagination from "~/components/commons/Pagination"

export default {
  components: {
    C35Breadcrumb,
    C35Strike,
    C35CinemaPreview,
    C35Pagination,
  },
  data() {
    return {
      crumbs: [
        {
          routeName: "index",
          title: "Accueil",
        },
        {
          title: "Salles",
          active: true,
        },
      ],
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
        {
          id: 451,
          name: "CGR la mézière",
          city: "La Mézière",
          postalCode: "35520",
          distance: "15km",
        },
        {
          id: 2156,
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
