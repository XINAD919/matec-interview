import { sql } from "@vercel/postgres";
import { User, Event, Speaker } from "./definitions";

export async function fetchEvent(id: string) {
  try {
    const data = await sql<Event>`
      SELECT * FROM events WHERE id = ${id}
    `;
    const event = data.rows;
    return event;
  } catch (error) {
    console.error("Database error", error);
    throw new Error("Error fetchig event");
  }
}
export async function createEvent(event: Event) {
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
    } = event;
    const data = await sql<Event>`
      INSERT INTO events (title, description, category, place, date, time, organizer, image)
      VALUES (${title}, ${description}, ${category},${place}, ${date}, ${time}, ${organizer}, ${image}) 
      ON CONFLICT (id) DO NOTHING`;

    const eventCreated = data.rows;
    const id = eventCreated[0].id;
    if (speakers && speakers.length > 0) {
      await Promise.all(
        speakers.map(async (speaker) => {
          const data =
            await sql<Speaker>`INSERT INTO event_speakers (event_id, speaker_name, speaker_role)
              VALUES(${id},${speaker.name}, ${speaker.rol})`;
          const speakers = data.rows;
          return speakers;
        })
      );
    }
    return eventCreated;
  } catch (error) {
    console.error("Database error", error);
    throw new Error("Error fetchig event");
  }
}

export async function fetchEvents() {
  try {
    const data = await sql<Event>`
      SELECT 
        id,
        title,
        description,
        date,
        time,
        place,
        organizer,
        category,
        image
      FROM events 
      ORDER BY title ASC
    `;
    const events = data.rows;
    return events;
  } catch (error) {
    console.error("Database error", error);
    throw new Error("Error fetchig events");
  }
}
export async function fetchSpeakers() {
  try {
  } catch (error) {
    console.error("error fetchig data", error);
    throw error;
  }
}
export async function createUser(user: User) {
  try {
    const { name, email } = user;
    const data = sql<User>`
      INSERT INTO users (name,email) 
      VALUES (${name}, ${email}) 
      ON CONFLICT (id) DO NOTHING
    `;
    const currentUser = data;
    return currentUser;
  } catch (error) {
    console.error("error fetchig usuario", error);
    throw error;
  }
}
export async function fetchUser(email: string) {
  try {
    const data = sql<User>`
      SELECT * FROM users WHERE email = ${email}
    `;
  } catch (error) {
    console.error("error fetchig data", error);
    throw error;
  }
}
