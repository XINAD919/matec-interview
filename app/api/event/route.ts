import { Event } from "@components/app/lib/definitions";
import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export async function POST(request:NextRequest) {
  const body = await request.json();
  try {
    const {
      title,
      description,
      category,
      place,
      date,
      time,
      organizer,
      image,
      speakers,
    } = body;
    const data = await sql<Event>`
      INSERT INTO events (title, description, category, place, date, time, organizer, image)
      VALUES (${title}, ${description}, ${category},${place}, ${date}, ${time}, ${organizer} , ${image}) 
      ON CONFLICT (id) DO NOTHING`;

    const eventCreated = data.rows;
    // console.log("🚀 ~ POST ~ eventCreated:", eventCreated)
    // const id = eventCreated[0].id;
    // console.log("🚀 ~ POST ~ id:", id)

    // if (speakers && speakers.length > 0) {
    //   await Promise.all(
    //     speakers.map(async (speaker) => {
    //       const data =
    //         await sql`INSERT INTO event_speakers (event_id, speaker_name, speaker_role)
    //           VALUES(${id},${speaker.name}, ${speaker.rol})`;
    //       const speakers = data.rows;
    //       return speakers;
    //     })
    //   );
    // }

    return NextResponse.json({ eventCreated }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
