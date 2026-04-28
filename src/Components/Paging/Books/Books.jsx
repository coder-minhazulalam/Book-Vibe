import { useContext } from "react";
import { contextBook } from "../../../BookContextApi/BookContextprovider";

const Books = () => {

  const { storeBooks , wishList } = useContext(contextBook);
  console.log(storeBooks , wishList);

  return (
    <>
    <div className=" w-11/13 bg-gray-200 text-center font-bold text-[30px] shadow-xl p-3  rounded-2xl">
    <h1>
        Books
    </h1>
    </div>

    

    </>
 
  );
};

export default Books;