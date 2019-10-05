<template>
  <div>
    <div v-if="order_step == 1">
      <h3>Wohin soll Deine Bestellung geliefert werden?</h3>
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
        <el-form-item label="E-Mail Addresse" prop="email">
          <el-input
            v-model="ruleForm.email"
            placeholder="Deine E-Mail Addresse, falls bei der Lieferung etwas schief geht."
          ></el-input>
        </el-form-item>
        <div>
          <p>
            <strong>Summe:</strong>
            {{ ruleForm.amount * 10 }}€
          </p>
        </div>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('ruleForm')"
            >Zahlungspflichtig bestellen</el-button
          >
        </el-form-item>
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
      this.order_step = 3
    },
    paymentCancelled(data) {
      console.log(data)
    }
  }
}
</script>
