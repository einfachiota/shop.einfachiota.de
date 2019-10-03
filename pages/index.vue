<template>
  <div id="home">
    <div class="section section-background">
      <div class="container">
        <h1>Das einfachIOTA Magazin ist da!</h1>
        <p>Jetzt die erste Ausgabe der eiMag online vorbestellen.</p>
        <div class="info-box">
          <img src="~/assets/front.png" />
        </div>
        <br />
        <a v-scroll-to="'#order'" class="el-button el-button--primary">
          Zur Vorbestellung
        </a>
      </div>
    </div>
    <div id="order" class="section section-background">
      <div class="container">
        <h2>Ab jetzt Vorbestellbar!</h2>
        <p></p>
        <div class="info-box">
          <Order />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Order from '../components/Order'
export default {
  components: { Order }
}
</script>

<style lang="scss">
.el-main {
  padding: 0px !important;
}
#home {
  text-align: center;
}
.section {
  padding: 80px 0;
  height: 100vh;
  &-background {
    background-color: var(--light);
    p {
      max-width: 600px;
      margin: 15px auto 30px;
    }
    a {
      text-decoration: none;
    }

    .container {
      width: 100%;
      h1 {
      }
      p {
        font-size: 1.2em;
      }
      .info-box {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-width: 600px;
          width: 80%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
  .headline-wrapper {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media only screen and (max-width: 740px) {
  .hero {
    padding-top: 40px;
  }
  .headline-wrapper {
    flex-wrap: wrap;
    h2 {
      margin-bottom: 20px;
    }
  }
  .btn-social {
    margin-bottom: 5px !important;
  }
}
</style>
