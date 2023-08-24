import { useSelector } from 'react-redux';
import Book from './Book';
import AddForm from './AddForm';

const BookList = () => {
  const books = useSelector((store) => store.books);

  return (
    <section>
      <div className="books-container">
        {books.map((book) => (
          <Book
            key={book.itemId}
            itemId={book.itemId}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
      <AddForm />
    </section>
  );
};

export default BookList;
