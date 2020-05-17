export const state = () => ({
  collection: [],
})

export const getters = {
  collection: (state) => state.collection,
  findById: (state) => (id) =>
    state.collection.find((model) => model.id === id),
}

export const mutations = {
  add(state, models) {
    state.collection.push(...models)
  },
  set(state, models) {
    state.collection = models
  },
  remove(state, models) {
    models.forEach((model) => {
      const index = state.collection.findIndex((m) => m.id === model.id)
      if (index > -1) {
        state.collection.splice(index, 1)
      }
    })
  },
}

export const actions = {
  async fetch({ commit }) {
    const querySnapshot = await this.$fireStore.collection("actors").get()
    const promises = querySnapshot.docs.map(async (doc) => {
      const data = await doc.data()
      return Object.assign({}, data, { id: doc.id })
    })
    const actors = await Promise.all(promises)
    commit("set", actors)
  },
  async delete({ commit }, model) {
    await this.$fireStore.collection("actors").doc(model.id).delete()
    commit("remove", [model])
  },
}
