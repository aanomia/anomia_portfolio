import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to= '/' className='w-10 h-10 rounded-lg bg-purple-100 items-center justify-center flex font-bold shadow-md'>
        <p className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>NH</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-purple-600" : "text-black" }>
          Acerca de mí
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-purple-600" : "text-black" }>
          Proyectos
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-purple-600" : "text-black" }>
          Contáctame
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
