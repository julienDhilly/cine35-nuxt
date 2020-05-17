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
}

export const actions = {
  async fetch({ commit }) {
    const querySnapshot = await this.$fireStore.collection("movies").get()
    const promises = querySnapshot.docs.map(async (doc) => {
      const movie = doc.data()

      // get actors
      const actorIds = movie.actors
      const actorPromises = actorIds.map((docId) =>
        this.$fireStore.collection("actors").doc(docId).get()
      )
      const actorDocs = await Promise.all(actorPromises)
      const actors = actorDocs.map((doc) => ({
        id: doc.ref.id,
        ...doc.data(),
      }))

      // get directors
      const directorIds = movie.directors
      const directorPromises = directorIds.map((docId) =>
        this.$fireStore.collection("directors").doc(docId).get()
      )
      const directorDocs = await Promise.all(directorPromises)
      const directors = directorDocs.map((doc) => ({
        id: doc.ref.id,
        ...doc.data(),
      }))

      const { name, duration, preview, cover, synopsis } = doc.data()
      return {
        id: doc.ref.id,
        name,
        duration,
        preview,
        cover,
        synopsis,
        actors,
        directors,
      }
    })
    const movies = await Promise.all(promises)
    commit("set", movies)
  },
}
