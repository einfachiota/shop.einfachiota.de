<template>
  <div id="home">
    <div class="section section--light">
      <div class="container">
        <div class="column image">
          <div class="magazin-cover"></div>
        </div>
        <div class="column box">
          <h1>Das erste IOTA Magazin</h1>
          <p>Jetzt die erste Ausgabe der eiMag online vorbestellen.</p>
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
  text-align: left;
}
p {
  font-size: 1.2em;
  max-width: 600px;
  margin: 15px auto 30px;
}
a {
  text-decoration: none;
}
.info-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.section {
  height: 100vh;
  &--light {
    background-color: var(--light);
  }
}
.magazin-cover {
  height: 100%;
  width: 100%;
  background-image: url('~assets/front.jpg');
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}
.container {
  width: 100%;
  display: flex;
}
.column {
  width: 50%;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  &.image {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.box {
    background-color: var(--white);
    padding: 100px 50px;
    max-width: 600px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
}
.headline-wrapper {
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--light);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: var(--primary_50);
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: var(--primary);
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
