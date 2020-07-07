<template>
  <a
    :href="`/cinemas/${cinema.id}`"
    class="c35-cinema-preview"
    style="background-image: url('/previews/cinemas/cineville.jpg');"
  >
    <div class="c35-cinema-preview-overlay"></div>
    <div class="c35-cinema-preview-content">
      <div class="c35-cinema-preview-title">
        {{ cinema.name }}
      </div>
      <div class="c35-cinema-preview-description">
        {{ cinema.city }} - {{ cinema.postalCode }}<br />à
        {{ cinema.distance }}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    cinema: {
      type: Object,
      required: true,
    },
  },
}
</script>
