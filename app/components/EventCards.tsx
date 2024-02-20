import Image from "next/image";
import { fetchEvents } from "../lib/data";
import Link from "next/link";

type Props = {};
export default async function EventCards({}: Props) {
  const events = await fetchEvents();
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
      {events.map((event) => (
        <div
          key={event.id}
          className={`max-w-sm rounded overflow-hidden shadow-lg bg-white`}
        >
          <div className='flex flex-col'>
            <Image
              width={200}
              height={200}
              className='w-full max-h-48'
              src={event.image}
              alt='Sunset in the mountains'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>
                <h2 className='font-semibold text-xl'>{event.title}</h2>
              </div>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                {event.category}
              </span>
              <p className='text-gray-700 text-base'>{event.description}</p>
            </div>

            <div className='flex justify-around p-4 h-full'>
              <Link
                className='bg-[#FFD200] hover:bg-[#FFD444] text-slate-900 rounded-md px-3 py-1 font-medium '
                href={`/events/${event.id}`}
              >
                Ver más
              </Link>
              <span className='bg-slate-900  hover:bg-slate-800 text-white rounded-md px-3 py-1 font-medium '>
                Inscribir me
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
