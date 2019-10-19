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
            disabled
            placeholder="Dein Vorname"
            required="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="Nachname" prop="last_name">
          <el-input
            v-model="ruleForm.last_name"
            disabled
            placeholder="Dein Nachname"
          ></el-input>
        </el-form-item>
        <el-form-item label="Adresse" prop="address">
          <el-input
            v-model="ruleForm.address"
            disabled
            placeholder="Deine Straße und Hausnummer"
          ></el-input>
        </el-form-item>
        <el-form-item label="Postleitzahl" prop="zip_code">
          <el-input
            v-model="ruleForm.zip_code"
            disabled
            placeholder="Deine Postleitzahl"
          ></el-input>
        </el-form-item>
        <el-form-item label="Stadt" prop="city">
          <el-input
            v-model="ruleForm.city"
            disabled
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
          <el-input disabled v-model.number="ruleForm.amount"></el-input>
        </el-form-item>
        <el-form-item label="E-Mail Addresse" prop="email">
          <el-input
            v-model="ruleForm.email"
            disabled
            placeholder="Deine E-Mail Addresse, falls bei der Lieferung etwas schief geht."
          ></el-input>
        </el-form-item>
        <div class="form-footer">
          <div class="price">
            <h3>{{ ruleForm.amount * 10 }}€</h3>
            <h5>Summe</h5>
          </div>
          <el-form-item class="submit-btn">
            <el-button disabled type="primary" @click="onSubmit('ruleForm')"
              >Bald Zahlungspflichtig bestellen</el-button
            >
          </el-form-item>
        </div>
      </el-form>
    </div>

    <div v-if="order_step == 2">
      <h3>Wie willst du bezahlen?</h3>
      <p>Kosten: {{ final_price }}</p>
      <paypal-checkout
        :amount="`${final_price}`"
        currency="EUR"
        :client="paypal_credentials"
        env="sandbox"
        :invoice-number="order._id"
        :experience="experience"
        @payment-authorized="paymentAuthorized"
        @payment-completed="paymentCompleted"
        @payment-cancelled="paymentCancelled"
      ></paypal-checkout>
      <el-button @click="payWithIota">Pay with IOTA</el-button>
      <img v-if="qrCodeData" :src="qrCodeData.src" alt="QR CODE" />
    </div>
    <div v-if="order_step == 3">
      <h3>Danke für deinen Kauf</h3>
    </div>
  </div>
</template>

<script>
import * as IotaQR from '@tangle-frost/iota-qr-lib/pkg/iota-qr-lib.js'

export default {
  data() {
    console.log('socket', this.$socket)
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
      socket: null,
      order_step: 1,
      ordered: false,
      qrCodeData: null,
      final_price: 10,
      order: null,
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
      ruleForm: {
        email: '',
        first_name: '',
        last_name: '',
        address: '',
        zip_code: '',
        city: '',
        country: 'de',
        amount: 1,
        final_price: null
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
        amount: [{ validator: checkAmount, trigger: 'blur' }]
      }
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
            .post('http://localhost:5000/api/orders', this.ruleForm)
            .then((result) => {
              console.log(result)
              self.order_step = 2
              self.order = result.data
              self.final_price = result.data.final_price
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
      this.$axios
        .post(
          `http://localhost:5000/api/pay_with_iota?id=${this.order._id}`,
          this.order
        )
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
        .post(
          `http://localhost:5000/api/pay_with_paypal?id=${this.order._id}`,
          { payment }
        )
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
    payments() {
      console.log('payments')
      alert()
    },
    disconnect() {
      console.log('socket disconnect')
    }
  }
}
</script>

<style lang="scss">
.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
}
h3 {
  font-size: 72px;
  line-height: 1;
}
h5 {
  margin: 0;
  text-transform: uppercase;
  font-weight: 800;
  opacity: 0.5;
  font-family: 'Roboto Slab', serif;
}
.submit-btn {
  margin-bottom: 0;
}
</style>
