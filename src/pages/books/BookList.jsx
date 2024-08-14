import { getAllBooks } from "../../data/books";
import BookCard from "./BookCard";

const BookList = () => {
  const books = getAllBooks();

  return (
    <div className="content ">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {books.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
