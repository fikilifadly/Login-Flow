import { NavLink } from "react-router-dom";
import logo from "../assets/fikilifadlylogo.png";

function Header() {
  return (
    <>
      <header className="w-screen backdrop-blur-sm bg-[#ababab33] shadow-sm fixed top-0">
        <nav className="w-10/12 mx-auto flex  md:py-5 py-2 justify-between">
          <div>
            <img
              src={logo}
              alt="FL"
              title="FL"
              className="md:w-[200px] md:h-[50px] w-[100px] h-[30px]"
            />
          </div>
          <div className="flex items-center h-100">
            <ul className="flex md:gap-5 gap-2 md:text-lg text-xs items-center">
              <li>
                <NavLink to="/" className="text-white">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup" className="text-white">
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to="/reset" className="text-white">
                  Reset
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
