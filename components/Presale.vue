<template>
  <div id="presale" class="presale">
    <div class="container container--xs">
      <div class="column center">
        <h2>{{ $t('home.buy_now') }}</h2>
        <p class="order-detail">
          <strong>{{ $t('home.pay_with.title') }}</strong>
          {{ $t('home.pay_with.text') }}
        </p>
        <p class="order-detail">
          <strong>{{ $t('home.delivery.title') }}</strong>
          {{ $t('home.delivery.text') }}
        </p>
        <Order />
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
.presale {
  .container {
    &--xs {
      max-width: 600px;
    }
  }
  .column {
    &.center {
      text-align: center;
    }
    .order-detail {
      margin: 0;
      &:nth-child(2) {
        margin-top: 20px;
      }
      &:nth-child(3) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
