import React from 'react';
import { Link } from 'react-router-dom';



interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <nav>
      <Link to="/all">All</Link>
      <Link to="/blacklist">Blacklist</Link>
      <Link to="/whitelist">Whitelist</Link>
      <Link to="/my-allergens">My Allergens</Link>
    </nav>
  );
};

export default Navbar;