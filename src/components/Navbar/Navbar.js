import React, { useState } from 'react';
import NavbarLi from '../NavbarLi/NavbarLi';
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [open,setOpen] = useState(false)

  const routes = [
    {id:1 , name: 'Home' , path:'/home'},
    {id:2 , name: 'Orders' , path:'/home'},
    {id:3 , name: 'Shops' , path:'/home'},
    {id:4 , name: 'About' , path:'/home'},
    {id:5 , name: 'Contact' , path:'/home'}
  ]
  return (
    <nav className=' bg-green-500 h-20 w-full  '>
      <div onClick={()=>setOpen(!open)} className="h-6 w-6  md:hidden" >
      {
        open ? <XMarkIcon className='h-10' /> 
        : <Bars3Icon className='h-10' />
      }
      </div>
      <ul className={` md:flex align-items-center bg-green-500 w-full justify-end  md:static absolute duration-500 ease-in ${open ? 'top-11' : 'top-[-120px]' } `}>
        {
          routes.map( route => <NavbarLi key={route.id} route={route}></NavbarLi>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;