<template>
  <div id="home">
    <div class="section section--light">
      <div class="container">
        <div class="column column--image">
          <div class="magazin-cover" :class="{ active: isActive }">
            <div class="overlay" />
            <div class="supporters">
              <p>
                Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
                Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in
                Buchstabhausen an der Küste des Semantik, eines großen
                Sprachozeans. Ein kleines Bächlein namens Duden fließt durch
                ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist
                ein paradiesmatisches Land, in dem einem gebratene Satzteile in
                den Mund fliegen. Nicht einmal von der allmächtigen
                Interpunktion werden die Blindtexte beherrscht – ein geradezu
                unorthographisches Leben. Eines Tages aber beschloß eine kleine
                Zeile Blindtext, ihr Name war Lorem Ipsum, hinaus zu gehen in
                die weite Grammatik. Der große Oxmox riet ihr davon ab, da es
                dort wimmele von bösen Kommata, wilden Fragezeichen und
                hinterhältigen Semikoli, doch das Blindtextchen ließ sich nicht
                beirren. Es packte seine sieben Versalien, schob sich sein
                Initial in den Gürtel und machte sich auf den Weg. Als es die
                ersten Hügel des Kursivgebirges erklommen hatte, warf es einen
                letzten Blick zurück auf die Skyline seiner Heimatstadt
                Buchstabhausen, die Headline von Alphabetdorf und die Subline
                seiner eigenen Straße, der Zeilengasse. Wehmütig lief ihm eine
                rhetorische Frage über die Wange, dann setzte es seinen Weg
                fort. Unterwegs traf es eine Copy. Die Copy warnte das
                Blindtextchen, da, wo sie herkäme wäre sie
              </p>
            </div>
            <div class="sales-counter">
              <span class="sales-number">628</span>
              <span class="sales-unit">Unterstützer</span>
            </div>
          </div>
        </div>
        <div class="column column--box">
          <span class="subtitle">Jetzt verfügbar</span>
          <h1>Das erste einfach IOTA Magazin.</h1>
          <p>
            Dank unseren
            <span class="supporter-link" @click="showSupporter()"
              >Unterstützern</span
            >, die bereits im Vorverkauf das einfachIOTA Magazin bestellt haben,
            konnten wir dieses Projekt überhaupt erst möglich machen. Jetzt
            startet offiziell der Verkauf, sei dabei beim ersten einfachIOTA
            Magazin.
          </p>
          <h4>Newsletter abonnieren</h4>
          <p>
            Abonnier doch einfach unseren Newsletter. Wir halten dich auf dem
            Laufenden und informieren dich sobald wir die Tore öffnen.
          </p>
          <Order />
          <Footer />
        </div>
        <Roadmap />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Roadmap from '../components/Roadmap'
import Order from '../components/Order'

export default {
  components: { Footer, Roadmap, Order },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    showSupporter() {
      console.log('Läuft')
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
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
p {
  font-size: 1em;
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
.section {
  height: 100vh;
  &--light {
    background-color: var(--light);
  }
}
.magazin-cover {
  position: relative;
  height: 85vh;
  width: 100%;
  background-image: url('~assets/front.jpg');
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  .overlay {
    transition: all 300ms ease-in-out;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgb(0, 0, 0);
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.7539390756302521) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    opacity: 0;
  }
  &.active {
    .overlay {
      opacity: 0.8;
    }
    .supporters {
      opacity: 1;
    }
  }
  .supporters {
    transition: all 300ms ease-in-out;
    z-index: 2;
    position: relative;
    color: var(--white);
    opacity: 0;
  }
  .sales-counter {
    position: absolute;
    bottom: 50px;
    right: 50px;
    background-color: var(--primary);
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transform: rotatez(-12deg);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    &.open {
      width: 600px;
      height: 80%;
      border-radius: 10px;
      transform: rotate(0);
      margin-right: 50px;
      margin-bottom: 50px;
    }
    .sales-number,
    .sales-unit {
      color: var(--white);
      font-weight: bold;
      font-size: 48px;
    }
    .sales-unit {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      margin-bottom: 5px;
    }
  }
}
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.column {
  box-sizing: border-box;
  &--image {
    flex-grow: 1;
    width: 50%;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &--box {
    max-width: 600px;
    height: 85vh;
    background-color: var(--white);
    padding: 100px 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    overflow-y: auto;
  }
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

@media only screen and (max-width: 1440px) {
  p {
    font-size: 14px;
  }
  h1 {
    font-size: 32px;
  }
  .column {
    /* width: 50%;
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box; */
    &.image {
    }
    &.box {
      /* width: 350px;
      padding: 30px; */
    }
  }
}
@media only screen and (max-width: 1260px) {
  /* .container {
    padding: 0;
  }
  .column {
    &.box {
      width: 350px;
    }
  } */
}
@media only screen and (max-width: 1024px) {
  /* .section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    padding: 60px 0;
  }
  .container {
    overflow: hidden;
    width: 600px;
    flex-direction: column;
    padding: 0;
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: var(--box-shadow);
  }
  .column {
    width: 100%;
    &.image {
      height: 300px;
      width: 100%;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.box {
      width: 100%;
      max-width: 100%;
      height: auto;
      overflow: inherit;
      box-shadow: none;
    }
  }
  .magazin-cover {
    height: 100%;
  } */
}
@media only screen and (max-width: 640px) {
  /* .section {
    padding: 0;
  }
  .container {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
  .column {
    &.image {
      height: 240px;
    }
  } */
}
</style>
