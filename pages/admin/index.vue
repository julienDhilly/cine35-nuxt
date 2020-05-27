<template>
  <div>
    <c35-breadcrumb :crumbs="crumbs" />

    <ul class="list-group mt-4">
      <li class="list-group-item">
        <nuxt-link :to="{ name: 'admin-actors' }">
          Manage actors
        </nuxt-link>
      </li>
      <li class="list-group-item">
        <nuxt-link :to="{ name: 'admin-directors' }">
          Manage directors
        </nuxt-link>
      </li>
      <li class="list-group-item">
        <nuxt-link :to="{ name: 'admin-movies' }">
          Manage movies
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import C35Breadcrumb from "~/components/partial/Breadcrumb"

export default {
  layout: "admin",
  components: { C35Breadcrumb },
  data() {
    return {
      crumbs: [{ title: "Admin", active: true }],
    }
  },
}
</script>
