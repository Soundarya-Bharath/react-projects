import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [uid, setUid] = useState(1);

  const createBook = (title) => {
    //console.log("uid:", uid);
    setUid(uid + 1);
    //console.log("Need to add book with:", uid, title);
    const updatedBooks = [...books, { id: uid, title }];
    //console.log("UpdatedBooks:", updatedBooks);
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBook = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) return { ...book, title: newTitle };

      return book;
    });
    console.log(updatedBooks);

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
