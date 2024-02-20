import { Suspense } from "react";
import { CardsSkeleton } from "../components/skeletons";
import EventCards from "../components/EventCards";

type Props = {};
export default async function page({}: Props) {

  return (
    <div className='min-h-screen mt-4 px-8'>
      <Suspense fallback={<CardsSkeleton />}>
        <EventCards />
      </Suspense>
    </div>
  );
}
