<template>
  <div>
    <c35-header />
    <div class="container pt-4">
      <div class="row justify-content-center">
        <div class="c35-responsive-ads" />
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
import C35Header from "~/components/partial/Header.vue"

export default {
  components: { C35Header },
}
</script>
