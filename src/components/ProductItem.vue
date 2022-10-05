<template>
  <div class="product-item">
    <img :src="img" />
    <div class="product-list">
      <h3>{{ this.name }}</h3>
      <span class="price">{{ this.coast }} ₽</span>
      <a href="" class="button" @click="$store.commit('addToBasket', this.id)"
        >В корзину</a
      >
      <button class="button" @click="$store.commit('addToBasket', this.id)">
        В корзину
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    name: String,
    coast: String,
    id: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.product-item {
  min-width: 100px;
  width: 15vw;
  text-align: center;
  margin-bottom: 20px;

  border-bottom: 2px solid #f5f5f5;
  background: white;
  transition: 0.3s ease-in;
  overflow: hidden;
}
.product-item img {
  display: block;
  width: 100%;
  min-height: 150px;
  height: 18vw;
}

.product-list {
  background: #ffffff;
  padding: 15px 0;
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
