<template>
  <div>
    <div v-if="order_step == 1">
      <h3>Wohin soll Deine Bestellung geliefert werden?</h3>
      <el-form
        :model="formInline"
        class="demo-form-inline"
        status-icon
        :rules="rules"
      >
        <el-form-item label="Vorname">
          <el-input
            v-model="formInline.first_name"
            placeholder="Dein Vorname"
          ></el-input>
        </el-form-item>
        <el-form-item label="Nachname">
          <el-input
            v-model="formInline.last_name"
            placeholder="Dein Nachname"
          ></el-input>
        </el-form-item>
        <el-form-item label="Adresse">
          <el-input
            v-model="formInline.address"
            placeholder="Deine Straße und Hausnummer"
          ></el-input>
        </el-form-item>
        <el-form-item label="Postleitzahl">
          <el-input
            v-model="formInline.zip_code"
            placeholder="Deine Postleitzahl"
          ></el-input>
        </el-form-item>
        <el-form-item label="Stadt">
          <el-input
            v-model="formInline.city"
            placeholder="Deine Stadt"
          ></el-input>
        </el-form-item>
        <el-form-item label="Land">
          <el-select v-model="formInline.country" placeholder="Wähle dein Land">
            <el-option label="Deutschland" value="de"></el-option>
            <el-option label="Österreich" value="ch"></el-option>
            <el-option label="Schweiz" value="at"></el-option>
            <el-option label="Luxemburg" value="lux"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Anzahl" prop="amount">
          <el-input v-model.number="formInline.amount"></el-input>
        </el-form-item>
        <el-form-item label="E-Mail Addresse">
          <el-input
            v-model="formInline.email"
            placeholder="Deine E-Mail Addresse, falls bei der Lieferung etwas schief geht."
          ></el-input>
        </el-form-item>
        <div>
          <p>
            <strong>Summe:</strong>
            {{ formInline.amount * 10 }}€
          </p>
        </div>
        <el-form-item>
          <el-button type="primary" @click="onSubmit"
            >Zahlungspflichtig bestellen</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <div v-if="order_step == 2">
      <h3>Wie willst du bezahlen?</h3>
      <paypal-checkout
        amount="10.00"
        currency="EUR"
        :client="paypal_credentials"
        env="sandbox"
        :invoice-number="'201705051002'"
        :experience="experience"
        @payment-authorized="paymentAuthorized"
        @payment-completed="paymentCompleted"
        @payment-cancelled="paymentCancelled"
      ></paypal-checkout>
    </div>
    <div v-if="order_step == 3">
      <h3>Danke für deinen Kauf</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const checkAmount = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error('Bitte gib an, wieviel Exemplare du möchtest.')
        )
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Bitte gibt eine Zahl ein.'))
        } else if (value < 0) {
          callback(new Error('Komm schon, die Zahl muss gößer als 0 sein :-)'))
        } else {
          callback()
        }
      }, 200)
    }
    return {
      order_step: 1,
      ordered: false,
      paypal_credentials: {
        sandbox:
          'ARytaJaq51tIosygQrzAvBhZcPSLd3YX6gn_kvGZN3uesBNSBcPi1VUgHQ7CrCG83onm7PQUHOATOxeH',
        production: '<production client id>'
      },

      experience: {
        input_fields: {
          no_shipping: 1
        }
      },
      formInline: {
        user: '',
        country: 'de',
        amount: 1
      },
      rules: {
        amount: [{ validator: checkAmount, trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      this.order_step = 2
      /*
      const self = this
      this.$axios
        .post('http://localhost:5000/api/orders', this.formInline)
        .then((err, result) => {
          console.log(err)
          console.log(result)
        })
        .catch((err) => {
          console.log('err')
          console.log(err)
        })
        */
    },
    paymentAuthorized(data) {
      console.log(data)
    },
    paymentCompleted(data) {
      console.log(data)
      this.order_step = 3
    },
    paymentCancelled(data) {
      console.log(data)
    }
  }
}
</script>
