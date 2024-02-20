import { GetServerSideProps } from "next";

type Props = {};
export default async function page({ params: id }: { params: { id: string } }) {
  const eventId = id;
  return (
    <div className='min-h-screen'>
      <h2>Event {eventId.id}</h2>
      <div className=''></div>
    </div>
  );
}
