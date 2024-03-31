import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    //console.log("create response:", response);

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    console.log("Delete response:", response);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    //console.log(updatedBooks);
    setBooks(updatedBooks);
  };

  const editBook = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    //console.log("edit response:", response);

    const updatedBooks = books.map((book) => {
      if (book.id === id) return { ...book, ...response.data };

      return book;
    });
    //console.log(updatedBooks);

    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBook,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
