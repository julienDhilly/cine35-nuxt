# cine35-nuxt

> Cine35 website

## Requirement (for development)

- git (https://gitforwindows.org/)
- node (https://nodejs.org/en/download/)
- npm (https://www.npmjs.com/get-npm)
- an IDE, like VS Code (https://code.visualstudio.com/download)

## Build Setup (for development)

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## HTML pages (integration)

All HTML files is located in `realese` folder. This is the result of the command `npm run generate`.

## Components

All components are separeted in differents files located in `./component` folder.

### Navigation bar (menu)

```HTML
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
    </div>
  </nav>
```

### Movie preview

```HTML
 <!-- This is the component for movie preview -->
  <div class="cine35-movie-preview">
    <img src="http://www.cine35.com/Affiches/14372.jpg" alt="ALERTE" />
    <div class="cine35-movie-preview-overlay">
      <div class="cine35-movie-preview-overlay-text">
        <span>{{ movie.name }}</span>
        <div>de {{ directors list }}</div>
      </div>
    </div>
  </div>
```
