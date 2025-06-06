import React from 'react'
import { menu_options } from '../data/Menu-options';
import { Link } from 'react-scroll';

const Menu = () => {
  return (
    <ul
      className={`menu-home text-white list-unstyled text-uppercase fw-medium m-0 p-0 d-flex gap-5 justify-content-center align-items-center}`}
    >
      {menu_options?.map((item) => {
        return (
          <li key={item.id}>
              <Link
              to={item.title}             >
                {item.title}
              </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu
