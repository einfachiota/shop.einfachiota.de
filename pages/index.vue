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
            eine Einfürung in die Welt von IOTA und dem Ökosystem.
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
          <Order />
          <br />
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
  .container {
    flex-direction: column;
    padding: 0;
  }
  .column {
    width: 100%;
    &.image {
      height: 300px;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.box {
      max-width: 600px;
      height: 100%;
      margin: 5px 0;
      padding: 30px 20px;
    }
  }
  .magazin-cover {
    height: 100%;
  }
}
@media only screen and (max-width: 1280px) {
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
      max-width: 500px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
