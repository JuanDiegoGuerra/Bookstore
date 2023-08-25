import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import AddForm from './AddForm';
import { getBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((store) => store.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const booksToRender = [];
  const ids = Object.keys(books);
  ids.forEach((bookId) => {
    booksToRender.push(<Book
      key={bookId}
      itemId={bookId}
      title={books[bookId][0].title}
      author={books[bookId][0].author}
      category={books[bookId][0].category}
    />);
  });

  return (
    <section className="body-container">
      <div className="books-container">
        {booksToRender}
      </div>
      <AddForm />
    </section>
  );
};

export default BookList;
