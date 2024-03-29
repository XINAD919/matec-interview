"use client";
import Link from "next/link";
import UserButton from "./UserButton";
import { Auth0User } from "../lib/definitions";
import { useUser } from "@auth0/nextjs-auth0/client";

function Header() {
  const { user } = useUser() as { user: Auth0User };

  return (
    <div className='flex justify-between items-center min-h-16 bg-slate-950 text-white border-b border-slate-800 shadow-md px-8'>
      <div className=''>
        {/* imagen */}
        <Link href={"/"}>
          <h1 className='text-2xl font-bold'>DanielLive</h1>
        </Link>
      </div>
      <div className='flex gap-4 font-semibold justify-center items-center'>
        <Link href={"../events"}>Events</Link>
        {user && (
          <>
            <Link href={"../events/create-event"}>Create an Event</Link>
          </>
        )}
        <UserButton user={user} />
      </div>
    </div>
  );
}
export default Header;
