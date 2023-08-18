import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <ul>
      <li><NavLink to="/">BOOKS</NavLink></li>
      <li><NavLink to="/categories">CATEGORIES</NavLink></li>
    </ul>
  </header>
);

export default Header;
