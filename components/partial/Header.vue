<template>
  <nav class="navbar sticky-top navbar-dark bg-dark navbar-expand-lg">
    <nuxt-link to="/" class="navbar-brand">Cine35</nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Evenement</a>
        </li>
        <li class="nav-item">
          <nuxt-link to="/movies/onrelease" class="nav-link">
            A l'affiche
          </nuxt-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Prochainement</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Films</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Salles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Critiques</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <select class="custom-select form-control mr-sm-2">
          <option selected>Rechercher un film</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="custom-select form-control mr-sm-2">
          <option selected>Rechercher une salle</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "C35Header",
};
</script>
