import * as BookData from "../api/v1/BookAPI";
import React from "react";
import { BookItem } from "../organisms/BookItem";
import { Author } from "../../authors/Index";
const Spinner = () => <div>Loading...</div>;
const Error = () => <div>404 Error</div>;

export function BookList() {
  const { books, isLoading, isError } = BookData.allBooks();

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <>
      {books.map((book) => (
        <ul key={book.id}>
          <BookItem {...book} />
          <Author id={book.author_id} />
        </ul>
      ))}
    </>
  );
}
