<template>
  <div class="product-item">
    <img :src="img" />
    <div class="product-list">
      <h3>{{ this.name }}</h3>
      <span class="price">{{ this.coast }} ₽</span>
      <!-- <a href="" class="button" @click="$store.commit('addToCart', this.id)"
        >В корзину</a
      > -->
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
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["removeFromCart"]),
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

  border-bottom: 2px solid #f5f5f5;
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
  padding: 15px 20px;
}

.product-list h3 {
  font-size: 18px;
  font-weight: 400;
  color: #444444;
  margin: 0 0 10px 0;
}

.price {
  font-size: 16px;
  color: #593b59;
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
}

.product-item:hover {
  transform: scale(1.02);
  transform: translateY(-8px);
  border-bottom: 2px solid #593b59;
  box-shadow: 0 0 10px #442d3f;
  // border-radius: 30px;
  .button {
    background: #593b59;
  }
}
</style>
