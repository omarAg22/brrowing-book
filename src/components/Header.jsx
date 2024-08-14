import React, { useContext, useState } from "react";
import { BooksContext, ThemeContext } from "../context";
import { IoBookSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import CartDetails from "../pages/books/CartDetails";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { state, dispatch } = useContext(BooksContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleCartShow = () => {
    if (state.cartData.length > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };
  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between  space-x-10 py-6">
        <a href="/" className="flex gap-2 items-center">
          <IoBookSharp className="w-8 h-8" />
          <span className="font-bold uppercase">Borrowing a book</span>
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              href="#"
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            >
              <FaRegBell />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <MdOutlineWbSunny /> : <FaRegMoon />}
            </a>
          </li>
          <li>
            <a
              onClick={handleCartShow}
              href="#"
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            >
              <BsCart />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-11px] right-[-11px] bg-[#12cf6f] text-white flex items-center justify-center p-[2px] w-[18px] h-[18px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
