const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          qty: 1,
          productID: action.product.id,
          productName: action.product.name,
          imgSrc: action.product.imgSrc,
          price: action.product.price,
        },
      ];
    case "Add_QUANTITY":
      return state.filter((prod) =>
        prod.productID === action.id ? { prod, qty: ++prod.qty } : { ...prod }
      );
    case "SUBS_QUANTITY":
      return state.filter((prod) =>
        prod.productID === action.id ? { prod, qty: --prod.qty } : { ...prod }
      );
    case "REMOVE_PRODUCT":
      return state.filter((prod) => prod.productID !== action.id);

    case "CLEAR_CART":
      return (state = []);

    default:
      return state;
  }
};

export { cartReducer };
