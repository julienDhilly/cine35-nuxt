<template>
  <div class="container mt-4">
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
  async asyncData({ app }) {
    const querySnapshot = await app.$fireStore.collection("actors").get();
    const promises = querySnapshot.docs.map(async (doc) => {
      const data = await doc.data();
      return Object.assign({}, data, { id: doc.id });
    });
    const actors = await Promise.all(promises);
    return {
      actors,
    };
  },
  methods: {
    getActorFullName(actor) {
      return `${actor.firstName} ${actor.lastName}`;
    },
    async onDelete(actor) {
      await this.$fireStore.collection("actors").doc(actor.id).delete();
      const index = this.actors.findIndex((a) => a.id === actor.id);
      this.actors.splice(index, 1);
    },
  },
};
</script>
