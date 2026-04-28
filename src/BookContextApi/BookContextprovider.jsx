import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const contextBook = createContext();

const BookContextprovider = ({ children }) => {

  const [ storeBooks , setstoreBooks] = useState([]);



  const [ wishList , setwishList ] = useState([])

  const handleMarksAsRead = (selectData) => {

    const exitsBooksInList = storeBooks.find((data) => data.bookId == selectData.bookId
);

    if (exitsBooksInList) {
      toast.error("Its already In the List");
      return;
    }
    else{
        toast.success(`${selectData.bookName} is addes to the list`);
    }

    setstoreBooks([...storeBooks, selectData]);

    

  };


const handleWishList = (currentBook) => {

  // Check if already in Read List
  const exitsBooksInList_Check = storeBooks.find(
    (data) => data.bookId == currentBook.bookId
  );

  if (exitsBooksInList_Check) {
    toast.error("Its already in the Read List");
    return;
  }

  // Check if already in Wishlist
  const exitsBooksInWishlist = wishList.find(
    (data) => data.bookId == currentBook.bookId
  );

  if (exitsBooksInWishlist) {
    toast.error("Its already in the Wishlist");
    return;
  }

  toast.success(`${currentBook.bookName} is added to the Wishlist`);

  setwishList([...wishList, currentBook]);
};

  const data = {
    handleMarksAsRead,
    storeBooks,
    setstoreBooks,
    handleWishList,
    wishList,
    setwishList,

  };

  return (
    <contextBook.Provider value={data}>
      {children}
    </contextBook.Provider>
  );
};

export default BookContextprovider;