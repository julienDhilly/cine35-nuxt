<template>
  <div>
    <c35-header />
    <div class="pub-container">
      <div class="container pt-4">
        <div class="row justify-content-center">
          <div id="google-ads-test-banner" class="c35-responsive-ads"></div>
        </div>
      </div>
    </div>
    <div id="main-container" class="pt-4">
      <div class="container-lg">
        <nuxt />
      </div>
    </div>
    <c35-footer />
    <!-- Modal -->
    <div
      id="exampleModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              Sélectionner une ville
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <c35-city-modal />
          <div class="modal-footer">
            <button
              id="never-ask-city"
              type="button"
              class="btn btn-link"
              data-dismiss="modal"
            >
              Ne plus demander
            </button>
            <button id="save-city-btn" type="button" class="btn btn-primary">
              Sélectionner
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import C35Header from "~/components/partial/Header.vue"
import C35Footer from "~/components/partial/Footer.vue"
import C35CityModal from "~/components/CityModal.vue"

export default {
  components: { C35Header, C35Footer, C35CityModal },
}
</script>
