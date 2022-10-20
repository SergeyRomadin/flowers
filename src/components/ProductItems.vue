<template>
  <ul class="product-items">
    <li v-for="item of this.itemsData">
      <ProductItem
        :img="item.img"
        :name="item.name"
        :coast="item.coast"
        :id="item.id"
      />
    </li>
  </ul>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["itemsData"]),
  },
  components: {
    ProductItem,
  },
};
</script>

<style lang="scss" scoped>
.product-items {
  list-style: none;
  padding: 80px 0 0 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
