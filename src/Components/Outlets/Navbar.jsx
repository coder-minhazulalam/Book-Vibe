import { NavLink } from "react-router";

const Navbar = () => {

  const link = 
  (
    <>
          <li>
      <NavLink to="/home"   className={({ isActive }) =>
    isActive ? "btn btn-outline btn-accent" : ""
  }>Home
</NavLink>
    </li>
    <li>
<NavLink to="/books"   className={({ isActive }) =>
    isActive ? "btn btn-outline btn-accent" : ""
  }>
Listed Books
</NavLink>
</li>

<li>
<NavLink to="/PageToRead"   className={({ isActive }) => isActive ? "btn btn-outline btn-accent" : "" }>
Page to read
</NavLink>
</li>
    </>


  );
  return (
    <div className=" md:w-12/13 mx-auto p-2">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1" 
              className="menu spmenu-sm dropdown-content bg-base-100  space-y-1 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
            {link}
             
            </ul>
          </div>
          <a className="btn btn-ghost text-[30px]">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
           {link}
          </ul>
        </div>
<div className="navbar-end space-x-1">
<button className="btn btn-active btn-success">SignIn</button>
<button className="btn btn-active btn-primary hidden md:block">SignUp</button>
</div>


      </div>

      <div className="p-[1px] bg-gray-400"></div>

    </div>
  );
};

export default Navbar;
