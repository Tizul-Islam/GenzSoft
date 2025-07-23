import { useState } from "react";
import { NavLink } from "react-router-dom"; // Replace your custom Link with NavLink
import { CgMenuGridR } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className="text-black p-2 bg-amber-300">
      {/* Mobile Menu Toggle */}
      <div 
        className="md:hidden text-4xl bg-amber-600 cursor-pointer" 
        onClick={() => setOpen(!open)}
      >
        {open ? <IoClose /> : <CgMenuGridR />}
      </div>

      {/* Navigation Links */}
      <ul
        className={`md:flex duration-500 md:static bg-amber-300 ${
          open ? "top-30" : "-top-60"
        } absolute px-6`}
      >
        {routes.map((route) => (
          <li key={route.id} className="my-2 md:my-0 md:mx-4">
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "hover:text-blue-400"
              }
              onClick={() => setOpen(false)} // Close menu on click (mobile)
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;