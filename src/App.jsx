import React, { useReducer, useState } from "react";
import Main from "./components/Main";
import { BooksContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <BooksContext.Provider value={{ state, dispatch }}>
          <Main />
          <ToastContainer />
        </BooksContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
