<template>
  <div class="container mt-4">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link to="/admin/">
            Admin
          </nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Directors
        </li>
      </ol>
    </nav>

    <ul class="list-group">
      <template v-for="model in directors">
        <li
          :key="model.id"
          class="list-group-item d-flex justify-content-between align-items-stretch"
        >
          <span>{{ getActorFullName(model) }}</span>
          <button class="btn btn-outline-danger" @click="onDelete(actor)">
            Supprimer
          </button>
        </li>
      </template>
    </ul>
    <nuxt-link to="/admin/directors/create" class="btn btn-primary mt-4">
      Create new director
    </nuxt-link>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch("directors/fetch")
  },
  computed: {
    directors() {
      return this.$store.getters["directors/collection"]
    },
  },
  methods: {
    getActorFullName(model) {
      return `${model.firstName} ${model.lastName}`
    },
    async onDelete(actor) {
      this.$store.dispatch("directors/delete", actor)
    },
  },
}
</script>
