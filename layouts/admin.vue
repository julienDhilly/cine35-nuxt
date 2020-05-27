<template>
  <div>
    <c35-header />
    <div class="container py-4">
      <div class="row">
        <div class="col-12">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import C35Header from "~/components/partial/Header.vue"

export default {
  components: { C35Header },
}
</script>
