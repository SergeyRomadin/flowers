import { toNumber } from "@vue/shared";
import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    itemsData: [],
    cartItems: [],
  },
  getters: {
    getTotalCoast(state) {
      if (state.cartItems.length > 0) {
        return state.cartItems.reduce((acc, el) => {
          acc += el.totalCoast;
          return acc;
        }, 0);
      } else return null;
    },
  },
  mutations: {
    setItemsData(state, data) {
      state.itemsData = data;
    },
    changeAmountItems(state, [id, amount]) {
      state.cartItems.forEach((el, ind, arr) => {
        if (el.id == id) {
          el.amount = toNumber(amount);
          el.totalCoast = el.amount * el.coast;
        }
      });
    },
    addToCart(state, [id, amount]) {
      if (amount <= 0) null;
      let isNewElement = 1;
      state.itemsData.forEach((el) => {
        if (el.id == id) {
          if (state.cartItems.length > 0) {
            state.cartItems.forEach((elem) => {
              if (elem.id == id) {
                el.amount += toNumber(amount);
                el.totalCoast = el.amount * el.coast;
                return (isNewElement = 0);
              }
            });
            if (isNewElement === 1) {
              el.amount = toNumber(amount);
              el.totalCoast = el.amount * el.coast;
              state.cartItems.push(el);
            }
          } else {
            el.amount = toNumber(amount);
            el.totalCoast = el.amount * el.coast;
            state.cartItems.push(el);
          }
        }
      });
    },
    removeFromCart(state, id) {
      state.cartItems.forEach((el, index) => {
        if (el.id == id) {
          state.cartItems.splice(index, 1);
        }
      });
    },
    resetCart(state) {
      state.cartItems = [];
    },
  },
  actions: {
    GET_ITEMS_DATA_FROM_API({ commit }) {
      return axios("http://localhost:3000/items", {
        method: "GET",
      }).then((response) => commit("setItemsData", response.data));
    },
  },
  modules: {},
});
