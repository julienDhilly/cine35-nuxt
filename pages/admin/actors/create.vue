<template>
  <div class="container mt-4">
    <h3>Créer un acteur</h3>
    <form ref="form" @submit="onSubmit">
      <div class="form-group">
        <label for="actorFirstName">Prénom</label>
        <input
          type="text"
          class="form-control"
          id="actorFirstName"
          v-model="firstName"
          required
        />
      </div>
      <div class="form-group">
        <label for="actorLastName">Nom</label>
        <input
          type="text"
          class="form-control"
          id="actorLastName"
          v-model="lastName"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Créer</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      firstName: null,
      lastName: null,
    };
  },
  methods: {
    async onSubmit() {
      if (this.$refs.form.checkValidity()) {
        this.firstName;
        this.lastName;
        const actorsCollection = this.$fireStore.collection("actors");
        const { firstName, lastName } = this;
        await actorsCollection.doc(uuidv4()).set({
          firstName,
          lastName,
        });
      }
    },
  },
};
</script>
