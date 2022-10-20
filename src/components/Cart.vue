<template>
  <div class="cart" @click.self="closeModal">
    <div class="cart__wrapper">
      <ul v-if="this.cartItems.length > 0" class="cart__items">
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
          <div class="cart-order">И того: {{ this.getTotalCoast + "₽" }}</div>
        </li>
        <li><FeedbackForm @formSubmit="this.orderSubmit" /></li>
      </ul>
      <div v-else v-if="!submit" class="cart__items">
        <h2>Корзина пуста!</h2>
        <BasketMinus :size="280" class="basket-minus" />
        <p>
          Добавьте понравившиеся вам товары в корзину, для дальнейшего
          оформления заказа
        </p>
      </div>
      <div v-if="submit" class="cart__items">
        <h2>Большое спасибо!</h2>
        <BasketCheck :size="280" class="basket-minus" />
        <p>Скоро мы с вами свяжемся...</p>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapState, mapGetters } from "vuex";
import FeedbackForm from "./FeedbackForm.vue";
import BasketMinus from "vue-material-design-icons/BasketMinus";
import BasketCheck from "vue-material-design-icons/BasketCheck";

export default {
  components: {
    CartItem,
    FeedbackForm,
    BasketMinus,
    BasketCheck,
  },
  data() {
    return {
      submit: false,
    };
  },
  computed: {
    ...mapState(["cartItems"]),
    ...mapGetters(["getTotalCoast"]),
  },
  methods: {
    closeModal() {
      this.submit = 1;
      return this.$emit("closeModal");
    },
    orderSubmit() {
      this.submit = 1;
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
  overflow: hidden;
  position: fixed;
  z-index: 5;
  overflow: hidden auto;
}
.cart__wrapper {
  background-color: whitesmoke;
  height: min-content;
  padding: 10px;
  margin: 80px 0;
  display: flex;
  width: min-content;
}
.cart__items {
  list-style: none;
  padding: 0 0 0 0;
  height: min-content;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  // .basket-minus {

  // }
}
.cart-order {
  display: flex;
  justify-content: right;
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
