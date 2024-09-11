"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="p-[30px] bg-yellow-500 flex justify-center gap-5 text-white font-bold text-lg">
      <Link className="hover:underline transition-all" href="/">Home</Link>
      {session && <Link className="hover:underline transition-all" href="/profile">Profile</Link>}
      <Link className="hover:underline transition-all" href="/register">Register</Link>
      <Link className="hover:underline transition-all" href="/login">Login</Link>
    </div>
  );
};
