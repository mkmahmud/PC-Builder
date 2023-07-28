// components/Navbar.js

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" px-4  bg-blue-500">
      <div className="flex items-center justify-between  ">
        <div className="text-white font-bold text-xl">
          <Link href="/">
            <Image src={logo} height={70} width={100}></Image>
          </Link>
        </div>

        <div className="hidden md:block">
          <ul className=" p-2 flex">
            <li className=" block p-2 mx-2 bg-blue-400">
              <Link href="/" className="text-white ">
                Home
              </Link>
            </li>
            <li className=" block p-2 mx-2 bg-blue-400">
              <Link href="/about" className="text-white ">
                About
              </Link>
            </li>
            <li className=" block p-2 mx-2 bg-blue-400">
              <Link href="/categories" className="text-white ">
                Categories
              </Link>
            </li>
            <li className=" block p-2 mx-2 bg-blue-400">
              <Link href="/contact" className="text-white ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/contact" className="text-white bg-red-800 block p-2 no-underline ">
          PC BUILD
        </Link>

        <div className="md:hidden">
          <button type="button" className="" onClick={toggleMenu}>
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM20 18H4V16H20V18Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 md:hidden">
          <ul className="bg-blue-400 p-2">
            <li className=" block p-2 mx-2 bg-blue-400">
              <Link href="/" className="text-white ">
                Home
              </Link>
            </li>
            <li className=" block p-2 mx-2 bg-blue-400">
              <Link href="/about" className="text-white ">
                About
              </Link>
            </li>
            <li className=" block p-2 mx-2 bg-blue-400">
              <Link href="/categories" className="text-white ">
                Categories
              </Link>
            </li>
            <li className=" block p-2 mx-2 bg-blue-400">
              <Link href="/contact" className="text-white ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
