import React from 'react';
import { Link } from 'react-router-dom';


interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="bg-gray-800 text-white p-2 flex justify-between">
      {/* <h1 className="text-3xl font-bold "> Cream App </h1> */}
      <Link className="px-2 py-1 rounded-lg hover:bg-gray-700" to="/all">All Creams</Link>
      <Link className="px-2 py-1 rounded-lg hover:bg-gray-700" to="/blacklist">Blacklist</Link>
      <Link className="px-2 py-1 rounded-lg hover:bg-gray-700" to="/whitelist">Whitelist</Link>
      <Link className="px-2 py-1 rounded-lg hover:bg-gray-700" to="/my-allergens">My Allergens</Link>
    </nav>
  );
};


export default Navbar;