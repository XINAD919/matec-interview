import Link from "next/link";

async function Header() {
  return (
    <div className='flex justify-between items-center min-h-16 bg-slate-950 text-white border-b border-slate-800 shadow-md px-8'>
      <div className=''>
        <Link href={"/"}>
          {/* imagen */}
          <h1 className='text-2xl font-bold'>DanielLive</h1>
        </Link>
      </div>
      <div className='flex gap-4 font-semibold justify-center items-center'>
        <Link href={"events"}>Events</Link>
      </div>
    </div>
  );
}
export default Header;
