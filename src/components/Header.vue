<template>
  <div class="header">
    <a href="#map">Контакты</a>
    <a href="tel:+70713650543">Телефон: +79998887766</a>
    <a @click="showCartModal">Корзина{{ this.totalCoast }}</a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTotalCoast"]),
    totalCoast() {
      if (this.getTotalCoast) {
        return "(" + this.getTotalCoast + "₽)";
      }
    },
  },
  methods: {
    showCartModal() {
      return this.$emit("showCartModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: #806491;
  box-shadow: 5px 0 5px #442d3f;

  margin: 0;
  padding: 10px;

  color: #dfdede;
  font-size: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: fixed;

  top: 0;
  z-index: 10;

  a {
    cursor: pointer;
    color: #dfdede;

    &:hover {
      color: #442d3f;
    }
  }
}
</style>
