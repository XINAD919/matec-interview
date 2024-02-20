const { db } = require("@vercel/postgres");
const { users, events } = require("../app/lib/placeholder-data");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE
    );`;
    console.log("created users table");

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        return client.sql`
        INSERT INTO users (id, name, email) 
        VALUES (${user.id}, ${user.name}, ${user.email}) 
        ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`seeded ${insertedUsers.length} users`);
    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("error seeding users", error);
    throw error;
  }
}

async function seedEvents(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS events (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      date DATE NOT NULL,
      time TIME NOT NULL,
      place VARCHAR(255) NOT NULL,
      organizer VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL,
      image TEXT NOT NULL
  ); `;
    console.log("created events table");

    await client.sql`CREATE TABLE IF NOT EXISTS event_speakers(
              event_id UUID REFERENCES events(id),
              speaker_name VARCHAR(255) NOT NULL,
              speaker_role VARCHAR(255) NOT NULL,
              PRIMARY KEY (event_id, speaker_name),
              FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
        )`;
    console.log("created event_speakers table");

    await client.sql`CREATE TABLE IF NOT EXISTS event_users(
          event_id UUID REFERENCES events(id),
          user_id UUID REFERENCES users(id),
          PRIMARY KEY (event_id, user_id),
          FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
          FOREIGN KEY (user_id) REFERENCES users(id) on DELETE CASCADE,
          UNIQUE (event_id, user_id)
    )`;
    console.log("created event_users table");

    const insertedEvents = await Promise.all(
      events.map(async (event) => {
        const {
          id,
          title,
          description,
          category,
          place,
          date,
          time,
          organizer,
          image,
          speakers,
          registered_users,
        } = event;
        client.sql`INSERT INTO events (id, title, description, category, place, date, time, organizer, image) VALUES (${id}, ${title}, ${description}, ${category}, ${place}, ${date}, ${time}, ${organizer}, ${image})
        ON CONFLICT (id) DO NOTHING`;

        if (speakers && speakers.length > 0) {
          await Promise.all(
            speakers.map(async (speaker) => {
              await client.sql`INSERT INTO event_speakers (event_id, speaker_name, speaker_role)
              VALUES(${id},${speaker.name}, ${speaker.rol})`;
            })
          );
        }

        if (registered_users && registered_users.length > 0) {
          await Promise.all(
            registered_users.map(async (userId) => {
              await client.sql`INSERT INTO event_users (event_id, user_id) 
              VALUES (${id},${userId})`;
            })
          );
        }
      })
    );

    console.log(`seeded ${insertedEvents.length} events`);

    return {
      createTable,
      events: insertedEvents,
    };
  } catch (error) {
    console.error("error seeding events", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await seedEvents(client);
  await client.end();
}

main().catch((error) => {
  console.error("error tratando de seedear a la base de datos", error);
});
