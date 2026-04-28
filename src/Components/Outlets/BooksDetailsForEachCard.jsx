import { useContext} from "react";
import { useLoaderData, useParams } from "react-router";
import { contextBook } from "../../BookContextApi/BookContextprovider";

const BooksDetailsForEachCard = () => {
  const { id } = useParams();
  const books = useLoaderData();

const { handleMarksAsRead ,
    handleWishList } = useContext(contextBook);


  const singleBooks = books.find((data) => data.bookId == parseInt(id));

  return (
    <>
      <div className="mt-5 w-11/13 md:w-10/13 mx-auto card lg:card-side bg-base-400 shadow-sm">
        <div className="hero min-h-screen bg-base-200 p-3">
          <div className="hero-content flex-col lg:flex-row gap-10 justify-center items-center">
            {/* Book Image */}
            <div className="bg-[#F3F3F3] rounded-2xl p-10">
              <img
                src={singleBooks.image}
                alt={singleBooks.bookName}
                className="w-72 rounded-xl"
              />
            </div>

            {/* Book Details */}
            <div className="space-y-1 flex-1">
              <h1 className="text-5xl font-bold font-serif">
                {singleBooks.bookName}
              </h1>

              <p className="text-xl text-gray-500 border-b pb-4">
                By : {singleBooks.author}
              </p>

              <p className="border-b pb-4 text-lg font-medium">
                {singleBooks.category}
              </p>

              <div className="border-b">
                <p className=" text-gray-600">
                  <span className="font-bold text-black">Review :</span>{" "}
                  {singleBooks.review}
                </p>

                {/* Tags */}
                <div className="flex gap-4 items-center flex-wrap mt-1 mb-2">
                  <span className="font-bold">Tag</span>

                  {singleBooks.tags.map((tag, index) => (
                    <button
                      key={index}
                      className="btn btn-sm rounded-full bg-green-100 text-green-600 border-none"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extra Info */}
              <div className="space-y-3 text-gray-600">
                <div className="flex gap-20">
                  <p>Number of Pages:</p>
                  <p className="font-bold text-black">
                    {singleBooks.totalPages}
                  </p>
                </div>

                <div className="flex gap-32">
                  <p>Publisher:</p>
                  <p className="font-bold text-black">
                    {singleBooks.publisher}
                  </p>
                </div>

                <div className="flex gap-14">
                  <p>Year of Publishing:</p>
                  <p className="font-bold text-black">
                    {singleBooks.yearOfPublishing}
                  </p>
                </div>

                <div className="flex gap-36">
                  <p>Rating:</p>
                  <p className="font-bold text-black">{singleBooks.rating}</p>
                </div>
              </div>

              {/* Buttons  ------------------------------------------------------------------------------------------*/}
              <div className="flex gap-4 pt-4">
                <button className="btn btn-outline px-8" onClick={()=> handleMarksAsRead(singleBooks)}>Read</button>

                <button className="btn btn-info text-white px-8" onClick={()=> handleWishList(singleBooks)}>
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksDetailsForEachCard;
