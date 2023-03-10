import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';
import { links } from '../assets/constants';
import { HiOutlineMenu } from 'react-icons/hi';

const NavLinks = ({ handleClick }) => (
  <div className='mt-10'>
    {links.map((item) => (
      <NavLink 
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-xl font-medium text-gray-400 hover:text-[#FF8A00]"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className='w-6 h-6 mr-2' />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#000000]'>
        <div className='flex items-center'>
          <img src={logo} alt='logo' className='w-full h-10 object-contain' />
          <h1 className='text-[#FF8A00] font-black text-[22px] ml-1'>AITKEN<span className='text-white'>MUSIC</span></h1>
        </div>
        <NavLinks />
      </div>

      <div className='absolute md:hidden block top-6 right-3'>
        {mobileMenuOpen ? (
          <RiCloseLine className='w-6 h-6 text-white mr-2' onClick={() => setMobileMenuOpen(false)} />
        ) : ( <HiOutlineMenu className='w-6 h-6 text-white mr-2' onClick={() => setMobileMenuOpen(true)} /> )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#000000] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <div className='flex items-center'>
          <img src={logo} alt='logo' className='w-10 h-10 object-contain' />
          <h1 className='text-[#FF8A00] font-black text-[22px] ml-3'>AITKEN<span className='text-white'>MUSIC</span></h1>
        </div>
        <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
      </div>
    </>
  );
};

export default Sidebar;
