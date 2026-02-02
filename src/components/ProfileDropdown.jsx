"use client";

import Link from "next/link";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { useClerk } from "@clerk/nextjs";
import Image from "next/image";
import DefaultAvatarImage from "../../public/DefaultAvatar.png";

export default function ProfileDropdown({ user }) {
  const { signOut } = useClerk();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="h-10 w-10 m-2 rounded-full cursor-pointer focus:outline-none">
        <Image
          src={DefaultAvatarImage}
          alt="User avatar"
          className="rounded-full object-cover"
        />
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className="z-40 rounded-md bg-gray-200 outline-none [--anchor-gap:--spacing(2)]"
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
          <Image
            src={DefaultAvatarImage}
            alt="User avatar"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-900 truncate max-w-[160px]">
              {user?.username || "User"}
            </p>
            <p className="text-xs text-gray-500 truncate max-w-[160px]">
              {user?.email || ""}
            </p>
          </div>
        </div>

        <div className="py-1">
          <MenuItem>
            {({ focus }) => (
              <Link
                href="/orders"
                className={`block px-4 py-2 text-sm text-gray-700 ${focus ? "bg-gray-100" : ""}`}
              >
                Orders
              </Link>
            )}
          </MenuItem>

          <div className="my-1 h-px bg-gray-100" />

          <MenuItem>
            {({ focus }) => (
              <button
                onClick={() => signOut({ redirectUrl: "/" })}
                className={`block w-full text-left px-4 py-2 text-sm text-red-600 ${focus ? "bg-red-50" : ""}`}
              >
                Log out
              </button>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
