<template>
  <div>
    <c35-breadcrumb :crumbs="crumbs" />
    <c35-admin-list :collection="collection" @edit="onEdit" @delete="onDelete">
      <template #title="{model}">
        {{ model.name }}
      </template>
    </c35-admin-list>
    <nuxt-link
      :to="{ name: 'admin-movies-id', params: { id: 'new' } }"
      class="btn btn-primary mt-4"
    >
      Create new movie
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
    await store.dispatch("movies/fetch")
  },
  data() {
    return {
      crumbs: [
        {
          routeName: "admin",
          title: "Admin",
        },
        {
          title: "Movies",
          active: true,
        },
      ],
    }
  },
  computed: {
    collection() {
      return this.$store.getters["movies/collection"]
    },
  },
  methods: {
    async onDelete(model) {
      this.$store.dispatch("movies/delete", model)
    },
    onEdit(model) {
      this.$nuxt.$router.push({
        name: `admin-movies-id`,
        params: {
          id: model.id,
        },
      })
    },
  },
}
</script>
