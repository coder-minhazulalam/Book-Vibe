import { useContext } from "react";
import { contextBook } from "../../../BookContextApi/BookContextprovider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListBooks from "./ReadListBooks";
import WishListBooks from "./WishListBooks";

const Books = () => {
  const { storeBooks, wishList } = useContext(contextBook);

  return (
    <>
    <div className="flex flex-col w:10/13 md:w-11/13 mx-auto space-y-6">

          <div className=" w-11/13 mx-auto bg-gray-200 text-center font-bold text-[30px] shadow-xl p-3  rounded-2xl">
        <h1>Books</h1>
      </div>

        {/* React Tab */}

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>
          {
            storeBooks.map((data) => <ReadListBooks key={data.bookId} data={data}/>)
          }
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>
          {
            wishList.map((data) => <WishListBooks key={data.bookId} data={data}/>)
          }
          </h2>
        </TabPanel>
      </Tabs>

    </div>

    </>
  );
};

export default Books;
