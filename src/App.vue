<template>
  <div class="app">
    <Header @showCartModal="showModalCart = 1" />
    <Cart v-if="showModalCart" @closeModal="showModalCart = 0" />
    <div class="_container">
      <ProductItems />
      <Map />
    </div>
    <Cart v-if="showModalCart" />
  </div>
</template>

<script>
import ProductItems from "./components/ProductItems.vue";
import Map from "./components/Map.vue";
import Header from "./components/Header.vue";
import Cart from "./components/Cart.vue";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["GET_ITEMS_DATA_FROM_API"]),
  },
  created() {
    this.GET_ITEMS_DATA_FROM_API();
  },
  data() {
    return {
      showModalCart: 0,
    };
  },
  components: {
    ProductItems,
    Map,
    Header,
    Cart,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Amatic SC";
  src: url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap");
}

$minWidth: 320px;
$maxWidth: 1152;
$maxWidthContainer: 856;
$md1: $maxWidthContainer + 12;
$md2: 991.98;
$md3: 767.98;
$md4: 479.98;

body {
  background-color: #fafafa;
  color: #593b59;
  font-family: "Amatic SC", cursive;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #783c52;
}

._container {
  max-width: $maxWidthContainer + px;
  margin: 0 auto;

  @media (max-width: ($md1 + px)) {
    max-width: 750px;
  }

  @media (max-width: ($md2 + px)) {
    max-width: none;
    padding: 0 10px;
  }
}
</style>
