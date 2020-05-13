<template>
  <div>
    <div class="row align-items-start">
      <template v-for="movie in movies">
        <c35-movie-preview
          :key="movie.id"
          :movie="movie"
          class="col-6 col-sm-3 col-md-2"
        />
      </template>
    </div>
  </div>
</template>

<script>
import C35MoviePreview from "~/components/commons/MoviePreview";

export default {
  components: { C35MoviePreview },
  async asyncData({ app }) {
    const querySnapshot = await app.$fireStore.collection("movies").get();
    const promises = querySnapshot.docs.map(async (doc) => {
      const movie = doc.data();

      // get actors
      const actorPromises = movie.actors.map((doc) => doc.get());
      const actorDocs = await Promise.all(actorPromises);
      const actors = actorDocs.map((doc) => doc.data());

      // get directors
      const directorPromises = movie.directors.map((doc) => doc.get());
      const directorDocs = await Promise.all(actorPromises);
      const directors = actorDocs.map((doc) => doc.data());

      return { id: doc.ref.id, name: doc.get("name"), actors, directors };
    });
    const movies = await Promise.all(promises);
    return {
      movies,
    };
  },
};
</script>
