const Banner = () => {
  return (
    <>
      <div className=" md:w-12/13 mx-auto  hero bg-base-200 smax-h-screen md:min-h-screen rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/assets/093f28a2713be2009ed5e0a38a726ba628d93944.png"
            className="h-[300px] w-[240px] md:h-[500px] md:w-[500px]"
          />
          <div className=" space-y-10 p-10 text-center md:text-start md:w-5/10">
            <h1 className=" text-[20px] md:text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn btn-success">View The List</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
