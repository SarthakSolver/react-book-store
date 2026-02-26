import Navbar from "./components/Navbar";
import { useState } from "react";
import books from "./data/books";
import BookCard from "./components/BookCard";

function App() {

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const booksPerPage = 4;

  // STEP 1: Filter
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  // STEP 2: Pagination
  const startIndex = (page - 1) * booksPerPage;

  const paginatedBooks = filteredBooks.slice(
    startIndex,
    startIndex + booksPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <Navbar />
     

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4">

        {/* Search */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search by title or author..."
            className="border px-4 py-2 w-full max-w-md rounded-lg"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1); // reset page when searching
            }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {paginatedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        {filteredBooks.length === 0 && (
  <p className="text-center mt-6 text-gray-500">
    No books found
  </p>
)}

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-4 mt-6">

          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Prev
          </button>

          <span className="px-4 py-2">
            Page {page}
          </span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={startIndex + booksPerPage >= filteredBooks.length}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;