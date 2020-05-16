<template>
  <!-- This is the component for movie preview -->
  <div class="cine35-movie-preview">
    <img src="http://www.cine35.com/Affiches/14372.jpg" alt="ALERTE" />
    <div class="cine35-movie-preview-overlay">
      <div class="cine35-movie-preview-overlay-text">
        <span>{{ movie.name }}</span>
        <div>
          de
          <template v-for="director in movie.directors">
            {{ `${director.firstName} ${director.lastName}` }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "C35MoviePreview",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.cine35-movie-preview {
  padding: 0;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .cine35-movie-preview-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    padding: 10px;
    transition: 0.2 s ease;
    background-image: linear-gradient(
      -180deg,
      rgba(30, 30, 37, 0.3) 0%,
      rgba(30, 30, 37, 0.8) 51%,
      rgba(30, 30, 37, 0.85) 100%
    );
  }

  .cine35-movie-preview-overlay-text {
    color: rgb(228, 228, 228);
    font-size: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;

    & > span {
      color: white;
      font-size: 18px;
      font-weight: bold;
    }
  }

  &:hover {
    .cine35-movie-preview-overlay {
      opacity: 1;
    }
  }
}
</style>
