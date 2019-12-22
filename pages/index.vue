<template>
  <div id="home">
    <div class="section section--light">
      <div class="container">
        <div class="column column--image">
          <div class="magazin-cover" :class="{ active: isActive }">
            <div class="overlay" />
            <div class="supporters">
              <h1>Unterstützer</h1>
              <p class="supporters--list">{{ supp }}</p>
            </div>
            <div class="sales-counter">
              <span class="sales-unit">Nur noch</span>
              <span class="sales-number">{{ limiitedEditionCount }}</span>
              <span class="sales-unit">Magazine</span>
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
          <h2>Jetzt kaufen</h2>
          <p>
            Wir haben noch {{ limiitedEditionCount }} Exemplare der Erstauflage
            Limitted Edition auf Lager.
          </p>
          <p>
            <strong>Lieferzeit:</strong>
            ~14 Tage
            <br />
            <strong>Auf Lager:</strong>
            {{ limiitedEditionCount }} Magazine
          </p>

          <Order />
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Order from '../components/Order'
const API_URL = process.env.backendUrl + '/api'

export default {
  components: { Footer, Order },
  data() {
    return {
      isActive: false,
      limiitedEditionCount: 542,
      supp:
        'NO8ODY, Olsche, Marcus & Frida, Peter Schiff, Markus, playnight, Bender, Bender, D. Dorsey, Martin Neubauer, Kryptonaut, SammyTS, Daniel T. Dorsey, Edur, moon? kommt!, Joe McWeirdo, Dimitrios, Bö, Mr. Tiii, Antonio Nardella - #IOTALove!, JΛn, JΛn, Antonio Nardella - #IOTALove!, Yannick Berberat, Christian Dennis Markert, Schmucklos, Andysun, Frank Pörtner, Holger Preßmar, Holger Preßmar, Dimitrios, Onur Usta, M.Wiesenhütter, huhn511, r3p0x, Denka, Roman Fischer (AT), LaK, Adrian Saxer, Phillipp Becker, Mirko Waschke, Mirko Waschke, Philipp, ToMo, Komplettmitscharf, Patrick Köhnen, DonTorti, Marco Talmann, Annette S., www.easy-passphrase-saver.de, Sven, Thomas, Scarface, Stoevi, Scarface, dsk0_, Stefano, Daniel Kühn, WurstsalatX, bIOTAtar, m.riemensperger@web.de, Tobi, Joe McWeirdo, Patrick, Tobias, Maik Binding, Thorsten Seehofer?, oldjohn, Stefano, Ad_Moon, Chnöbi, Sebi, Sylvia Lermann, Paladin - TarKar, Michael Weiße, King Keb, Sebastian Krämer, Matthias Terzer, Fabi, Big_O, Mark Schmidt, Nicholas Karg, David Voth, Nesastor, Qaiz, Alex, Alex, IOTAshops.com - Felix R., Thomas Mehling, Philip Noack, MaSoHoliK, Philip Noack, Helmut Pessek, Mijota 007, Christian Oosting (Oostech), Rainer, Rainer, Mcell80, IOTA Team FZI, rambazamba, Jacqueline, Christian Zimon, Mcell80, Mathias Rupprecht, Linnemann Akustik, Ralph Scheyer, Zwi, Abraxas147, Moritz, PeterPaaaaaaaan, Simon Jegelka, Mario Lehenauer, Mario Lehenauer, VIO, M2M, K.Güvenc Armitli, Kai Neuschwander (Kaineahnung), Andi Knauer, PIOTA, Wiota, Patches O‘houlahan, Energine, Jacek, Peter Lameyer, OldJimmy, Iota4Future, Losche, Yammi, Tom, Elfer, Elfer, Flashdel, Nic0x36, ockerocker, Oliver und Gesche Stais, CDM aka ©ryptolotl, Sven Feuchtmüller, Ch.Zue alias Major Lazer ;), Christian Peter, Lars, Kai Zachert, Lars, IOTA Team FZI, IREMMOS, Jens S., Christoph Baumann, Heiko Faust, Nr.1 Papa Joe Nr.2 Becko, iota.coupons, Don Ted, Mario Steckel, @cbe78, Panni, L.G., L.G., lonny986, Picknicker, Richard (rck), Stefan Sommer, Mike Spyrka, Felix, Mauro, Roadrunner, Fr4sh, Johannes Bargehr, David P., Aleks, Oliver Ebach, Fabrilogy GmbH & Co KG.,  Benedikt Bachmann, Becks, Marco, syncroworks, infi, LukSu TAbt, Pascal | Corinna | Schürmann, Pascal | Corinna | Schürmann, SKay, Erstausgabe für J.Messing, Simon Schumacher, Bazel, olifa, Thorsten, Thorsten, Michael Burger, Michael Burger, Horst Rieder, Pero, Silvio Schannak, jonmaxmue, Jan, Flomo, Roger Nussbaumer, jonmaxmue, dennis nagpal, Tilli, Tilli, Paschinho, Paschinho, Netsch, HPK, Bekir Bicer, Sabri Goldberg, MAIBACH, anynines GmbH, Bastel, Arne Flick, Daniel, Marko, ReffatG, julianlavii, Kevin Scheurer, Kevin Scheurer, Zwi, Johannes, Markus Kösters, Stefan, Stefan, BaBaTz, Tom & Mumpitz, Tom & Mumpitz, Ivo Simunic, d0ms0n, Ivo Simunic, Daniel Schwan, Sebastian, wismut, Benedikt, ockerocker, Durstin, Simon Schumacher, Nicolai, el Yeti, Denis, Pascal Müller, Bern, Pascal Müller, Bern, Socke, Lenny B., Jazz811, Cmon, Mario Sommer, Sibb, 123, Pascal Müller, Bern, AKITA Blockchain Solutions, Josef Schiebel, Darmo, Fynn, Rüdi, IOTAPower, Niklas Wehberg, Felipe Rehm, Moonshot, Sascha Hotz, Hank, Dedl, hallo Mario und Jutta., hallo Mario und Jutta., Artur, emobiton, Nou, Max Kirn, Da_krieh, Nou, stone3d, Marco Stirmlinger, flintstone, F.B., Zwi, Felix, Hobst, Arminator, Johannes PzH, C. & C. Albinus, Mike, Mike, Dombronick, Zwi, Paul `Skypaul´ Kellermann, NWiOta, Mario Rangelov, Mike, Alessandro Buser, Elfer, LuLi Wunit, Dennis, Dennis, CEO Hans-Jürgen Felsch, ToswoSteven, ToswoSteju, iotadev.org, Reithi98, Thomas Lindemann, Iotina, Iotina, O. Falko S., Ferrior, Ferrior, TingelTangelBoB, Peter, Marco Grull, Armin Simon - NetStream GmbH, Mischa, Vernon Koch, WebtapeteDE, Thomas Heisig, IOTA, Fries Textil, Tobinski, RogueThorn, Monni, Leonhard Klein, Monni, Adin Softic, Cornelia Faust, tntRistan, F&L<3, Dennis, Andi Rupp, IOTA (Arno Hoffmann), Daniel Schmidt, Rico Loschke, DoubleK, randombit, Niklas Redh, Kai Umland, McEck, Peter Galley, Andre@s, Jonas Mock, Michael, Oberst Papillion, Oberst-Papillion, Witali, Danicoin, C.D., Thomas Lindemann, elmanulito, Mathias P., SISTI, Jan Leonhard Fändrich, Steven Makinin, x2Ente, Astro Dawg, Rudolf Haberler, Justus Granzow, Torsten Reeder, André Berger, Pipo, Hiko29, Florian Gebhard, Patrick Schönwälder, tangle.glumb.de, Chico, Chico, Fred Stein, slook, Alex 13 Micha 09 Müller, André, Alf A.O. Mega, David F. Oder WWW.RAVE-ON.DE, Felix, Clixmile, Andreas Bach, Max B., Martin Huzanic, Dennis, randombit, Tobi, kushmaster420, KingFelix, Burns, Jan Niclas Bardenhagen, girwes, girwes, Freedom for Lombardos, Markus Wagner = WagIOTA, GnrGnr, Von Lukas, corrigo.io, Ramona und Daniel Jakob m.Bear, Cartman SpecX, N. Graf, Cartman , dancatt, Attila, Thomas FleXChange-Medical GmbH, Kay Bieser, masxhi, masxhi, Fabian Odermatt, Julian Bärwald, Bennett Warda / adraw, Norbert Nicolaus, Marcel S., Malte Peters, BastiJan, Alf A.O. Mega, Lars R., JWS, Tim, atr4xxas, Gregor, Gregor, KevinS, Thomas Mächler, Lippstadt, Tim T., Denis Rösken / Philipp Köther, ANDREAS, Toni, Onur Usta, Dietz, Pierre Christian, Aventin, sERvERfRoG, sERvERfRoG, LFO-ONE, René Widmer, Noah, Noah, #wascostadiewelt, pixonauten, Bibip, Janeck aka Merkelcoin, Kalaschnikow, Simon Mall, Samuel-Norah, Stefan Überegger, Samuel-Norah, moses, vrom, Rolf aus Aichtal, Tim, vrom, Yunus Kara, Bastian, Thomas Mächler, Wolfgang Hentschel, Wolfgang Hentschel, Wolfgang Hentschel, Wolfgang Hentschel, RobiwanKenobi, SplinterTM, V. Illemann, Stefan und Salmana Ahmad, Daniel Wittchow, Stefan K, Middendorf, Frank Reichenberg, Freddy, Bastian Künzel, Patrick Ulloth, M2M, Roadrunner, Roadrunner, KI-OTA, Martin Mayrhofer, Martin Sturm, AutoteileTREND.de, www.Passives-Einkommen.blog, Robin, Daniel Stampfl, m0535_1989, Silvio'
    }
  },
  created() {
    this.getAmount()
  },
  methods: {
    showSupporter() {
      this.isActive = !this.isActive
    },
    getAmount() {
      this.$axios
        .get(`${API_URL}/amount`)
        .then((result) => {
          console.log('result', result)
          this.limiitedEditionCount = result.data.amount
        })
        .catch((err) => {
          console.log('err')
          console.log(err)
        })
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
  overflow: hidden;
  &--light {
    background-color: var(--light);
  }
}
.magazin-cover {
  position: relative;
  height: 100vh;
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
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 200px;
    h1 {
      margin-top: 100px;
      margin-bottom: 15px;
    }
    &--list {
      width: 100%;
      max-width: 100%;
      margin: 0;
      margin-bottom: 100px;
    }
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
    transform: rotatez(-12deg) scale(1.3);
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
      font-size: 60px;
      line-height: 1;
      margin-bottom: 5px;
    }
    .sales-unit {
      font-size: 10px;
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
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &--box {
    max-width: 600px;
    height: 100vh;
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
@media only screen and (max-width: 1260px) {
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
}
</style>
