import { toNumber } from "@vue/shared";
import { createStore } from "vuex";

export default createStore({
  state: {
    itemsData: [
      {
        name: "Букет цветов",
        img: "https://static.tildacdn.com/tild3336-3261-4339-b162-303032353733/florentin-misty-bubb.jpg",
        coast: 3900,
        id: 1,
      },
      {
        name: "Букет цветов",
        img: "https://www.roza4u.ru/image/cache/catalog/buket-s-gortenziej/buket-s-goluboj-gortenziej-1-1400x1400.jpg",
        coast: 1500,
        id: 2,
      },
      {
        name: "Букет цветов",
        img: "https://lovelybuket.ru/wp-content/uploads/2021/12/elitnye-piony-eden-1.jpg",
        coast: 2400,
        id: 3,
      },
      {
        name: "Букет цветов",
        img: "https://static.tildacdn.com/tild3336-3261-4339-b162-303032353733/florentin-misty-bubb.jpg",
        coast: 3900,
        id: 4,
      },
      {
        name: "Букет цветов",
        img: "https://www.roza4u.ru/image/cache/catalog/buket-s-gortenziej/buket-s-goluboj-gortenziej-1-1400x1400.jpg",
        coast: 1500,
        id: 5,
      },
      {
        name: "Букет цветов",
        img: "https://lovelybuket.ru/wp-content/uploads/2021/12/elitnye-piony-eden-1.jpg",
        coast: 2400,
        id: 6,
      },
    ],
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
  },
  actions: {},
  modules: {},
});
