<template>
  <div class="cart">
    <ul class="cart-items">
      <li v-for="item of this.cartItems">
        <CartItem
          :img="item.img"
          :name="item.name"
          :coast="item.coast"
          :id="item.id"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapState } from "vuex";

export default {
  components: {
    CartItem,
  },
  computed: {
    ...mapState(["cartItems"]),
  },
};
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  justify-content: space-around;
}
.cart-items {
  list-style: none;
  padding: 80px 0 0 0;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-between;
}
</style>
