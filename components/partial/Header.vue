<template>
  <nav
    class="c35-header navbar sticky-top navbar-dark bg-dark navbar-expand-sm"
  >
    <nuxt-link to="/" class="navbar-brand">
      Cine35
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
            FILMS
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMovies">
            <nuxt-link to="/movies/onrelease" class="dropdown-item">
              A l'affiche
            </nuxt-link>
            <a class="dropdown-item" href="#">Prochainement</a>
            <a class="dropdown-item" href="#">Critiques</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            id="navbarDropdownMovies"
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            SALLES
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMovies">
            <nuxt-link to="/movies/onrelease" class="dropdown-item">
              A l'affiche
            </nuxt-link>
            <a class="dropdown-item" href="#">Prochainement</a>
            <a class="dropdown-item" href="#">Critiques</a>
          </div>
        </li>
        <li class="nav-item">
          <nuxt-link :to="{ name: 'admin' }" class="nav-link">
            ADMIN
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "C35Header",
  methods: {
    isActive(name) {
      const segments = this.$route.path.split("/")
      return segments[1] === name
    },
  },
}
</script>
