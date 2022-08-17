import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/'>ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to='/'>MY PLACES</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
