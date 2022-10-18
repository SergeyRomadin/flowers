<template>
  <div class="product-item">
    <img :src="img" />
    <div class="product-list">
      <h3>{{ this.name }}</h3>
      <span class="price">{{ this.coast }} ₽</span>

      <div>
        <input
          v-model="amount"
          @change="
            (e) => {
              return e.target.value == 0
                ? this.removeFromCart(this.id)
                : changeAmountItems([this.id, e.target.value]);
            }
          "
          type="number"
          min="0"
          max="100"
        />
        шт.
      </div>
      <button class="button" @click="this.removeFromCart(this.id)">
        Удалить
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    img: String,
    name: String,
    coast: Number,
    id: Number,
    amount: Number,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["removeFromCart", "changeAmountItems"]),
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.product-item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  min-width: 100px;
  width: 50vw;
  text-align: center;
  margin-bottom: 20px;

  background: white;
  transition: 0.3s ease-in;
  overflow: hidden;

  @media (max-width: 500px) {
    justify-content: center;

    min-width: 100px;
  }
}
.product-item img {
  display: block;
  width: 15vw;
  min-width: 100px;
  min-height: 140px;
  height: 18vw;
  @media (max-width: 500px) {
    justify-content: center;

    width: 50vw;
    height: 65vw;
  }
}

.product-list {
  background: #ffffff;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}

.product-list h3 {
  font-size: 18px;
  font-weight: 400;
  color: #444444;
  margin: 0 0 10px 0;
}

.price {
  font-size: 16px;
  color: #50966f;
  display: block;
  margin-bottom: 12px;
}

.button {
  text-decoration: none;
  display: inline-block;
  padding: 0 12px;
  background: #cccccc;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 28px;
  transition: 0.3s ease-in;
  border: none;
  margin: 5px;
}

input {
  width: 40%;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid;
  background-color: rgba($color: white, $alpha: 0);
  &:focus {
    outline: 1px solid #50966f;
    border: none;
    box-shadow: 0 0 10px #50966f;
  }
}

.product-item:hover {
  transform: scale(1.02);
  box-shadow: 1px 1px 10px #b899b1;
  // border-radius: 30px;
  .button {
    background: #593b59;
  }
}
</style>
