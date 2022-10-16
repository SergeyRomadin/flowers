<template>
  <div class="cart" @click.self="closeModal">
    <ul class="cart-items">
      <li v-for="item of this.cartItems">
        <CartItem
          :img="item.img"
          :name="item.name"
          :coast="item.totalCoast"
          :id="item.id"
          :amount="item.amount"
        />
      </li>
      <li>
        <div class="cart-order">
          <a class="button">Оформить заказ</a>
          И того: {{ this.getTotalCoast + "₽" }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    CartItem,
  },
  computed: {
    ...mapState(["cartItems"]),
    ...mapGetters(["getTotalCoast"]),
  },
  methods: {
    closeModal() {
      return this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.8);

  position: fixed;
  z-index: 5;
}
.cart-items {
  list-style: none;
  padding: 80px 0 0 0;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
}
.cart-order {
  display: flex;
  justify-content: space-between;
  color: #50966f;
  text-align: center;
  font-weight: bold;
}

.button {
  text-decoration: none;
  display: inline-block;
  padding: 12px;
  background: #50966f;
  color: white;
  text-transform: uppercase;
  transition: 0.3s ease-in;
  border: none;
  width: 50%;
  text-align: center;
  font-weight: bold;
  &:hover {
    background: #2f63366b;
    transform: scale(1.02);
    // box-shadow: 0px 0px 5px #99ffdd;
  }
}
</style>
