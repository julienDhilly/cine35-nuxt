<template>
  <nav
    class="c35-header navbar sticky-top navbar-dark bg-dark navbar-expand-lg"
  >
    <nuxt-link id="logo" to="/" class="navbar-brand">
      <c35-logo />
    </nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li
          class="nav-item dropdown"
          :class="{ 'header-dropdown-active': isActive('movies') }"
        >
          <a
            id="navbarDropdownMovies"
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            films
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMovies">
            <nuxt-link to="/movies/onrelease" class="dropdown-item">
              A l'affiche
            </nuxt-link>
            <nuxt-link to="/movies/comingsoon" class="dropdown-item">
              Prochainement
            </nuxt-link>
            <nuxt-link to="/movies/critiques" class="dropdown-item">
              Critiques
            </nuxt-link>
          </div>
        </li>
        <li
          class="nav-item"
          :class="{ 'header-dropdown-active': isActive('cinemas') }"
        >
          <nuxt-link :to="{ name: 'cinemas' }" class="nav-link">
            Salles
          </nuxt-link>
        </li>
        <li
          class="nav-item"
          :class="{ 'header-dropdown-active': isActive('news') }"
        >
          <nuxt-link :to="{ name: 'news' }" class="nav-link">
            actualités
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="{ name: 'invitations' }" class="nav-link">
            invitations
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="{ name: 'games' }" class="nav-link">
            jeux
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="{ name: 'newsletter' }" class="nav-link">
            newsletter
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="{ name: 'contact' }" class="nav-link">
            contact
          </nuxt-link>
        </li>
      </ul>
      <form
        class="form-inline mr-2 my-2 my-lg-0 ml-2 ml-lg-0"
        action="/results"
      >
        <input
          name="search"
          type="text"
          class="form-control"
          placeholder="Rechercher..."
          aria-label="Rechercher"
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="submit">
            <img src="/icons/picto_search_white_100.png" width="20" />
          </button>
        </div>
      </form>
    </div>
  </nav>
</template>

<script>
import C35Logo from "~/components/Logo.vue"

export default {
  name: "C35Header",
  components: { C35Logo },
  methods: {
    isActive(name) {
      const segments = this.$route.path.split("/")
      return segments[1] === name
    },
  },
}
</script>
