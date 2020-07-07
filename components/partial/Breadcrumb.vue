<template>
  <nav v-if="crumbs.length" class="c35-breadcrumb" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <template v-for="(crumb, index) in crumbs">
        <li
          :key="index"
          class="breadcrumb-item"
          :class="{ active: crumb.active }"
          aria-current="page"
        >
          <nuxt-link v-if="crumb.routeName" :to="{ name: crumb.routeName }">
            {{ crumb.title }}
          </nuxt-link>
          <template v-else>
            {{ crumb.title }}
          </template>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "C35Breadcrumb",
  props: {
    crumbs: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>
