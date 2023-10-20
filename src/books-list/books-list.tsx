import { useEffect } from 'react';

import { BooksService } from 'src/shared/services/books/books';

export const BooksList: React.FC = () => {
  const booksService = new BooksService();
  let books;

  useEffect(() => {
    books = booksService.getBooks();
  }, []);
  console.log(books);

  return <div></div>;
};
