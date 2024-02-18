export type User = {
  id: string;
  name: string;
  email: string;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  place: string;
  organizer: string;
  category: string;
  image: string;
  registered_users: string[];
  speakers: { name: string; rol: string }[];
};

export type EventForm = {
  title: string;
  description: string;
  date: string;
  time: string;
  place: string;
  organizer: string;
  category: string;
  image: string;
  registered_users: string[];
  speakers: { name: string; rol: string }[];
};
