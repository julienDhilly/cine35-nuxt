<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>
    <select :id="name" v-model="selected" class="custom-select">
      <template v-for="model in collection">
        <option :key="model.id" :value="model.id">
          <slot name="option" :model="model" />
        </option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  name: "C35Select",
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    collection: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: {},
    }
  },
  watch: {
    selected(id) {
      this.selectModel(id)
    },
  },
  methods: {
    selectModel(id) {
      if (id) {
        this.$emit("select", id)
      }
    },
  },
}
</script>
