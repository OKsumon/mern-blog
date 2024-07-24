import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='border-b-4 border-yellow-300 px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white'>Sumon's</span>Blog
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search here...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline-flex'
        />
      </form>
      <Button className='w-10 h-10 lg:hidden' color='gray' pill><AiOutlineSearch /></Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue' pill outline>Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='flex justify-center w-full'>
        <Navbar.Link href="/" active={path === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/projects" active={path === "/projects"}>
          Projects
        </Navbar.Link>
        <Navbar.Link href="/about" active={path === "/about"}>
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
