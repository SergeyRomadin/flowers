<template>
  <ul class="product-items">
    <li>
      <ProductItem
        img="https://static.tildacdn.com/tild3336-3261-4339-b162-303032353733/florentin-misty-bubb.jpg"
        name="Букет цветов"
        coast="10000"
      />
    </li>
    <li>
      <ProductItem
        img="https://www.roza4u.ru/image/cache/catalog/buket-s-gortenziej/buket-s-goluboj-gortenziej-1-1400x1400.jpg"
        name="Букет цветов"
        coast="10000"
      />
    </li>
    <li>
      <ProductItem
        img="https://lovelybuket.ru/wp-content/uploads/2021/12/elitnye-piony-eden-1.jpg"
        name="Букет цветов"
        coast="10000"
      />
    </li>
    <li>
      <ProductItem
        img="https://static.tildacdn.com/tild3336-3261-4339-b162-303032353733/florentin-misty-bubb.jpg"
        name="Букет цветов"
        coast="10000"
      />
    </li>
    <li>
      <ProductItem
        img="https://www.roza4u.ru/image/cache/catalog/buket-s-gortenziej/buket-s-goluboj-gortenziej-1-1400x1400.jpg"
        name="Букет цветов"
        coast="10000"
      />
    </li>
    <li>
      <ProductItem
        img="https://lovelybuket.ru/wp-content/uploads/2021/12/elitnye-piony-eden-1.jpg"
        name="Букет цветов"
        coast="10000"
      />
    </li>
  </ul>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
};
</script>

<style lang="scss" scoped>
.product-items {
  list-style: none;
  padding: 0;

  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
