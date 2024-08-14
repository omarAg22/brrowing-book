import React from "react";
import { getAllBooks } from "../data/books";
import BookCard from "./books/BookCard";

const NewReleases = () => {
  const books = getAllBooks();
  const today = new Date();

  //filter Books

  const oneDay = 24 * 60 * 60 * 1000;
  const sevenDaysAgo = today.getTime() - 7 * oneDay;

  const latestBooks = books.filter((b) => {
    const bookCreatedDate = new Date(b.createdAt).getTime();
    return bookCreatedDate > sevenDaysAgo;
  });
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {latestBooks.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>
    </div>
  );
};

export default NewReleases;
