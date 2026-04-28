import { useContext, useState } from "react";
import { contextBook } from "../../../BookContextApi/BookContextprovider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListBooks from "./ReadListBooks";
import WishListBooks from "./WishListBooks";

const Books = () => {

  const [sortingType, setsortingType] = useState("");

  const { storeBooks, wishList } = useContext(contextBook);

  const sortedReadBooks = [...storeBooks].sort((a, b) => {
    if (sortingType === "pages") {
      return b.totalPages - a.totalPages;
    }

    if (sortingType === "ratings") {
      return b.rating - a.rating;
    }

    return 0;
  });

  const sortedWishBooks = [...wishList].sort((a, b) => {
    if (sortingType === "pages") {
      return b.totalPages - a.totalPages;
    }

    if (sortingType === "ratings") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <>
      <div className="flex flex-col w:10/13 md:w-11/13 mx-auto space-y-6">
        <div className=" w-11/13 mx-auto bg-gray-200 text-center font-bold text-[30px] shadow-xl p-3  rounded-2xl">
          <h1>Books</h1>
        </div>

        <div className="mt-5 mb-10 flex justify-center items-center">
          <div className="dropdown bg-bule-200 dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">
              {`Sort By ${sortingType}`}
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => setsortingType("pages")}>
                <a>Pages</a>
              </li>
              <li onClick={() => setsortingType("ratings")}>
                <a>Ratings</a>
              </li>
            </ul>
          </div>
        </div>

        {/* React Tab */}

        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            {storeBooks.length === 0 ? (
              <div className="h-[50vh] flex justify-center items-center w-11/12 mx-auto bg-gray-300 rounded-lg">
                <h1 className="text-xl font-semibold text-center text-gray-700">
                  No books are selected
                </h1>
              </div>
            ) : (
              sortedReadBooks.map((data) => (
                <ReadListBooks
                  key={data.bookId}
                  data={data}
                  sortingType={sortingType}
                />
              ))
            )}
          </TabPanel>

          <TabPanel>
            {wishList.length === 0 ? (
              <div className="h-[50vh] flex justify-center items-center w-11/12 mx-auto bg-gray-300 rounded-lg">
                <h1 className="text-xl font-semibold text-center text-gray-700">
                  No books are selected
                </h1>
              </div>
            ) : (
              sortedWishBooks.map((data) => (
                <WishListBooks
                  key={data.bookId}
                  data={data}
                  sortingType={sortingType}
                />
              ))
            )}
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Books;
