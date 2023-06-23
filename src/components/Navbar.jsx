import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";
import { useSelector } from "react-redux";

function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <div className="flex justify-between items-center max-w-6xl h-20 mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src={logo} className="h-14" alt="" />
          </div>
        </NavLink>

        <div className="flex items-center text-slate-100 font-medium mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <div className="absolute z-10 -top-1 -right-2 bg-green-600 text-xs flex w-5 h-5 justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </div>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
