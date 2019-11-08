<template>
  <div id="home">
    <div class="section section--light">
      <div class="container">
        <div class="column image">
          <div class="magazin-cover"></div>
        </div>
        <div class="column box">
          <h1>Das erste IOTA Magazin</h1>
          <p>
            Jetzt die erste Ausgabe des einfachIOTA Magazins hier vorbestellen.
          </p>
          <p>
            Diese Ausgabe hat das Motto <strong>Hallo Welt</strong> und gibt dir
            eine Einführung in die Welt von IOTA und dem Ökosystem.
          </p>
          <h4>Du bist mit dabei!</h4>
          <p>
            Nimmst du bei der Vorbestellung teil, wird dein Wunschname gedruckt.
            <sup>*1</sup>
          </p>
          <h4>Wann kommt es?</h4>
          <p>Das Magazin wird im Dezember bei dir ankommen.<sup>*2</sup></p>
          <h4>Jetzt vorbestellen</h4>
          <p>Zahle bequem per IOTA oder Paypal.</p>
          <h4>Vorverkaufsende</h4>
          <p>
            Der Vorverkauf endet am
            <strong>20. November 2019 um 15 Uhr.</strong>
          </p>
          <Order />
          <p class="fine-print">
            Durch Anklicken von BESTELLEN bestätigst Du den Warenkorb und Deine
            eingegebenen Daten und stimmst unseren
            <a
              href="https://www.einfachiota.de/#/privacy"
              target="_blank"
              class="link"
            >
              Datenschutzbestimmungen
            </a>
            zu.
            <br />
            <strong>Was passiert mit meinen Daten?<sup>*3</sup></strong>
          </p>
          <hr />
          <p class="fine-print">
            *1 Fülle deinen Wunschnamen in das zugehörige Feld. Dein Name wird
            auf der Supportseite erscheinen.
            <strong>Achtung:</strong> Wir drucken keine obszönen Wörter!
          </p>
          <p class="fine-print">
            *2 Falls wir zu wenig Magazine im Vorverkauf verkaufen, können wir
            den Druck leider nicht in Auftrag geben. Wir werden das Geld dann
            natürlich zurückzahlen. Wir werden den Druck direkt nach
            erfolgreichem Vorverkauf in Auftrag geben. Die Magazine erwarten wir
            Ende November und werden sie umgehend versenden. Ab diesem Zeitpunkt
            ist die Post für das Zustellungsdatum verantwortlich.
          </p>
          <p class="fine-print">
            *3 Wir verwenden deine Daten nur für eine erfolgreiche Zusendung und
            unsere Buchhaltung. Die Email Adresse wird benötigt, falls wir mit
            dir in Kontakt treten müssen. Dies tun wir aber nur, wenn es
            unbedingt nötig ist. Ausser du möchtest Neuigkeiten von einfachIOTA
            erhalten, dafür musst du nur die dazu passende Checkbox anklicken.
            Mehr Informationen zum Datenschutz findest du auf unserer
            <a
              href="https://www.einfachiota.de/#/privacy#magazin"
              target="_blank"
              class="link"
            >
              Datenschutzerklärungs
            </a>
            Seite.
          </p>
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Order from '../components/Order'
import Footer from '../components/Footer'

export default {
  components: { Order, Footer }
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
  height: 100vh;
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

.fine-print {
  font-size: 0.8em;
}

.link {
  color: rgba(0, 0, 0, 0.75);
  text-decoration: none;
  transition: color 200ms ease-in-out;
  &:hover {
    color: var(--primary);
  }
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

@media only screen and (max-width: 1440px) {
  p {
    font-size: 14px;
  }
  h1 {
    font-size: 32px;
  }
  .column {
    width: 50%;
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;
    &.image {
    }
    &.box {
      width: 350px;
      padding: 30px;
    }
  }
}
@media only screen and (max-width: 1260px) {
  .container {
    padding: 0;
  }
  .column {
    &.box {
      width: 350px;
    }
  }
}
@media only screen and (max-width: 1024px) {
  .section {
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
  }
}
@media only screen and (max-width: 640px) {
  .section {
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
  }
}
</style>
