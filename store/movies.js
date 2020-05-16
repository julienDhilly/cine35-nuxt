export const state = () => ({
  collection: [],
})

export const getters = {
  collection: (state) => state.collection,
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
      const actorPromises = movie.actors.map((doc) => doc.get())
      const actorDocs = await Promise.all(actorPromises)
      const actors = actorDocs.map((doc) => doc.data())

      // get directors
      const directorPromises = movie.directors.map((doc) => doc.get())
      const directorDocs = await Promise.all(directorPromises)
      const directors = directorDocs.map((doc) => doc.data())

      return { id: doc.ref.id, name: doc.get("name"), actors, directors }
    })
    const movies = await Promise.all(promises)
    commit("set", movies)
  },
}
