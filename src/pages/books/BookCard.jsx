import { FaHeart } from "react-icons/fa";
import Ratting from "./Ratting";
import { useContext, useState } from "react";
import { BooksContext } from "../../context";
import { toast } from "react-toastify";
import BookDetailsModal from "./BookDetailsModal";

const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const { state, dispatch } = useContext(BooksContext);

  // add to cart button

  const handleAddToCart = (evt, book) => {
    evt.stopPropagation();

    const foundedBook = state.cartData.find((item) => item?.id === book.id);
    if (!foundedBook) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...book,
        },
      });

      toast.success(`Added ${book?.title} to Cart`, {
        position: "top-right",
      });
    } else {
      toast.error(`The ${book?.title} has already been added to the cart`, {
        position: "top-right",
      });
    }
  };

  // show modal
  const handleBookSelection = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedBook(null);
    setShowModal(false);
  };

  const handleBookmarkTog = (evt, book) => {
    evt.stopPropagation();
    dispatch({
      type: "TOG_BOOKMARK",
      payload: book,
    });
  };

  return (
    <>
      {showModal && (
        <BookDetailsModal
          book={selectedBook}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white rounded-xl">
        <a onClick={() => handleBookSelection(book)} href="#">
          <div className="relative">
            <button
              onClick={(e) => handleBookmarkTog(e, book)}
              className={`absolute top-2 right-2 p-1 ${
                state.bookmarkBooks.some((b) => b.id === book?.id) &&
                "bg-primary"
              }`}
            >
              <FaHeart />
            </button>
            <img
              className="h-96 object-cover"
              src={book?.cover}
              alt={book?.title}
            />
          </div>
          {/* detail */}
          <figcaption className="pt-4 ">
            <h3 className="text-xl mb-1 ">{book?.title}</h3>
            <p className="text-[#575a6e] text-sm mb-2">{book?.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Ratting value={book?.rating} />
            </div>
            <button
              onClick={(e) => handleAddToCart(e, book)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center gap-2 justify-center text-[#171923] font-semibold text-sm"
            >
              <span>${book.price} | Add to cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default BookCard;
