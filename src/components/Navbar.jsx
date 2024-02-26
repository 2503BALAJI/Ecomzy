import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Cart from "../pages/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state)=> state);

  return(
    <div>
      <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
              <img src="./logo.png"
               className="h-14"
                alt="logo"
              />
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
            <p>Home</p>
            </NavLink>
            
            <NavLink to="/cart">
              <div className="relative ">
                <FaShoppingCart
                className="text-2xl" />

                {
                  cart.length > 0 &&
                  <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce text-white rounded-full"
                  > {cart.length}</span>
                }
                
              </div>

              
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
