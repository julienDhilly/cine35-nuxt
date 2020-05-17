<template>
  <ul class="list-group">
    <template v-for="model in collection">
      <li
        :key="model.id"
        class="list-group-item d-flex justify-content-between align-items-stretch align-items-center"
      >
        <slot name="title" :model="model" />
        <div>
          <button class="btn btn-outline-primary btn-sm" @click="onEdit(model)">
            Edit
          </button>
          <button
            class="btn btn-outline-danger btn-sm"
            @click="onDelete(model)"
          >
            Delete
          </button>
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: "C35AdminList",
  props: {
    collection: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onEdit(model) {
      this.$emit("edit", model)
    },
    onDelete(model) {
      this.$emit("delete", model)
    },
  },
}
</script>
