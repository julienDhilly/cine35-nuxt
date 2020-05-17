<template>
  <div class="container pt-4 pb-4">
    <c35-breadcrumb :crumbs="crumbs" />
    <template v-if="notFound">
      Model not found
    </template>
    <template v-else>
      <form ref="form" @submit.prevent="onSubmit">
        <div class="row">
          <div class="col-12 col-sm-6">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                id="name"
                v-model="model.name"
                type="text"
                class="form-control"
                required
              />
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="form-group">
              <label for="duration">Duration (s)</label>
              <input
                id="duration"
                v-model="model.duration"
                type="number"
                class="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-sm-6">
            <div class="form-group">
              <label for="preview">Preview image</label>
              <input
                id="preview"
                v-model="model.preview"
                type="text"
                class="form-control"
                required
              />
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="form-group">
              <label for="cover">Cover image</label>
              <input
                id="cover"
                v-model="model.cover"
                type="text"
                class="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="synopsis">Synopsis</label>
          <textarea id="synopsis" class="form-control" rows="3"></textarea>
        </div>

        <div class="row">
          <div class="col-12 col-sm-6">
            <div class="mb-3">
              <label>Actors</label>
              <ul class="list-group">
                <template v-for="actor in model.actors">
                  <li
                    :key="actor.id"
                    class="list-group-item d-flex justify-content-between align-items-stretch align-items-center"
                  >
                    {{ actor.firstName }}
                    <div>
                      <a href="#" @click.prevent="onRemoveActor(actor)">
                        remove
                      </a>
                    </div>
                  </li>
                </template>
              </ul>
            </div>

            <c35-select
              name="actors"
              label="Add an actor"
              :collection="limitedActors"
              @select="onSelectActor"
            >
              <template #option="props">
                {{ props.model.firstName }}
              </template>
            </c35-select>
          </div>

          <div class="col-12 col-sm-6">
            <div class="mb-3">
              <label>Directors</label>
              <ul class="list-group">
                <template v-for="director in model.directors">
                  <li
                    :key="director.id"
                    class="list-group-item d-flex justify-content-between align-items-stretch align-items-center"
                  >
                    {{ director.firstName }}
                    <div>
                      <a href="#" @click.prevent="onRemoveDirector(director)">
                        remove
                      </a>
                    </div>
                  </li>
                </template>
              </ul>
            </div>

            <c35-select
              name="directors"
              label="Add an director"
              :collection="limitedDirectors"
              @select="onSelectDirector"
            >
              <template #option="props">
                {{ props.model.firstName }}
              </template>
            </c35-select>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Save
        </button>
      </form>
    </template>
  </div>
</template>

<script>
import { cloneDeep } from "lodash"
import { v4 as uuidv4 } from "uuid"
import C35Breadcrumb from "~/components/partial/Breadcrumb"
import C35Select from "~/components/commons/forms/Select"

export default {
  components: { C35Breadcrumb, C35Select },
  async fetch({ store }) {
    await store.dispatch("actors/fetch")
    await store.dispatch("directors/fetch")
  },
  async asyncData({ store, params }) {
    const { id } = params
    const crumbs = [
      {
        routeName: "admin",
        title: "Admin",
      },
      {
        routeName: "admin-movies",
        title: "Movies",
      },
    ]
    if (id !== "new") {
      await store.dispatch("movies/fetch")
      const model = cloneDeep(store.getters["movies/findById"](id))
      if (model) {
        return {
          id,
          model,
          crumbs: [
            ...crumbs,
            {
              title: "Edit",
              active: true,
            },
          ],
        }
      } else {
        return {
          id,
          notFound: true,
          crumbs: [
            ...crumbs,
            {
              title: "Not found",
              active: true,
            },
          ],
        }
      }
    } else {
      return {
        crumbs: [
          ...crumbs,
          {
            title: "New",
            active: true,
          },
        ],
      }
    }
  },
  data() {
    return {
      notFound: false,
      id: null,
      model: {
        id: null,
        name: null,
        duration: null,
        synopsis: null,
        preview: null,
        cover: null,
        actors: [],
        directors: [],
      },
      limitedActors: [],
      limitedDirectors: [],
    }
  },
  computed: {
    actors() {
      return this.$store.getters["actors/collection"]
    },
    directors() {
      return this.$store.getters["directors/collection"]
    },
  },
  async created() {
    this.builLimitedActors()
    this.builLimitedDirectors()
  },
  methods: {
    builLimitedActors() {
      const ids = this.model.actors.map((actor) => actor.id)
      this.limitedActors = this.actors.filter(
        (actor) => !ids.includes(actor.id)
      )
    },
    builLimitedDirectors() {
      const ids = this.model.directors.map((director) => director.id)
      this.limitedDirectors = this.directors.filter(
        (model) => !ids.includes(model.id)
      )
    },
    async onSubmit() {
      if (this.$refs.form.checkValidity()) {
        const {
          name,
          duration,
          preview,
          cover,
          synopsis,
          actors,
          directors,
        } = this.model
        const collection = this.$fireStore.collection("movies")
        const id = this.model.id || uuidv4()
        await collection.doc(id).set({
          name,
          synopsis,
          duration,
          preview,
          cover,
          actors: actors.map((model) => model.id),
          directors: directors.map((model) => model.id),
        })

        this.$router.push({
          name: "admin-movies",
        })
      }
    },
    onRemoveActor(model) {
      const index = this.model.actors.findIndex(
        (actor) => actor.id === model.id
      )
      if (index > -1) {
        this.model.actors.splice(index, 1)
        this.builLimitedActors()
      }
    },
    onSelectActor(id) {
      const model = this.$store.getters["actors/findById"](id)
      this.model.actors.push(model)
      this.builLimitedActors()
    },
    onRemoveDirector(model) {
      const index = this.model.directors.findIndex(
        (director) => director.id === model.id
      )
      if (index > -1) {
        this.model.directors.splice(index, 1)
        this.builLimitedDirectors()
      }
    },
    onSelectDirector(id) {
      const model = this.$store.getters["directors/findById"](id)
      if (model) {
        this.model.directors.push(model)
        this.builLimitedDirectors()
      } else {
        console.error("unknown director", id)
      }
    },
  },
}
</script>
