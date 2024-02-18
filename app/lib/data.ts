import { sql } from "@vercel/postgres";
import { User, Event } from "./definitions";

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
    throw new Error('Error fetchig events');
  }
}
export async function fetchSpeaker() {
  try {
  } catch (error) {
    console.error("error fetchig data", error);
    throw error;
  }
}
export async function createUser() {
  try {
  } catch (error) {
    console.error("error fetchig data", error);
    throw error;
  }
}
export async function fetchUser(email: string) {
  try {
  } catch (error) {
    console.error("error fetchig data", error);
    throw error;
  }
}
