<template>

  <ul class="product-items">
    <li>
      <ProductItem img="https://static.tildacdn.com/tild3336-3261-4339-b162-303032353733/florentin-misty-bubb.jpg"
        name="Букет цветов" coast="10000" />
    </li>
    <li>
      <ProductItem img="https://static.tildacdn.com/tild3336-3261-4339-b162-303032353733/florentin-misty-bubb.jpg"
        name="Букет цветов" coast="10000" />
    </li>
    <li>
      <ProductItem img="https://static.tildacdn.com/tild3336-3261-4339-b162-303032353733/florentin-misty-bubb.jpg"
        name="Букет цветов" coast="10000" />
    </li>
    <li>
      <ProductItem img="https://static.tildacdn.com/tild3336-3261-4339-b162-303032353733/florentin-misty-bubb.jpg"
        name="Букет цветов" coast="10000" />
    </li>
    <li>
      <ProductItem img="https://static.tildacdn.com/tild3336-3261-4339-b162-303032353733/florentin-misty-bubb.jpg"
        name="Букет цветов" coast="10000" />
    </li>
    <li>
      <ProductItem img="https://static.tildacdn.com/tild3336-3261-4339-b162-303032353733/florentin-misty-bubb.jpg"
        name="Букет цветов" coast="10000" />
    </li>
    <li>
      <ProductItem img="https://static.tildacdn.com/tild3336-3261-4339-b162-303032353733/florentin-misty-bubb.jpg"
        name="Букет цветов" coast="10000" />
    </li>
    <li>
      <ProductItem img="https://static.tildacdn.com/tild3336-3261-4339-b162-303032353733/florentin-misty-bubb.jpg"
        name="Букет цветов" coast="10000" />
    </li>
    <li>
      <ProductItem img="https://static.tildacdn.com/tild3336-3261-4339-b162-303032353733/florentin-misty-bubb.jpg"
        name="Букет цветов" coast="10000" />
    </li>
  </ul>


</template>

<script>
import ProductItem from './ProductItem.vue'

export default {
  components: {
    ProductItem,
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.product-items {
  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;
}
</style>