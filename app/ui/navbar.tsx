import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

const navigation = [
  { id: 1, name: "Service", href: "/service", isActive: false },
  { id: 2, name: "Dashboard", href: "/dashboard", isActive: true },
  { id: 3, name: "About", href: "/about", isActive: false },
  { id: 4, name: "Help", href: "/help", isActive: false },
];

const link = [
  { id: 1, name: "Profile", href: "/account/profile" },
  { id: 2, name: "Setting", href: "/account/setting" },
  { id: 3, name: "Sign Out", href: "/account/sign_out" },
];

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative h-16 flex sm:justify-between items-center justify-center">
          <div className="absolute inset-y-0 left-0 sm:hidden flex items-center justify-center">
            <DisclosureButton className="group relative text-gray-400 hover:text-white hover:bg-gray-700 rounded-md focus:outline-none focus:ring-inset focus:ring-2  focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className=" flex justify-center items-center">
            <div className="">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="logoImage"
                  height={40}
                  width={40}
                  priority
                />
              </Link>
            </div>

            <div className="hidden sm:block sm:ml-6">
              <div className="space-x-4 ">
                {navigation.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      aria-current={item.isActive ? "page" : undefined}
                      className={clsx(
                        "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
                        item.isActive && "bg-gray-900 text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="">
            <div className="absolute inset-y-0 right-0  flex items-center">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              <Menu as="div" className="relative ml-3">
                <MenuButton className="relative flex focus:ring-2 bg-gray-800 rounded-full focus:outline-none focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <Image
                    src="/user.png"
                    alt="userImage"
                    height={32}
                    width={32}
                    priority
                    className="rounded-s-full"
                  />
                </MenuButton>

                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                  {link.map((item) => {
                    return (
                      <MenuItem key={item.id}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      </MenuItem>
                    );
                  })}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={item.isActive ? "page" : undefined}
                className={clsx(
                  item.isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
