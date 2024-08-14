import React from "react";
import { getAllBooks } from "../data/books";
import BookCard from "./books/BookCard";

const UpcomingBooks = () => {
  const books = getAllBooks();
  const upcomingBooks = books.filter((b) => b?.upcoming === true);
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {upcomingBooks.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingBooks;
