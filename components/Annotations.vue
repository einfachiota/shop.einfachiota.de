<template>
  <div class="annotations">
    <p class="fine-print">
      *{{ $t('annotations.confirm') }}
      <router-link to="/privacy" class="link">
        {{ $t('annotations.data') }}
      </router-link>
    </p>
    <hr />
    <div class="what-about-data">
      <p class="fine-print title">{{ $t('annotations.what_data') }}</p>
      <p class="fine-print">
        {{ $t('annotations.what_data_text') }}
        <router-link to="/privacy" class="link">
          {{ $t('annotations.what_data_link') }}
        </router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.what-about-data {
  text-align: left;
  .title {
    font-weight: 900;
    margin-top: 10px;
  }
  .fine-print {
    margin: 0;
  }
}
.fine-print {
  font-size: 0.8em;
}
.link {
  color: var(--primary);
  font-weight: 900;
  text-decoration: none;
  transition: color 200ms ease-in-out;
  &:hover {
    color: var(--primary);
  }
}
hr {
  opacity: 0.25;
}
</style>
