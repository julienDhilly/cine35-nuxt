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
          Actors
        </li>
      </ol>
    </nav>

    <ul class="list-group">
      <template v-for="actor in actors">
        <li
          :key="actor.id"
          class="list-group-item d-flex justify-content-between align-items-stretch"
        >
          <span>{{ getActorFullName(actor) }}</span>
          <button class="btn btn-outline-danger" @click="onDelete(actor)">
            Supprimer
          </button>
        </li>
      </template>
    </ul>
    <nuxt-link to="/admin/actors/create" class="btn btn-primary mt-4">
      Créer un acteur
    </nuxt-link>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch("actors/fetch")
  },
  computed: {
    actors() {
      return this.$store.getters["actors/collection"]
    },
  },
  methods: {
    getActorFullName(actor) {
      return `${actor.firstName} ${actor.lastName}`
    },
    async onDelete(actor) {
      this.$store.dispatch("actors/delete", actor)
    },
  },
}
</script>
