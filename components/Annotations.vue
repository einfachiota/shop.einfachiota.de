<template>
  <div class="annotations">
    <p class="fine-print">* {{ $t('annotations.mwst') }}.</p>
    <br />
    <p class="fine-print">
      {{ $t('annotations.confirm') }}
      <a
        href="https://www.einfachiota.de/#/privacy"
        target="_blank"
        class="link"
      >
        {{ $t('annotations.data') }}
      </a>
      <br />
      <br />
      <strong>{{ $t('annotations.what_data') }}<sup>*</sup></strong>
    </p>
    <hr />
    <p class="fine-print">
      {{ $t('annotations.what_data_text') }}
      <a
        href="https://www.einfachiota.de/#/privacy#magazin"
        target="_blank"
        class="link"
      >
        {{ $t('annotations.what_data_link') }}
      </a>
    </p>
  </div>
</template>

<style lang="scss">
.fine-print {
  font-size: 0.8em;
}
.link {
  color: rgba(0, 0, 0, 0.75);
  text-decoration: none;
  transition: color 200ms ease-in-out;
  &:hover {
    color: var(--primary);
  }
}
</style>
