<template>
  <div class="map">
    <div class="map__yandex">
      <a
        href="https://yandex.ru/maps/142/donetsk/?utm_medium=mapframe&utm_source=maps"
        style="color: #eee; font-size: 12px; position: absolute; top: 0px"
        >Донецк</a
      >
      <a
        href="https://yandex.ru/maps/142/donetsk/house/prospekt_bohdana_khmelnytskoho_93/Z04YfgdnSE0HQFpifXxwcH9kYQ==/?from=mapframe&ll=37.807179%2C48.011375&utm_medium=mapframe&utm_source=maps&z=17"
        style="color: #eee; font-size: 12px; position: absolute; top: 14px"
        >Проспект Богдана Хмельницкого, 93 на карте Донецка — Яндекс Карты</a
      >
      <iframe
        src="https://yandex.ru/map-widget/v1/-/CCUVBXUPHA"
        frameborder="1"
        allowfullscreen="true"
        style="position: relative"
      ></iframe>
    </div>
    <div class="map__contacts">
      <h3>Как нас найти?</h3>
      <span>г.Донецк, Проспект Богдана Хмельницкого, д. 93</span>
      <span
        ><a href="tel:+70713650543">+7(071)-365-05-43</a> Viber, WhatsApp</span
      >
      <span><a href="https://t.me/nikaflowersdn">Telegram NikaFlowers</a></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.map {
  display: flex;
  justify-content: space-around;

  position: relative;
  overflow: hidden;

  // .map__yandex

  &__yandex {
    max-width: 50%;
    width: 50vw;
    height: 50vh;
    max-height: 425px;

    a {
      padding-left: 10px;
    }

    iframe {
      width: 100%;
      height: 100%;
    }
  }

  // .map__contacts

  &__contacts {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 40px;

    a {
      font-weight: bold;
    }
  }
}
</style>
