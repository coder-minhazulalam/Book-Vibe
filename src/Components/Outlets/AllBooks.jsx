import { use } from "react";
import BooksDetails from "./BooksDetails";


     const bookPromise =  fetch('/booksData.json').then((res) => res.json())

const AllBooks = () => {

      const books = use(bookPromise)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 h-full  md:w-12/13 mx-auto">
   {/* AllBooks ---> BooksDetails  */}
            {
             
                books.map((items) => <BooksDetails key={items.bookId} items={items}/>)
            }

            </div>
        </div>
    );
};

export default AllBooks;