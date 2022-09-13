<template>
  <header>
    <p>Header</p>
  </header>
  <div class="_container">
    <ProductItems />
    <Map />
  </div>

</template>

<script>
import ProductItems from './components/ProductItems.vue';
import Map from './components/Map.vue';




export default {
  components: {
    ProductItems,
    Map,
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Amatic SC';
  src: url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');
}

$minWidth: 320px;
$maxWidth: 1152;
$maxWidthContainer: 856;
$md1: $maxWidthContainer +12;
$md2: 991.98;
$md3: 767.98;
$md4: 479.98;

body {
  background-color: #FFF5FF;
  color: #593B59;
  font-family: 'Amatic SC', cursive;
}

a {
  text-decoration: none;
  color: #783C52;
}

._container {
  max-width: $maxWidthContainer + px;
  margin: 0 auto;

  @media (max-width: $md1 + px) {
    max-width: 750px;
  }

  @media (max-width: $md2 + px) {
    max-width: none;
    padding: 0 10px;
  }
}
</style>


