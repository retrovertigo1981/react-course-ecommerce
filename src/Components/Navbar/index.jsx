import { NavLink } from "react-router-dom";
import { EcommerceContext } from "../../EcommerceContext/EcommerceContext";
import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";
  const context = useContext(EcommerceContext);
  const allproducts = () => {
    context.setFilteredItemsByCategory(null);
    context.setSearchItemsByCategory("");
  };

  const categories = (str) => {
    context.setSearchItemsByCategory(str);
      
  };

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-bold text-lg">
          <NavLink to="/" onClick={() => allproducts()}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => allproducts()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mens-clothing"
            onClick={() => categories(`men's clothing`)}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Men&apos;s clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            onClick={() => categories("jewelery")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchItemsByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/womens-clothing"
            onClick={() => context.setSearchItemsByCategory(`women's clothing`)}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Women&apos;s clothing
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">fuzzdev@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center gap-2">
          <ShoppingBagIcon
            onClick={() => context.openCheckoutSideMenu()}
            className="w-5 h-5 cursor-pointer"
          />{" "}
          {context.count}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
