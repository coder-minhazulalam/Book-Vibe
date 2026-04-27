
const BooksDetails = ({items}) => {


    return (
        <div className="card bg-base-200 w-10/12 mx-auto md:w-96  md:m-0 md:p-4  rounded-2xl shadow-2xl">
           
  <figure className=" bg-gray-200 p-4 ">
    <img
      src={items.image}
      alt="Books" className="h-[230px] w-[200px] " />
  </figure>

  <div className="flex justify-start px-3">
    {
        items.tags.map((i) => <div className="font-bold text-green-400 border border-green-300 px-3 py-1 rounded-3xl mr-2 mt-2 bg-gray-200">{i}</div>)
    }
  </div>
  <div className="card-body">
    <h2 className="card-title text-[25px] font-bold">{items.bookName}</h2>
    <p className="text-[12px] text-[#131313CC] font-bold">By : {items.publisher}</p>

       <div className="h-[2px] w-full bg-[repeating-linear-gradient(to_right,#13131326_0,#13131326_2px,transparent_7px,transparent_8px)]"></div>


    <div className="flex justify-between mt-1">
      <div className="card-actions font-bold text-[#131313CC] ">
       {items.category}
    </div>

      <div className="card-actions flex items-center text-[#131313CC] ">
        {items.rating}<img src="/public/assets/Frame.svg"/>
    </div>

    </div>
  
  </div>
</div>
    );
};

export default BooksDetails;