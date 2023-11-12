import React from 'react';

const NavbarLi = ({route}) => {
  return (
    <li className='mr-12  md:mt-6 text-slate-200 text-bold'>
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default NavbarLi;