import { SET_PRODUCTS } from "../constants/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "Shanto",
      category: "developer",
    },
  ],
};
export const productReducer = (state = initialState, action) => {
  switch (action.payload) {
    case SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
