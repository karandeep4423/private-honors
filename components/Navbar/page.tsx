"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";

const Navbar: React.FC = () => {
  const { data: session } = useSession();
  const user: User = session?.user;
  const [open, setOpen] = useState<boolean>(true);

  const handleShow = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className=" ">
      <nav className="flex justify-between h-20 px-4 xl:px-0 max-w-screen-xl m-auto">
        <Link href="/">
          <div className="my-5 text-2xl font-medium h-fit w-fit border-4 px-0 text-center border-black">
            <h2>PRIVATE HONORS</h2>
          </div>
        </Link>
        <div className="flex items-center lg:hidden">
          <button onClick={handleShow}>
            {open ? (
              <Image alt="icon" width={35} height={35} src="/menu.png" />
            ) : (
              <Image alt="close icon" width={35} height={35} src="/close.png" />
            )}
          </button>
        </div>
        <div
          className={`lg:space-x-6 gap-y-4 text-lg absolute justify-between flex flex-col items-center lg:flex-row z-50 lg:static lg:w-auto lg:py-0 pb-6 w-full left-0 ${
            open ? "hidden lg:flex " : "top-[64px]  pt-6"
          }`}
        >
          <Link onClick={handleShow} href="/">
            Home
          </Link>
          <Link onClick={handleShow} href="/gurbani-in-english">
            Gurbani Lesson
          </Link>
          <Link onClick={handleShow} href="/choose-your-lesson">
            Book Lesson
          </Link>
          <Link onClick={handleShow} href="/about-us">
            About us
          </Link>
          <Link onClick={handleShow} href="/contact-us">
            Contact us
          </Link>
          {session ? (
            <>
              <span className="mr-4">
                Welcome, {user.username || user.email}
              </span>
              <button
                onClick={() => signOut()}
                className="w-full md:w-auto bg-slate-100 text-black"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="hidden lg:flex space-x-3">
              <Link href="/auth/sign-in">
                <button className="font-medium px-4 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                  <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  Get Started
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
