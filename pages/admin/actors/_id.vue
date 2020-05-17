<template>
  <div class="container pt-4">
    <c35-breadcrumb :crumbs="crumbs" />
    <template v-if="notFound">
      Model not found
    </template>
    <template v-else>
      <form ref="form" @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="actorFirstName">Prénom</label>
          <input
            id="actorFirstName"
            v-model="model.firstName"
            type="text"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="actorLastName">Nom</label>
          <input
            id="actorLastName"
            v-model="model.lastName"
            type="text"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Save
        </button>
      </form>
    </template>
  </div>
</template>

<script>
import { cloneDeep } from "lodash"
import { v4 as uuidv4 } from "uuid"
import C35Breadcrumb from "~/components/partial/Breadcrumb"

export default {
  components: { C35Breadcrumb },
  async asyncData({ store, params }) {
    const { id } = params
    const crumbs = [
      {
        routeName: "admin",
        title: "Admin",
      },
      {
        routeName: "admin-actors",
        title: "Actors",
      },
    ]
    if (id !== "new") {
      await store.dispatch("actors/fetch")
      const model = cloneDeep(store.getters["actors/findById"](id))
      if (model) {
        return {
          id,
          model,
          crumbs: [
            ...crumbs,
            {
              title: "Edit",
              active: true,
            },
          ],
        }
      } else {
        return {
          id,
          notFound: true,
          crumbs: [
            ...crumbs,
            {
              title: "Not found",
              active: true,
            },
          ],
        }
      }
    } else {
      return {
        crumbs: [
          ...crumbs,
          {
            title: "New",
            active: true,
          },
        ],
      }
    }
  },
  data() {
    return {
      notFound: false,
      id: null,
      model: {
        id: null,
        firstName: null,
        lastName: null,
      },
      crumbs: [
        {
          routeName: "admin",
          title: "Admin",
        },
        {
          routeName: "admin-actors",
          title: "Actors",
        },
        {
          title: "Create",
          active: true,
        },
      ],
    }
  },
  methods: {
    async onSubmit() {
      if (this.$refs.form.checkValidity()) {
        const { firstName, lastName } = this.model
        const collection = this.$fireStore.collection("actors")
        const id = this.model.id || uuidv4()
        await collection.doc(id).set({
          firstName,
          lastName,
        })
        this.$router.push({
          name: "admin-actors",
        })
      }
    },
  },
}
</script>
