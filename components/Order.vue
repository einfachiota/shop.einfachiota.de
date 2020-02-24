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
        <div class="input-group">
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
        </div>
        <el-form-item :label="$t('order.form.address_label')" prop="address">
          <el-input
            v-model="ruleForm.address"
            :placeholder="$t('order.form.address_placeholder')"
          ></el-input>
        </el-form-item>
        <div class="input-group">
          <el-form-item
            :label="$t('order.form.zip_code_label')"
            prop="zip_code"
          >
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
        </div>
        <el-form-item :label="$t('order.form.country_label')" prop="country">
          <el-select
            v-model="ruleForm.country"
            :placeholder="$t('order.form.country_placeholder')"
          >
            <el-option
              v-for="(country, index) in countries"
              :key="index"
              :value="country.name"
              >{{ country.name }}</el-option
            >
          </el-select>
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
        <div class="costs">
          <el-form-item :label="$t('order.form.amount_label')" prop="amount">
            <el-input v-model.number="ruleForm.amount"></el-input>
          </el-form-item>
          <div class="costs-content">
            <div class="price">
              <h5>{{ $t('order.costs.sum') }}*</h5>
              <h3>{{ currentPrice }}€</h3>
            </div>
            <p>
              <strong>
                {{ $t('order.costs.amount') }} x{{ ruleForm.amount }}:
              </strong>
              {{ (ruleForm.amount * magazinPrice).toFixed(2) }}€
            </p>
            <p>
              <strong>{{ $t('order.costs.shipping') }}:</strong>
              {{ (ruleForm.amount * shippmendPrice).toFixed(2) }}€
            </p>
          </div>
        </div>
        <el-form-item prop="newsletter">
          <el-checkbox v-model="ruleForm.newsletter">{{
            $t('order.form.newsletter_placeholder')
          }}</el-checkbox>
        </el-form-item>
        <div class="form-footer">
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
          <button @click="copySign">Copy address</button>
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
import { getCountries } from '../translations/countries'
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
      countries: getCountries(),
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
        country: 'Germany',
        print_name: '',
        amount: 1
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Please enter your email.',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Please enter a correct email.',
            trigger: 'blur'
          }
        ],
        first_name: [
          {
            required: true,
            message: 'Please enter your first name.',
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
            message: 'Please enter your last name.',
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
            message: 'Please enter your address.',
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
            message: 'Please enter your zip code.',
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
            message: 'Please enter your city.',
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
            max: 42,
            message: 'Length between 1 and 42 characters only!',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    shippmendPrice() {
      if (this.ruleForm.country === 'Germany') {
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
    copySign() {
      // btw writeText() returns a promise so you could utilize that somehow if you want
      navigator.clipboard.writeText(this.data.payment.address)
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!')
          const self = this

          // check ref link existence and add it
          if (this.$route.query.refLink) {
            console.log('refLink order')
            this.ruleForm.ref_address = this.$route.query.refLink
          }

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
      this.fullscreenLoading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 183, 197, 0.5)'
      })
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
              self.fullscreenLoading.close()
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
.el-button {
  width: 100%;
}
.el-form {
  .input-group {
    display: flex;
    justify-content: space-between;
    margin: 0 -15px;
    .el-form-item {
      flex: 1;
      margin: 0 15px 30px;
    }
  }
  .el-form-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .el-input {
      &__inner {
        background-color: var(--light_50);
        color: var(--dark_transp);
        border: none;
      }
    }
    &__content {
      width: 100%;
      background-color: transparent;
      .el-select {
        width: 100%;
      }
      .el-checkbox {
        text-align: left;
        display: flex;
        align-items: center;
      }
    }
    &__label {
      font-size: 14px;
      font-weight: 900;
    }
  }
}
.costs {
  display: flex;
  justify-content: space-between;
  .costs-content {
    text-align: right;
    h3,
    h5 {
      font-family: 'Open Sans';
    }
    h3 {
      font-size: 42px;
      line-height: 1;
      font-weight: 900;
    }
    h5 {
      margin: 0;
      text-transform: uppercase;
      font-weight: 800;
      opacity: 0.5;
    }
    p {
      margin: 0;
    }
    .price {
      width: 100%;
      text-align: right;
      margin-bottom: 20px;
    }
  }
}
.form-footer {
  align-items: center;
  margin-top: 50px;
}

.submit-btn {
  margin-bottom: 0;
  text-align: center;
  width: 100%;
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
