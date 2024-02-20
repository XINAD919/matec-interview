import { getSession } from "@auth0/nextjs-auth0";
import EventForm from "@components/app/components/EventForm";
import { Auth0User } from "@components/app/lib/definitions";

type Props = {
};
export default async function page({}: Props) {
  const { user } = (await getSession()) as { user: Auth0User };
  return (
    <div className='min-h-screen'>
      <EventForm user={user.nickname} />
    </div>
  );
}
