<template>
  <div class="roadmap">
    <div class="roadmap__item">
      <div class="roadmap__item-wrapper">
        <div class="roadmap__indicator"></div>
        <div class="roadmap__indicator today">
          <div class="wave"></div>
          <div class="wave wave_double"></div>
          <div class="wave wave_two-thirds"></div>
          <div class="counter">
            <span class="counter__number">14 Tage</span>
          </div>
        </div>
        <div class="roadmap__line"></div>
        <div class="roadmap__line transparent"></div>
        <h5>11.11.2019</h5>
        <span>Vorverkauf Start</span>
      </div>
    </div>
    <div class="roadmap__item">
      <div class="roadmap__item-wrapper">
        <div class="roadmap__indicator"></div>
        <h5>21.11.2019</h5>
        <span>Vorverkauf Ende</span>
      </div>
    </div>
    <div class="roadmap__item">
      <div class="roadmap__item-wrapper">
        <div class="roadmap__indicator empty"></div>
        <h5>11.12.2019</h5>
        <span>Verkauf Start</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.roadmap {
  background-color: var(--dark);
  height: 15vh;
  width: 100%;
  flex-grow: 1;
  display: flex;
  &__item {
    height: 100%;
    flex: 0.3333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--white);
  }
  &__item-wrapper {
    position: relative;
    width: 200px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes changescale {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.3);
    }
  }
  &__indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    height: 15px;
    width: 15px;
    margin-top: 5px;
    border-radius: 50%;
    margin-bottom: 10px;
    box-sizing: border-box;
    position: relative;
    z-index: 100;
    box-shadow: 0 0 5px var(--primary_50);
    position: relative;
    @keyframes changewidth {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(1.5);
      }
    }
    .wave {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid var(--primary);
      opacity: 0.25;
      animation-duration: 2s;
      animation-name: changewidth;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    .wave_double {
      animation-duration: 0.4s;
      opacity: 0.15;
    }
    .wave_two-thirds {
      animation-duration: 0.8s;
      opacity: 0.05;
    }
    /* .counter {

    } */
    &.empty {
      background-color: white;
    }
    &.today {
      position: absolute;
      width: 20px;
      height: 20px;
      top: -2.5px;
      left: calc(16.66vw * 3.25);
      /* animation-duration: 2s;
      animation-name: changescale;
      animation-iteration-count: infinite;
      animation-direction: alternate; */
    }
  }
  &__line {
    position: absolute;
    z-index: 10;
    width: calc(16.66vw * 3.25 - 100px);
    left: 50%;
    top: 10px;
    height: 5px;
    background-color: var(--primary);
    box-shadow: 0 0 5px var(--primary_50);
    &.transparent {
      z-index: 9;
      background-color: transparent;
      width: calc(16.66vw * 4 - 5px);
      background-color: var(--white);
      box-sizing: border-box;
    }
  }
  h5 {
    color: var(--white);
    font-family: 'Open Sans';
    font-weight: bold;
    opacity: 0.5;
    margin: 0;
  }
  span {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
  hr {
    width: 25px;
  }
  .counter {
    position: relative;
    top: 50px;
    background-color: var(--primary);
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    &:before {
      content: '';
      height: 16px;
      width: 16px;
      position: absolute;
      top: -5px;
      background-color: var(--primary);
      transform: rotate(45deg);
      border-radius: 5px;
    }
    &__number {
      text-align: center;
      white-space: nowrap;
      text-transform: unset;
      letter-spacing: 0;
      font-size: 20px;
    }
  }
}
</style>
