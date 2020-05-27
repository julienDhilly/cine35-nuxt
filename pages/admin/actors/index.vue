<template>
  <div>
    <c35-breadcrumb :crumbs="crumbs" />
    <c35-admin-list :collection="collection" @edit="onEdit" @delete="onDelete">
      <template #title="{model}">
        <span>{{ getActorFullName(model) }}</span>
      </template>
    </c35-admin-list>
    <nuxt-link
      :to="{ name: 'admin-actors-id', params: { id: 'new' } }"
      class="btn btn-primary mt-4"
    >
      Create new actor
    </nuxt-link>
  </div>
</template>

<script>
import C35Breadcrumb from "~/components/partial/Breadcrumb"
import C35AdminList from "~/components/commons/AdminList"

export default {
  layout: "admin",
  components: { C35Breadcrumb, C35AdminList },
  async fetch({ store }) {
    await store.dispatch("actors/fetch")
  },
  data() {
    return {
      crumbs: [
        {
          routeName: "admin",
          title: "Admin",
        },
        {
          title: "Actors",
          active: true,
        },
      ],
    }
  },
  computed: {
    collection() {
      return this.$store.getters["actors/collection"]
    },
  },
  methods: {
    getActorFullName(model) {
      return `${model.firstName} ${model.lastName}`
    },
    async onDelete(actor) {
      this.$store.dispatch("actors/delete", actor)
    },
    onEdit(model) {
      this.$nuxt.$router.push({
        name: `admin-actors-id`,
        params: {
          id: model.id,
        },
      })
    },
  },
}
</script>
