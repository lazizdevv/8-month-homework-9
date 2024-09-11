"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { HomeIcon } from "@/assets/svgs/HomeIcon";
import { ProfileIcon } from "@/assets/svgs/ProfileIcon";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <div className=" bg-yellow-500  text-white font-bold text-lg">
      <div className="container">
        <div className="flex justify-between gap-2">
          <div className="flex">
            <Link
              className="hover:underline transition-all flex gap-1 md:gap-3 justify-center items-center p-2 md:p-3 border-r-2"
              href="/"
            >
              <HomeIcon />
              Home
            </Link>
            {session && (
              <Link
                className="hover:underline transition-all flex gap-1 md:gap-3 justify-center items-center p-2 md:p-3 border-r-2"
                href="/profile"
              >
                <ProfileIcon />
                Profile
              </Link>
            )}
          </div>
          <div className="flex gap-2 md:gap-5">
            <Link
              className="hover:underline transition-all p-2 md:p-3 border-2 rounded-md hover:bg-white hover:text-yellow-500"
              href="/register"
            >
              Register
            </Link>
            <Link
              className="hover:underline transition-all p-2 md:p-3 border-2 rounded-md hover:bg-white hover:text-yellow-500"
              href="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
