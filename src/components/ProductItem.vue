<template>

  <div class="product-item">
    <img :src="img">
    <div class=" product-list">
      <h3>{{ this.name }}</h3>
      <span class="price">{{ this.coast }} ₽</span>
      <a href="" class="button">В корзину</a>
    </div>
  </div>

</template>

<script>

export default {
  props: {
    img: String,
    name: String,
    coast: Number,
  },
  // data() {
  //   return {
  //     adada : this.img
  //   }
  // }



}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.product-item {
  width: 300px;
  text-align: center;
  margin: 10px;
  border-radius: 40px;
  border-bottom: 2px solid #F5F5F5;
  background: white;
  // font-family: "Open Sans";
  transition: .3s ease-in;
  overflow: hidden;
}

.product-item:hover {
  border-bottom: 2px solid #593B59;
}

.product-item img {
  display: block;
  width: 100%;

}

.product-list {
  background: #fafafa;
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
  color: #593B59;
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
  transition: .3s ease-in;
}

.product-item:hover .button {
  background: #593B59;
}
</style>