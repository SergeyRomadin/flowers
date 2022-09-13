<template>
  <header>
    <p>Header</p>
  </header>
  <ProductItems />
  <Map />
</template>

<script>
import ProductItems from './components/ProductItems.vue';
import Map from './components/Map.vue';




export default {
  components: {
    ProductItems,
    Map,
    Map,
    Map
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Amatic SC';
  src: url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');
}

body {
  background-color: #FFF5FF;
  color: #593B59;
  font-family: 'Amatic SC', cursive;
}
</style>


