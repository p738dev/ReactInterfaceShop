import { createSlice } from "@reduxjs/toolkit";

const fetchLocalStorageProductCart = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchLocalStorageProductCart(),
  itemsCount: 0,
  totalAmount: 0,
  isCartMsgOn: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        const tempCart = state.carts.map((product) => {
          if (product.id === action.payload.id) {
            let qty = product.quantity + action.payload.quantity;
            let totalPrice = qty * product.price;
            return {
              ...product,
              quantity: qty,
              totalPrice: totalPrice,
            };
          } else {
            return product;
          }
        });
        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },
    removeProductInCart: (state, action) => {
      const id = action.payload;
      const cartsProd = state.carts.filter((item) => item.id !== id);
      state.carts = cartsProd;
      storeInLocalStorage(state.carts);
    },
    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
      state.itemsCount = state.carts.length;
    },
    toggleCartQty: (state, action) => {
      const tempCart = state.carts.map((item) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity;
          let tempTotalPrice = item.totalPrice;

          if (action.payload.type === "INC") {
            tempQty++;
            if (tempQty === item.stock) tempQty = item.stock;
            tempTotalPrice = tempQty * item.discountPrice;
          }

          if (action.payload.type === "DEC") {
            tempQty--;
            if (tempQty < 1) tempQty = 1;
            tempTotalPrice = tempQty * item.discountPrice;
          }

          return {
            ...item,
            quantity: tempQty,
            totalPrice: tempTotalPrice.toFixed(2),
          };
        } else {
          return item;
        }
      });
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },
    setCartMsgOn: (state) => {
      state.isCartMsgOn = true;
    },
    setCartMsgOff: (state) => {
      state.isCartMsgOn = false;
    },
  },
});

export const {
  addToCart,
  removeProductInCart,
  setCartMsgOff,
  setCartMsgOn,
  clearCart,
  getCartTotal,
  toggleCartQty,
} = cartSlice.actions;
export const getCartMessageStatus = (state) => state.cart.isCartMsgOn;
export const getCartItemsCount = (state) => state.cart.itemsCount;
export const getAllCarts = (state) => state.cart.carts;

export default cartSlice.reducer;
