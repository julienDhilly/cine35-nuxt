<template>
  <div>
    <c35-header />
    <div class="container py-4">
      <div class="row justify-content-center">
        <div id="google-ads-test-banner" class="c35-responsive-ads"></div>
      </div>
    </div>
    <nuxt />
    <c35-footer />
  </div>
</template>

<script>
import C35Header from "~/components/partial/Header.vue"
import C35Footer from "~/components/partial/Footer.vue"

export default {
  components: { C35Header, C35Footer },
}
</script>
