<template>
  <div>
    <div v-if="order_step == 1">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        class="demo-form-inline"
        status-icon
        :rules="rules"
      >
        <el-form-item
          :label="$t('order.form.first_name_label')"
          prop="first_name"
        >
          <el-input
            v-model="ruleForm.first_name"
            :placeholder="$t('order.form.first_name_placeholder')"
            required="true"
          ></el-input>
        </el-form-item>
        <el-form-item
          :label="$t('order.form.last_name_label')"
          prop="last_name"
        >
          <el-input
            v-model="ruleForm.last_name"
            :placeholder="$t('order.form.last_name_placeholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('order.form.address_label')" prop="address">
          <el-input
            v-model="ruleForm.address"
            :placeholder="$t('order.form.address_placeholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('order.form.zip_code_label')" prop="zip_code">
          <el-input
            v-model="ruleForm.zip_code"
            :placeholder="$t('order.form.zip_code_placeholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('order.form.city_label')" prop="city">
          <el-input
            v-model="ruleForm.city"
            :placeholder="$t('order.form.city_placeholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('order.form.country_label')" prop="country">
          <el-select
            v-model="ruleForm.country"
            :placeholder="$t('order.form.country_placeholder')"
          >
            <el-option value="Afghanistan">Afghanistan</el-option>
            <el-option value="Ägypten">Ägypten</el-option>
            <el-option value="Åland">Åland-Inseln</el-option>
            <el-option value="Albanien">Albanien</el-option>
            <el-option value="Algerien">Algerien</el-option>
            <el-option value="Amerikanische Jungferninseln"
              >Amerikanische Jungferninseln</el-option
            >
            <el-option value="Amerikanisch-Samoa">Amerikanisch-Samoa</el-option>
            <el-option value="Andorra">Andorra</el-option>
            <el-option value="Angola">Angola</el-option>
            <el-option value="Anguilla">Anguilla</el-option>
            <el-option value="Antigua und Barbuda"
              >Antigua und Barbuda</el-option
            >
            <el-option value="Äquatorialguinea">Äquatorialguinea</el-option>
            <el-option value="Argentinien">Argentinien</el-option>
            <el-option value="Armenien">Armenien</el-option>
            <el-option value="Aruba">Aruba</el-option>
            <el-option value="Ascension">Ascension</el-option>
            <el-option value="Äthiopien">Äthiopien</el-option>
            <el-option value="Australien">Australien</el-option>
            <el-option value="Azerbaidschan">Azerbaidschan</el-option>
            <el-option value="Bahamas">Bahamas</el-option>
            <el-option value="Bahrain">Bahrain</el-option>
            <el-option value="Bangladesh">Bangladesh</el-option>
            <el-option value="Barbados">Barbados</el-option>
            <el-option value="Belarus">Belarus</el-option>
            <el-option value="Belgien">Belgien</el-option>
            <el-option value="Belize">Belize</el-option>
            <el-option value="Benin">Benin</el-option>
            <el-option value="Berg Athos (Griechenland)"
              >Berg Athos (Griechenland)</el-option
            >
            <el-option value="Bermuda">Bermuda</el-option>
            <el-option value="Bhutan">Bhutan</el-option>
            <el-option value="Bolivien">Bolivien</el-option>
            <el-option value="Bonaire, Sint Eustatius und Saba"
              >Bonaire, Sint Eustatius und Saba</el-option
            >
            <el-option value="Bosnien und Herzegowina"
              >Bosnien und Herzegowina</el-option
            >
            <el-option value="Botsuana (Botswana)"
              >Botsuana (Botswana)</el-option
            >
            <el-option value="Brasilien">Brasilien</el-option>
            <el-option value="Britische Jungferninseln"
              >Britische Jungferninseln</el-option
            >
            <el-option value="Brunei Darussalam">Brunei Darussalam</el-option>
            <el-option value="Bulgarien">Bulgarien</el-option>
            <el-option value="Burkina Faso">Burkina Faso</el-option>
            <el-option value="Burundi">Burundi</el-option>
            <el-option value="Campione d'Italia">Campione d'Italia</el-option>
            <el-option value="Ceuta und Melilla (Spanien)"
              >Ceuta und Melilla (Spanien)</el-option
            >
            <el-option value="Chile">Chile</el-option>
            <el-option value="China, Volksrepublik"
              >China, Volksrepublik</el-option
            >
            <el-option value="Cookinseln">Cookinseln</el-option>
            <el-option value="CRI">Costa Rica</el-option>
            <el-option value="CIV">Côte d’Ivoire (Elfenbeinküste)</el-option>
            <el-option value="CUW">Curaçao</el-option>
            <el-option value="Deutschland">Deutschland</el-option>
            <el-option value="Dänemark">Dänemark</el-option>
            <el-option value="Dominica">Dominica</el-option>
            <el-option value="Dominikanische Republik"
              >Dominikanische Republik</el-option
            >
            <el-option value="Dschibuti">Dschibuti</el-option>
            <el-option value="Ecuador">Ecuador</el-option>
            <el-option value="El Salvador">El Salvador</el-option>
            <el-option value="Eritrea">Eritrea</el-option>
            <el-option value="Estland">Estland</el-option>
            <el-option value="Eswatini">Eswatini</el-option>
            <el-option value="Falklandinseln">Falklandinseln</el-option>
            <el-option value="Färöer">Färöer</el-option>
            <el-option value="Fidschi">Fidschi</el-option>
            <el-option value="Finnland">Finnland</el-option>
            <el-option value="Frankreich">Frankreich</el-option>
            <el-option value="Französische Süd- und Antarktisgebiete"
              >Französische Süd- und Antarktisgebiete</el-option
            >
            <el-option value="Französisch-Guayana"
              >Französisch-Guayana</el-option
            >
            <el-option value="Französisch-Polynesien"
              >Französisch-Polynesien</el-option
            >
            <el-option value="Gabun">Gabun</el-option>
            <el-option value="Gambia">Gambia</el-option>
            <el-option value="Georgien">Georgien</el-option>
            <el-option value="Ghana">Ghana</el-option>
            <el-option value="Gibraltar">Gibraltar</el-option>
            <el-option value="Grenada">Grenada</el-option>
            <el-option value="Griechenland">Griechenland</el-option>
            <el-option value="Dänemark"
              >Grönland (Dänemark(Dänemark">Grönland (Dänemark)</el-option
            >
            <el-option value="Großbritannien">Großbritannien</el-option>
            <el-option value="Guadeloupe">Guadeloupe</el-option>
            <el-option value="Guam">Guam</el-option>
            <el-option value="Guatemala">Guatemala</el-option>
            <el-option value="Guernsey">Guernsey</el-option>
            <el-option value="Guinea">Guinea</el-option>
            <el-option value="Guinea-Bissau">Guinea-Bissau</el-option>
            <el-option value="Guyana">Guyana</el-option>
            <el-option value="Haiti">Haiti</el-option>
            <el-option value="Honduras">Honduras</el-option>
            <el-option value="Hongkong">Hongkong</el-option>
            <el-option value="Indien">Indien</el-option>
            <el-option value="Indonesien">Indonesien</el-option>
            <el-option value="Insel Man">Insel Man</el-option>
            <el-option value="Irak">Irak</el-option>
            <el-option value="Iran">Iran</el-option>
            <el-option value="Irland">Irland</el-option>
            <el-option value="Island">Island</el-option>
            <el-option value="Israel">Israel</el-option>
            <el-option value="Italien">Italien</el-option>
            <el-option value="Jamaika">Jamaika</el-option>
            <el-option value="Japan">Japan</el-option>
            <el-option value="Jemen">Jemen</el-option>
            <el-option value="Jersey">Jersey</el-option>
            <el-option value="Jordanien">Jordanien</el-option>
            <el-option value="Kaimaninseln">Kaimaninseln</el-option>
            <el-option value="Kambodscha">Kambodscha</el-option>
            <el-option value="Kamerun">Kamerun</el-option>
            <el-option value="Kanada">Kanada</el-option>
            <el-option value="Kanarische Inseln (Spanien"
              >Kanarische Inseln (Spanien)</el-option
            >
            <el-option value="Kap Verde">Kap Verde</el-option>
            <el-option value="Kasachstan">Kasachstan</el-option>
            <el-option value="Katar">Katar</el-option>
            <el-option value="Kenia">Kenia</el-option>
            <el-option value="Kirgisistan">Kirgisistan</el-option>
            <el-option value="Kiribati">Kiribati</el-option>
            <el-option value="Kolumbien">Kolumbien</el-option>
            <el-option value="Komoren">Komoren</el-option>
            <el-option value="Kongo (Dem. Rep)">Kongo (Dem. Rep.)</el-option>
            <el-option value="Kongo (Rep)">Kongo (Rep.)</el-option>
            <el-option value="Korea Nord">Korea Nord</el-option>
            <el-option value="Korea Süd">Korea Süd</el-option>
            <el-option value="Kosovo">Kosovo</el-option>
            <el-option value="Kroatien">Kroatien</el-option>
            <el-option value="Kuba">Kuba</el-option>
            <el-option value="Kuwait">Kuwait</el-option>
            <el-option value="Laos">Laos</el-option>
            <el-option value="Lesotho">Lesotho</el-option>
            <el-option value="Lettland">Lettland</el-option>
            <el-option value="Libanon">Libanon</el-option>
            <el-option value="Liberia">Liberia</el-option>
            <el-option value="Libyen">Libyen</el-option>
            <el-option value="Liechtenstein">Liechtenstein</el-option>
            <el-option value="Litauen">Litauen</el-option>
            <el-option value="Livigno">Livigno</el-option>
            <el-option value="Luxemburg">Luxemburg</el-option>
            <el-option value="Macau">Macau</el-option>
            <el-option value="Madagaskar">Madagaskar</el-option>
            <el-option value="Malawi">Malawi</el-option>
            <el-option value="Malaysia">Malaysia</el-option>
            <el-option value="Malediven">Malediven</el-option>
            <el-option value="Mali">Mali</el-option>
            <el-option value="Malta">Malta</el-option>
            <el-option value="Marokko">Marokko</el-option>
            <el-option value="Marschallinseln">Marschallinseln</el-option>
            <el-option value="Martinique">Martinique</el-option>
            <el-option value="Mauretanien">Mauretanien</el-option>
            <el-option value="Mauritius">Mauritius</el-option>
            <el-option value="Mayotte">Mayotte</el-option>
            <el-option value="Mazedonien">Mazedonien</el-option>
            <el-option value="Mexiko">Mexiko</el-option>
            <el-option value="Mikronesien">Mikronesien</el-option>
            <el-option value="Moldau">Moldau</el-option>
            <el-option value="Monaco">Monaco</el-option>
            <el-option value="Mongolei">Mongolei</el-option>
            <el-option value="Montenegro">Montenegro</el-option>
            <el-option value="Montserrat">Montserrat</el-option>
            <el-option value="Mosambik">Mosambik</el-option>
            <el-option value="Myanmar">Myanmar</el-option>
            <el-option value="Namibia">Namibia</el-option>
            <el-option value="Nauru">Nauru</el-option>
            <el-option value="Nepal">Nepal</el-option>
            <el-option value="Neukaledonien">Neukaledonien</el-option>
            <el-option value="Neuseeland">Neuseeland</el-option>
            <el-option value="Nicaragua">Nicaragua</el-option>
            <el-option value="Niederlande">Niederlande</el-option>
            <el-option value="Niederländische Antillen"
              >Niederländische Antillen</el-option
            >
            <el-option value="Niger">Niger</el-option>
            <el-option value="Nigeria">Nigeria</el-option>
            <el-option value="Niue">Niue</el-option>
            <el-option value="Nördliche Marianen">Nördliche Marianen</el-option>
            <el-option value="Norfolkinsel">Norfolkinsel</el-option>
            <el-option value="Norwegen">Norwegen</el-option>
            <el-option value="Oman">Oman</el-option>
            <el-option value="Österreich">Österreich</el-option>
            <el-option value="Pakistan">Pakistan</el-option>
            <el-option value="Palästina">Palästina</el-option>
            <el-option value="Palau">Palau</el-option>
            <el-option value="Panama">Panama</el-option>
            <el-option value="Papua-Neuguinea">Papua-Neuguinea</el-option>
            <el-option value="Paraguay">Paraguay</el-option>
            <el-option value="Peru">Peru</el-option>
            <el-option value="Philippinen">Philippinen</el-option>
            <el-option value="Pitcairninseln">Pitcairninseln</el-option>
            <el-option value="Polen">Polen</el-option>
            <el-option value="Portugal">Portugal</el-option>
            <el-option value="Puerto Rico">Puerto Rico</el-option>
            <el-option value="Réunion">Réunion</el-option>
            <el-option value="Ruanda">Ruanda</el-option>
            <el-option value="Rumänien">Rumänien</el-option>
            <el-option value="Russische Föderation"
              >Russische Föderation</el-option
            >
            <el-option value="Saint Christopher und Nevis"
              >Saint Christopher und Nevis</el-option
            >
            <el-option value="Saint Martin (franz. Teil)"
              >Saint Martin (franz. Teil)</el-option
            >
            <el-option value="Saint Lucia">Saint Lucia</el-option>
            <el-option value="Saint Vincent und die Grenadinen"
              >Saint Vincent und die Grenadinen</el-option
            >
            <el-option value="Saint-Pierre und Miquelon"
              >Saint-Pierre und Miquelon</el-option
            >
            <el-option value="Salomonen">Salomonen</el-option>
            <el-option value="Sambia">Sambia</el-option>
            <el-option value="Samoa">Samoa</el-option>
            <el-option value="San Marino">San Marino</el-option>
            <el-option value="Sao-Tome und Principe"
              >Sao-Tome und Principe</el-option
            >
            <el-option value="Saudi Arabien">Saudi Arabien</el-option>
            <el-option value="Schweden">Schweden</el-option>
            <el-option value="Schweiz">Schweiz</el-option>
            <el-option value="Senegal">Senegal</el-option>
            <el-option value="Serbien">Serbien</el-option>
            <el-option value="Seychellen">Seychellen</el-option>
            <el-option value="Sierra Leone">Sierra Leone</el-option>
            <el-option value="Simbabwe">Simbabwe</el-option>
            <el-option value="Singapur">Singapur</el-option>
            <el-option value="Sint Maarten">Sint Maarten</el-option>
            <el-option value="Slowakei">Slowakei</el-option>
            <el-option value="Slowenien">Slowenien</el-option>
            <el-option value="Somalia">Somalia</el-option>
            <el-option value="Spanien">Spanien</el-option>
            <el-option value="Sri Lanka">Sri Lanka</el-option>
            <el-option value="St. Barthélemy (St. Bartolomäus)"
              >St. Barthélemy (St. Bartolomäus)</el-option
            >
            <el-option value="St. Helena">St. Helena</el-option>
            <el-option value="Südafrika">Südafrika</el-option>
            <el-option value="SDN">Sudan</el-option>
            <el-option value="Südgeorgien (inkl. Südl. Sandwichinseln)"
              >Südgeorgien (inkl. Südl. Sandwichinseln)</el-option
            >
            <el-option value="Südsudan">Südsudan</el-option>
            <el-option value="Suriname">Suriname</el-option>
            <el-option value="Svalbard und Jan Mayen Inseln"
              >Svalbard und Jan Mayen Inseln</el-option
            >
            <el-option value="Syrien">Syrien</el-option>
            <el-option value="Tadschikistan">Tadschikistan</el-option>
            <el-option value="Taiwan">Taiwan</el-option>
            <el-option value="Tansania">Tansania</el-option>
            <el-option value="Thailand">Thailand</el-option>
            <el-option value="Timor-Leste">Timor-Leste</el-option>
            <el-option value="Togo">Togo</el-option>
            <el-option value="Tokelau">Tokelau</el-option>
            <el-option value="Tonga">Tonga</el-option>
            <el-option value="Trinidad und Tobago"
              >Trinidad und Tobago</el-option
            >
            <el-option value="Tristan da Cunha">Tristan da Cunha</el-option>
            <el-option value="Tschad">Tschad</el-option>
            <el-option value="Tschechien">Tschechien</el-option>
            <el-option value="Tunesien">Tunesien</el-option>
            <el-option value="Türkei">Türkei</el-option>
            <el-option value="Turkmenistan">Turkmenistan</el-option>
            <el-option value="Turks- und Caicosinseln"
              >Turks- und Caicosinseln</el-option
            >
            <el-option value="Tuvalu">Tuvalu</el-option>
            <el-option value="Uganda">Uganda</el-option>
            <el-option value="Ukraine">Ukraine</el-option>
            <el-option value="Ungarn">Ungarn</el-option>
            <el-option value="Uruguay">Uruguay</el-option>
            <el-option value="Usbekistan">Usbekistan</el-option>
            <el-option value="Vanuatu">Vanuatu</el-option>
            <el-option value="Vatikan">Vatikan</el-option>
            <el-option value="Venezuela">Venezuela</el-option>
            <el-option value="Vereinigte Arabische Emirate"
              >Vereinigte Arabische Emirate</el-option
            >
            <el-option value="Vereinigte Staaten von Amerika"
              >Vereinigte Staaten von Amerika</el-option
            >
            <el-option value="Vietnam">Vietnam</el-option>
            <el-option value="Wallis und Futuna">Wallis und Futuna</el-option>
            <el-option value="Weihnachtsinsel">Weihnachtsinsel</el-option>
            <el-option value="Westsahara">Westsahara</el-option>
            <el-option value="Zentralafrikanische Republik"
              >Zentralafrikanische Republik</el-option
            >
            <el-option value="Zypern">Zypern</el-option>
            <el-option value="Zypern (Republik Zypern-Nordteil)"
              >Zypern (Republik Zypern-Nordteil)</el-option
            >
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('order.form.amount_label')" prop="amount">
          <el-input v-model.number="ruleForm.amount"></el-input>
        </el-form-item>
        <el-form-item :label="$t('order.form.email_label')" prop="email">
          <el-input
            v-model="ruleForm.email"
            :placeholder="$t('order.form.email_placeholder')"
          ></el-input>
        </el-form-item>
        <el-form-item
          :label="$t('order.form.print_name_label')"
          prop="print_name"
        >
          <el-input
            v-model="ruleForm.print_name"
            :placeholder="$t('order.form.print_name_placeholder')"
          ></el-input>
        </el-form-item>
        <el-form-item
          :label="$t('order.form.newsletter_label')"
          prop="newsletter"
        >
          <el-checkbox v-model="ruleForm.newsletter">{{
            $t('order.form.newsletter_placeholder')
          }}</el-checkbox>
        </el-form-item>
        <div class="costs">
          <p>
            <strong>{{ $t('order.costs.title') }}*</strong>
          </p>
          <p>
            {{ $t('order.costs.amount') }} x{{ ruleForm.amount }}:
            {{ (ruleForm.amount * magazinPrice).toFixed(2) }}€
          </p>
          <p>
            {{ $t('order.costs.shipping') }}:
            {{ (ruleForm.amount * shippmendPrice).toFixed(2) }}€
          </p>
        </div>
        <div class="form-footer">
          <div class="price">
            <h3>{{ currentPrice }}€</h3>
            <h5>{{ $t('order.costs.sum') }}</h5>
          </div>
          <el-form-item class="submit-btn">
            <el-button type="primary" @click="onSubmit('ruleForm')">
              {{ $t('order.form.submit') }}
            </el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div v-if="order_step == 2">
      <el-card shadow="always">
        <h3 v-if="!payIota">{{ $t('order.payment.title') }}</h3>
        <p>
          <strong
            >{{ $t('order.payment.to_pay') }}: {{ finalPriceInEur }}€*</strong
          >
        </p>
        <paypal-checkout
          v-if="!payIota"
          :amount="`${finalPriceInEur}`"
          currency="EUR"
          :client="paypal_credentials"
          :invoice-number="order._id"
          :experience="experience"
          @payment-authorized="paymentAuthorized"
          @payment-completed="paymentCompleted"
          @payment-cancelled="paymentCancelled"
        ></paypal-checkout>
        <el-button v-if="!payIota" class="btn-iota" @click="payWithIota"
          >Pay with IOTA</el-button
        >
        <div v-if="qrCodeData" class="iota-payment">
          <img v-if="qrCodeData" :src="qrCodeData.src" alt="QR CODE" />
          <br />
          <a
            v-if="qrCodeData"
            class="btn btn-primary"
            :href="
              `
                iota://${data.payment.address}/?amount=${data.payment.value}
              `
            "
            >{{ $t('order.payment.pay_with_trinity') }}</a
          >
        </div>
      </el-card>
    </div>
    <div v-if="order_step == 3">
      <el-card class="card--success" shadow="always">
        <h3>{{ $t('order.payment.success.title') }}</h3>
        <p>{{ $t('order.payment.success.thanks') }}</p>
        <p>{{ $t('order.payment.success.greetings') }}</p>
      </el-card>
    </div>
    <br />
    <Annotations />
  </div>
</template>

<script>
import * as IotaQR from '@tangle-frost/iota-qr-lib/pkg/iota-qr-lib.js'
import Annotations from './Annotations'

const API_URL = process.env.backendUrl + '/api'
export default {
  components: { Annotations },
  data() {
    console.log('socket', this.$socket)
    const checkAmount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error(this.$i18n.t('order.form.errors.amount')))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error(this.$i18n.t('order.form.errors.number')))
        } else if (value < 0) {
          callback(new Error(this.$i18n.t('order.form.errors.number_zero')))
        } else {
          callback()
        }
      }, 200)
    }
    return {
      magazinPrice: 9.0,
      finalPriceInEur: 0,
      data: null,
      socket: null,
      order_step: 1,
      ordered: false,
      qrCodeData: null,
      order: null,
      txpending: false,
      payIota: false,
      paypal_credentials: {
        sandbox:
          'ARytaJaq51tIosygQrzAvBhZcPSLd3YX6gn_kvGZN3uesBNSBcPi1VUgHQ7CrCG83onm7PQUHOATOxeH',
        production:
          'Af0NiYrpf-exmfjb4jMqDhzkW3m9Vj4BpE2IEFe8J8yzG7sv7ITa_P4A_LSqp-Mwh2yPGQEYeLp-0lKE'
      },
      experience: {
        input_fields: {
          no_shipping: 1
        }
      },
      ruleForm: {
        email: '',
        first_name: '',
        last_name: '',
        address: '',
        zip_code: '',
        city: '',
        country: 'Deutschland',
        print_name: '',
        amount: 1
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Bitte gib deinen E-Mail an.',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Bitte gib eine korrekte E-Mail an.',
            trigger: 'blur'
          }
        ],
        first_name: [
          {
            required: true,
            message: 'Bitte gib deinen Vornamen an.',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 300,
            message: 'Length should be 2 to 300',
            trigger: 'blur'
          }
        ],
        last_name: [
          {
            required: true,
            message: 'Bitte gib deinen Nachnamen an.',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 300,
            message: 'Length should be 2 to 300',
            trigger: 'blur'
          }
        ],
        address: [
          {
            required: true,
            message: 'Bitte gib deine Adresse an.',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 300,
            message: 'Length should be 2 to 300',
            trigger: 'blur'
          }
        ],
        zip_code: [
          {
            required: true,
            message: 'Bitte gib deine Postleitzahl an.',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 10,
            message: 'Length should be 2 to 300',
            trigger: 'blur'
          }
        ],
        city: [
          {
            required: true,
            message: 'Bitte gib deine Stadt an.',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 300,
            message: 'Length should be 2 to 300',
            trigger: 'blur'
          }
        ],
        amount: [{ validator: checkAmount, trigger: 'blur' }],
        print_name: [
          {
            min: 1,
            max: 30,
            message: 'Länge nur zwischen 1 und 30 Zeichen möglich!',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    shippmendPrice() {
      if (this.ruleForm.country === 'Deutschland') {
        return 1.55
      } else {
        return 3.7
      }
    },
    currentPrice() {
      return (
        this.ruleForm.amount * this.magazinPrice +
        this.ruleForm.amount * this.shippmendPrice
      ).toFixed(2)
    }
  },
  created() {
    console.log('created()')
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!')
          const self = this
          this.$axios
            .post(`${API_URL}/orders`, this.ruleForm)
            .then((result) => {
              console.log(result)
              self.order_step = 2
              self.order = result.data
              self.finalPriceInEur = result.data.final_price.toFixed(2)
            })
            .catch((err) => {
              console.log('err')
              console.log(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    paymentAuthorized(data) {
      console.log(data)
    },
    paymentCompleted(data) {
      console.log(data)
      this.payWithPaypal(data)
      this.order_step = 3
    },
    paymentCancelled(data) {
      console.log(data)
    },
    payWithIota() {
      const self = this
      this.payIota = true
      this.$axios
        .post(`${API_URL}/pay_with_iota?id=${this.order._id}`, this.order)
        .then(function(response) {
          console.log(response)
          self.data = response.data
          self.$socket.client.emit('storeClientInfo', {
            paymentOrPayoutId: response.data.payment.id
          })
          const paymentData = IotaQR.TrinityPaymentQR.generatePaymentData(
            response.data.payment.address,
            response.data.payment.value,
            'EINFACHIOTA',
            ''
          )
          IotaQR.TrinityPaymentQR.renderHtml(paymentData, 'png', 8).then(
            (qrCodeData) => {
              self.show = false
              self.qrCodeData = qrCodeData
              console.log('qr_code_data', qrCodeData)
              console.log('qr_code_data', qrCodeData.src)
            }
          )
        })
        .catch(function(error) {
          console.log('CLG')
          console.log(error)
          self.data.status = 'error'
        })
    },
    payWithPaypal(payment) {
      const self = this
      console.log('payWithPaypal', payment)
      this.$axios
        .post(`${API_URL}/pay_with_paypal?id=${this.order._id}`, { payment })
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log('CLG')
          console.log(error)
          self.data.status = 'error'
        })
    }
  },
  sockets: {
    connect() {
      console.log('socket connected')
    },
    payments(r) {
      console.log(' payments')
      console.log(r)
      if (r.status === 'paymentIncoming' && this.txpending === false) {
        this.txpending = true
        this.order_step = 3
      }
      if (r.status === 'paymentSuccess') {
        alert('Zahlung erhalten, vielen Dank für deine Bestellung!')
      }
    },
    disconnect() {
      console.log('socket disconnect')
    }
  }
}
</script>

<style lang="scss">
.form-footer {
  align-items: center;
  margin-top: 50px;
}
h3 {
  font-size: 42px;
  line-height: 1;
}
h5 {
  margin: 0;
  text-transform: uppercase;
  font-weight: 800;
  opacity: 0.5;
  font-family: 'Roboto Slab', serif;
}
.price {
  width: 100%;
  text-align: right;
  margin-bottom: 20px;
}

.submit-btn {
  margin-bottom: 0;
  text-align: center;
  width: 100%;
}

.costs {
  text-align: right;
  p {
    margin: 0;
  }
}

.iota-payment {
  text-align: center;
}

.card {
  &--success {
    background-color: rgba(103, 194, 58, 0.2);
  }
}

.btn-iota {
  background-color: rgba(64, 158, 255, 0.5);
}

@media only screen and (max-width: 1440px) {
  p {
    font-size: 14px;
  }
  h3 {
    font-size: 32px;
  }
}

@media only screen and (max-width: 740px) {
  .form-footer {
    display: inline;
  }
  .price {
    width: 100%;
    text-align: right;
    margin-bottom: 20px;
  }
  .submit-btn {
    text-align: center;
    width: 100%;
  }
}
</style>
