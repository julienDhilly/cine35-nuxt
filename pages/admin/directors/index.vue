<template>
  <div>
    <c35-breadcrumb :crumbs="crumbs" />
    <c35-admin-list :collection="directors" @edit="onEdit" @delete="onDelete">
      <template #title="{model}">
        <span>{{ getActorFullName(model) }}</span>
      </template>
    </c35-admin-list>
    <nuxt-link
      :to="{ name: 'admin-directors-id', params: { id: 'new' } }"
      class="btn btn-primary mt-4"
    >
      Create new director
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
    await store.dispatch("directors/fetch")
  },
  data() {
    return {
      crumbs: [
        {
          routeName: "admin",
          title: "Admin",
        },
        {
          title: "Directors",
          active: true,
        },
      ],
    }
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
    async onDelete(model) {
      this.$store.dispatch("directors/delete", model)
    },
    onEdit(model) {
      this.$nuxt.$router.push({
        name: `admin-directors-id`,
        params: {
          id: model.id,
        },
      })
    },
  },
}
</script>
