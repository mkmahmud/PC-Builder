import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { useGetAllcategoriesQuery } from "@/redux/features/category/categoryApi";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data, isLoading, isError, error } =
    useGetAllcategoriesQuery(undefined);

  let items = [];
  data?.data?.map((category) => {
    items.push({
      key: { category },
      label: (
        <Link
          rel="noopener noreferrer"
          href={`categories/${category.Category}`}
        >
          {category.Category}
        </Link>
      ),
    });
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { data: session } = useSession();

  return (
    <nav className=" px-4  bg-blue-500">
      <div className="flex items-center justify-between  ">
        <div className="text-white font-bold text-xl">
          <Link href="/">
            <Image src={logo} alt={logo} height={70} width={100}></Image>
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
            <li className=" relative block p-2 mx-2 bg-blue-400 ">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Categories
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li className=" block p-2 mx-2 bg-blue-400">
              <Link href="/contact" className="text-white ">
                Contact
              </Link>
            </li>

            <li className=" block p-2 mx-2 bg-blue-400">
              {session?.user?.email ? (
                <Button onClick={() => signOut()}>Sign out</Button>
              ) : (
                <Button
                  onClick={() => {
                    signIn("github");
                  }}
                >
                  Sign in
                </Button>
              )}
            </li>
          </ul>
        </div>
        <Link
          href="/pcbuild"
          className="text-white bg-red-800 block p-2 no-underline "
        >
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
