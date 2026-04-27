import { use } from "react";
import BooksCards from "./BooksCards";

const bookPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(bookPromise);
  return (
    <div>
      <h1 className="my-4 text-center font-bold text-[30px] shadow-2xl p-3 mx-30 rounded-2xl">
        Books
      </h1>

      <div className="mt-5 mb-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:w-12/13 mx-auto">
        {/* AllBooks ---> BooksDetails  */}
        {books.map((items) => (<BooksCards key={items.bookId} items={items}/> ))}
      </div>
    </div>
  );
};

export default AllBooks;
