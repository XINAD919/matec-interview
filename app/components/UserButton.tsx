"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Auth0User } from "../lib/definitions";



type Props = {
  user: Auth0User;
};
export default function UserButton({ user }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleclickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setMenuVisible(false);
      }
    };
    document.addEventListener("mousedown", handleclickOutside);
    return () => {
      document.removeEventListener("mousedown", handleclickOutside);
    };
  }, [ref]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      {user ? (
        <div className='relative'>
          <div className='' onClick={toggleMenu}>
            <Image
              src={user && user.picture}
              alt={`${user && user.name} profile picture`}
              width={30}
              height={30}
              className='rounded-full'
            />
          </div>
          {menuVisible && (
            <div
              className='max-w-max absolute bg-slate-950 rounded-md  py-2 right-1 top-10 shadow-md text-sm'
              ref={ref}
            >
              <ul className='flex flex-col gap-2'>
                <li>
                  <div className=''>
                    <Image
                      src={user && user.picture}
                      alt={`${user && user.name} profile picture`}
                      width={30}
                      height={30}
                      className='rounded-full self-center'
                    />
                    <div className='flex flex-col'>
                      <p className=''>{user.name}</p>
                      <Link href=''>Vew profile</Link>
                    </div>
                  </div>
                </li>

                <li className='flex items-center gap-2'>
                  <Image
                    src={"/arrow-right.svg"}
                    alt={"arrow right"}
                    width={20}
                    height={20}
                  />
                  <a href='/api/auth/logout'>Logout</a>{" "}
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <a href='/api/auth/login'>Login</a>
      )}
    </>
  );
}
