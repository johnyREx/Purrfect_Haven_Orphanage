"use client";
import { HambergerMenu } from "iconsax-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import isAuthenticated from "@/lib/isAuthenticated";
import { User } from "iconsax-react";
import { Dropdown } from "flowbite-react";
import Image from "next/image";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);

  const handleLogout = () => {
    if (window && window !== "undefined") {
      localStorage.removeItem("user");
    }
    router.push("/signin");
  };

  const handleSelect = (tabitem) => {
    setSelectedTab(tabitem);
  };

  const getLinkClassName = (path) => {
    return pathname === path ? 'text-secondary bg-accent lg:bg-none' : 'text-white';
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <>
      <nav className="bg-gray-900 backdrop-filter backdrop-blur-md bg-opacity-50 border-b-[1px] border-gray-500 dark:bg-gray-900 sticky z-20 top-0 start-0 w-full">
        <div className="flex flex-wrap items-center justify-between mx-4 md:mx-16 p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image width={48} height={48} src="/logo.svg" alt="logo" />
          </Link>
          <div className="flex items-center gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isAuthenticated() ? (
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={<User size="24" color="#222222" variant="Bold" />}
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{user?.firstname ? `${user.firstname} ${user.lastname}` : user?.email}</span>
                    <span className="block truncate text-sm font-medium">
                      {user?.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                </Dropdown>
              </div>
            ) : (
              <>
                <Link href="/signin">
                  <button
                    type="button"
                    className=" hidden md:block text-accent bg-white lg:px-8 py-4 font-medium rounded-full text-sm px-8 text-center hover:bg-red-100 "
                  >
                    Log in
                  </button>
                </Link>
                <Link href="/signup">
                  <button
                    type="button"
                    className="text-white lg:px-8 py-4 font-medium rounded-full text-sm px-8 text-center bg-accent hover:bg-accentdeep"
                  >
                    Sign up
                  </button>
                </Link>
              </>
            )}
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <HambergerMenu size="32" aria-hidden="true" />
            </button>
          </div>
          <div
            className={`items-center justify-between ${isMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col text-sm font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className={`${getLinkClassName('/')} block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-secondary}`}
                  aria-current={router.pathname === '/' ? "page" : undefined}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/why-adopt"
                  className={`${getLinkClassName('/why-adopt')} block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-secondary}`}
                  aria-current={router.pathname === '/why-adopt' ? "page" : undefined}
                >
                  Why adopt?
                </a>
              </li>
              <li>
                <a
                  href="/tips"
                  className={`${getLinkClassName('/tips')} block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-secondary}`}
                  aria-current={router.pathname === '/tips' ? "page" : undefined}
                >
                  PurrFect tips
                </a>
              </li>
              <li>
                <a
                  href="/pets"
                  className={`${getLinkClassName('/pets')} block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-secondary}`}
                  aria-current={router.pathname === '/pets' ? "page" : undefined}
                >
                  Our pets
                </a>
              </li>
              <li>
                <a
                  href="/donate"
                  className={`${getLinkClassName('/donate')} block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-secondary}`}
                  aria-current={router.pathname === '/donate' ? "page" : undefined}
                >
                  Be a pet hero
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}