<template>
  <div class="hero">
    <div class="hero-image" />
    <div class="hello">
      <span class="prefix">Presale now!</span>
      <h1 class="title">Hello World</h1>
      <h2 class="subtitle">
        First einfachIOTA magazine now available in English
      </h2>
      <div class="btn-group">
        <a v-scroll-to="'#presale'" href="#" class="btn btn--primary"
          >Presale now</a
        >
      </div>
    </div>
    <img src="~/assets/icons/rounded-edge.svg" class="rounded-edge" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  overflow: hidden;
  z-index: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/assets/hero.png');
  .btn-group {
    margin-top: 30px;
    .btn {
      flex-grow: 0;
    }
  }
  .rounded-edge {
    position: absolute;
    bottom: -2px;
    right: -3px;
  }
  .hello {
    position: absolute;
    bottom: 10%;
    left: 0;
    color: var(--white);
    text-align: left;
    padding: 50px;
    max-width: 50%;
    height: auto;
    border-radius: 0 20px 20px 0;
    background-color: var(--white);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    z-index: 3;
    h1.title {
      text-transform: uppercase;
      color: var(--dark);
      font-family: 'Open Sans';
      font-weight: 900;
      font-size: 64px;
    }
    h2.subtitle {
      font-family: 'Open Sans';
      font-weight: 300;
      font-size: 32px;
      padding-bottom: 0;
      font-weight: 100;
      color: var(--dark);
      opacity: 1;
      font-size: 20px;
      text-transform: none;
    }
    .prefix {
      color: var(--dark);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 900;
      opacity: 0.5;
    }
    @media only screen and (max-width: 720px) {
      max-width: 80%;
    }
    @media only screen and (max-width: 600px) {
      padding: 15px 50px;
      padding-top: 45px;
      .title {
        font-size: 32px;
      }
      .animated-heading {
        top: 90%;
        left: 52%;
      }
      ul li {
        font-size: 18px;
      }
    }
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 100%;
    filter: blur(5px);
    @media only screen and (min-width: 2200px) {
      height: auto;
      width: 100%;
    }
  }
  .layer {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.75;
    background: rgb(0, 183, 197);
    background: radial-gradient(
      circle,
      rgba(0, 183, 197, 0.9) 0%,
      rgba(0, 183, 197, 0.6) 100%
    );
  }
}
.hero {
  text-align: center;
  .sub-heading {
    margin-top: 0px;
    font-size: 2.5em;
  }
}

.animated-heading {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 160px;
  overflow: hidden;
  width: 90%;
  font-size: 2em;
  line-height: 40px;
  color: var(--darker);
  text-align: left;

  &__container {
    font-weight: 600;
    overflow: hidden;
    height: 40px;
    padding: 0;
    padding-left: 30px;

    &:after,
    &:before {
      position: absolute;
      top: 0;

      color: var(--primary);
      font-size: 1.5em;
      line-height: 40px;

      -webkit-animation-name: opacity;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      animation-name: opacity;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    &__list {
      margin-top: 0;
      padding-left: 0;
      text-align: left;
      list-style: none;

      -webkit-animation-name: change;
      -webkit-animation-duration: 10s;
      -webkit-animation-iteration-count: infinite;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite;

      &__item {
        line-height: 40px;
        margin: 0;
      }
    }
  }
}

@-webkit-keyframes opacity {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-webkit-keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}

@-o-keyframes opacity {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-o-keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}

@-moz-keyframes opacity {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-moz-keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}

@keyframes opacity {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}
</style>
