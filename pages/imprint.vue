<template>
  <div id="home">
    <Navigation />
    <Imprint />
    <Footer />
  </div>
</template>

<script>
import Imprint from '../components/Imprint.vue'
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer'

export default {
  components: { Imprint, Navigation, Footer }
}
</script>

<style lang="scss">
.btn-group {
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  .btn {
    flex-grow: 1;
    margin: 0 15px;
  }
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 30px;
  background-color: var(--light);
  border-radius: 50px;
  font-weight: 900;
  font-size: 14px;
  text-decoration: none;
  transition: var(--transition);
  img {
    margin-right: 8px;
  }
  &:hover {
    cursor: pointer;
  }
  &--primary {
    color: var(--white);
    background-color: var(--primary);
    &:hover {
      background-color: var(--primary_light);
    }
  }
  &--secondary {
    color: var(--dark);
    background-color: var(--light);
    &:hover {
      background-color: var(--light_50);
    }
  }
}

.el-main {
  padding: 0px !important;
}
.subtitle {
  font-weight: 900;
  opacity: 0.5;
}
#home {
  text-align: left;
}
h2 {
  font-weight: 900;
}
p {
  font-size: 16px;
  font-weight: 200;
  line-height: 1.5;
  max-width: 600px;
  margin: 15px auto 30px;
}
.supporter-link {
  background-color: var(--primary);
  text-decoration: none;
  transition: var(--transition);
  margin: 0 5px;
  border-radius: 5px;
  padding: 2px 8px;
  color: var(--white);
  &:hover {
    background-color: var(--primary-darken);
    cursor: pointer;
  }
}
.info-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.column {
  box-sizing: border-box;
  &--footer {
    background-color: var(--dark);
    height: 15vh;
    width: 100%;
    flex-grow: 1;
  }
}
.headline-wrapper {
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

// S C R O L L B A R   S T Y L E S
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: var(--light);
}
::-webkit-scrollbar-thumb {
  background-color: var(--primary_50);
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}
::-webkit-scrollbar-thumb:hover {
  background-color: var(--primary);
}

@media only screen and (max-width: 1440px) {
  p {
    font-size: 14px;
  }
  h1 {
    font-size: 32px;
  }
  .magazin-cover {
    .supporters {
      padding: 200px 100px;
    }
    .sales-counter {
      z-index: 10;
    }
  }
}
/* @media only screen and (max-width: 1260px) {
  .container {
    padding: 0;
  }
}
@media only screen and (max-width: 1200px) {
  .container {
    flex-wrap: nowrap;
  }
}
@media only screen and (max-width: 1024px) {
  body {
    overflow: hidden;
  }
  h1,
  h2 {
    margin-bottom: 10px;
  }
  h2 {
    margin-top: 20px;
  }
  .footer {
    margin-bottom: -45px;
  }
  .section {
    padding: 50px;
    overflow-y: auto;
  }
  .container {
    flex-wrap: wrap;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 100px;
    .column {
      width: 100%;
    }
    .column--image {
      height: 400px;
      .magazin-cover {
        height: inherit;
        .supporters {
          display: none;
          height: inherit;
        }
        .sales-counter {
          transform: rotatez(-12deg) scale(1);
          bottom: 10px;
          right: 10px;
        }
      }
    }
    .column--box {
      max-width: 100%;
      overflow: initial;
      height: auto;
      padding: 50px;
      p {
        max-width: 100%;
        margin: 0;
      }
    }
  }
}
@media only screen and (max-width: 640px) {
  .section {
    padding: 10px;
    padding-top: 0;
  }
  .container {
    margin-top: 20px;
    margin-bottom: 10px;
    .column--image {
      .sales-counter {
        transform: rotatez(-12deg) scale(0.7);
        bottom: 0px;
        right: 0px;
      }
    }
    .column--box {
      padding: 20px;
    }
  }
  .footer {
    margin-bottom: -15px;
    margin-top: 50px;
  }
} */
</style>
