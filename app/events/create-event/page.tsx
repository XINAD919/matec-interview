import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import EventForm from "@components/app/components/EventForm";
import { Auth0User } from "@components/app/lib/definitions";
import { NextPage } from "next";

type Props = {};

const page: NextPage = withPageAuthRequired(
  async ({}: Props) => {
    const { user } = (await getSession()) as { user: Auth0User };
    return (
      <div className='min-h-screen'>
        <EventForm user={user.nickname} />
      </div>
    );
  },
  { returnTo: "/events/create-event" }
);
export default page;
