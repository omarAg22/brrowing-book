const initialState = {
  cartData: [],
  bookmarkBooks: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "TOG_BOOKMARK":
      const bookIdx = state.bookmarkBooks.findIndex(
        (book) => book.id === action.payload.id
      );
      if (bookIdx === -1) {
        return {
          ...state,
          bookmarkBooks: [...state.bookmarkBooks, action.payload],
        };
      } else {
        const updatedBookmarkBooks = [...state.bookmarkBooks];
        updatedBookmarkBooks.splice(bookIdx, 1);
        return {
          ...state,
          bookmarkBooks: updatedBookmarkBooks,
        };
      }

    default:
      return state;
  }
};

export { initialState, cartReducer };
