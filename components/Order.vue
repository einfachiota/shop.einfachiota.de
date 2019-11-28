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
        <el-form-item label="Vorname" prop="first_name">
          <el-input
            v-model="ruleForm.first_name"
            placeholder="Dein Vorname"
            required="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="Nachname" prop="last_name">
          <el-input
            v-model="ruleForm.last_name"
            placeholder="Dein Nachname"
          ></el-input>
        </el-form-item>
        <el-form-item label="Adresse" prop="address">
          <el-input
            v-model="ruleForm.address"
            placeholder="Deine Straße und Hausnummer"
          ></el-input>
        </el-form-item>
        <el-form-item label="Postleitzahl" prop="zip_code">
          <el-input
            v-model="ruleForm.zip_code"
            placeholder="Deine Postleitzahl"
          ></el-input>
        </el-form-item>
        <el-form-item label="Stadt" prop="city">
          <el-input
            v-model="ruleForm.city"
            placeholder="Deine Stadt"
          ></el-input>
        </el-form-item>
        <el-form-item label="Land" prop="country">
          <el-select v-model="ruleForm.country" placeholder="Wähle dein Land">
            <el-option label="Deutschland" value="de"></el-option>
            <el-option label="Österreich" value="ch"></el-option>
            <el-option label="Schweiz" value="at"></el-option>
            <el-option label="Luxemburg" value="lux"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Anzahl" prop="amount">
          <el-input v-model.number="ruleForm.amount"></el-input>
        </el-form-item>
        <el-form-item label="E-Mail Adresse" prop="email">
          <el-input
            v-model="ruleForm.email"
            placeholder="Deine E-Mail Adresse, falls bei der Lieferung etwas schief geht."
          ></el-input>
        </el-form-item>
        <el-form-item label="Neuigkeiten per E-Mail" prop="print_name">
          <el-checkbox v-model="ruleForm.newsletter">
            Ich möchte Neuigkeiten erhalten.
          </el-checkbox>
        </el-form-item>
        <div class="costs">
          <p><strong>Kosten</strong></p>
          <p>
            Magazin x{{ ruleForm.amount }}:
            {{ (ruleForm.amount * magazinPrice).toFixed(2) }}€
          </p>
          <p>Lieferung: {{ shippmendPrice.toFixed(2) }}€</p>
        </div>
        <div class="form-footer">
          <div class="price">
            <h3>{{ currentPrice }}€</h3>
            <h5>Summe</h5>
          </div>
          <el-form-item class="submit-btn">
            <el-button type="primary" @click="onSubmit('ruleForm')"
              >Bestellen</el-button
            >
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div v-if="order_step == 2">
      <el-card shadow="always">
        <h3>Wie willst du bezahlen?</h3>
        <p>
          <strong> Zu zahlen: {{ finalPriceInEur }}€</strong>
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
        <el-button v-if="!payIota" class="btn-iota" @click="payWithIota">
          Pay with IOTA
        </el-button>
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
          >
            Zahle hier mit Trinity
          </a>
        </div>
      </el-card>
    </div>
    <div v-if="order_step == 3">
      <el-card class="card--success" shadow="always">
        <h3>Danke für deinen Support!</h3>
        <p>Wir wünschen dir noch einen schönen Tag.</p>
        <p>Dein einfachIOTA Team.</p>
      </el-card>
    </div>
  </div>
</template>

<script>
import * as IotaQR from '@tangle-frost/iota-qr-lib/pkg/iota-qr-lib.js'

const API_URL = process.env.backendUrl + '/api'
export default {
  data() {
    console.log('socket', this.$socket)
    const checkAmount = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error('Bitte gib an, wie viel Exemplare du möchtest.')
        )
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Bitte gibt eine Zahl ein.'))
        } else if (value < 0) {
          callback(new Error('Komm schon, die Zahl muss größer als 0 sein :-)'))
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
        country: 'de',
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
      if (this.ruleForm.country === 'de') {
        return 1.55
      } else {
        return 3.7
      }
    },
    currentPrice() {
      return (
        this.ruleForm.amount * this.magazinPrice +
        this.shippmendPrice
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
            customId: response.data.payment.id
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
