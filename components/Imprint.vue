<template>
  <div class="content-wrapper">
    <div class="content">
      <div class="container">
        <h1 class="heading">{{ $t('imprint.heading') }}</h1>

        <h2 class="subheading">{{ $t('imprint.subheading') }}</h2>
        <p>Sebastian Heußer</p>
        <p>Collingstraße 104</p>
        <p>66424 Homburg</p>

        <h3>{{ $t('imprint.contact') }}</h3>
        <p>E-Mail: support@einfachiota.de</p>
        <h3>{{ $t('imprint.subheading2') }}</h3>

        <p>Sebastian Heußer</p>
        <p>Collingstraße 104</p>
        <p>66424 Homburg</p>

        <h3>{{ $t('imprint.subheading') }}</h3>
        <p>
          {{ $t('imprint.text1') }}
        </p>
        <p>
          {{ $t('imprint.text2') }}
        </p>
        <p>
          {{ $t('imprint.text3') }}
        </p>
        Icons made by
        <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan"
          >Darius Dan</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
        is licensed by
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
          >CC 3.0 BY</a
        >
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.content {
  padding: 150px 0;
  @media only screen and (max-width: 1240px) {
    padding: 130px 50px;
  }
  @media only screen and (max-width: 900px) {
    padding: 100px 30px;
  }
  @media only screen and (max-width: 500px) {
    padding: 80px 20px;
  }
}
.container {
  width: 1200px;
  margin: 0 auto;
  @media only screen and (max-width: 1240px) {
    width: 100%;
  }
}
.row {
  display: flex;
  margin: 0 -25px;
  &.inverted {
    flex-direction: row-reverse;
  }
  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
}
.col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: 0 25px;
  &.center-center {
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    p,
    span {
      font-size: 14px;
    }
    .iso-icon {
      max-width: 80%;
      margin-bottom: 30px;
    }
  }
}

h2 {
  font-family: 'Open Sans';
  font-size: 64px;
  color: var(--dark);
  text-transform: uppercase;
  @media only screen and (max-width: 500px) {
    font-size: 42px;
  }
  @media only screen and (max-width: 330px) {
    font-size: 32px;
  }
}

.list {
  margin-bottom: 50px;
  &__item {
    display: flex;
    align-items: center;
    margin: 8px 0;
    img {
      margin-top: 1px;
      height: 16px;
      width: 20px;
      border-radius: 10px;
      margin-right: 8px;
    }
  }
}
</style>
