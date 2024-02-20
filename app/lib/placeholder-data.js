const users = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Juan",
    email: "juan@example.com",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "María",
    email: "maria@example.com",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    name: "Pedro",
    email: "pedro@example.com",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    name: "Laura",
    email: "laura@example.com",
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    name: "Carlos",
    email: "carlos@example.com",
  },
];
const events = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    title: "Conferencia de Tecnología",
    description: "Una conferencia sobre las últimas tendencias en tecnología.",
    date: "2024-05-15",
    time: "10:00",
    place: "Centro de Convenciones",
    organizer: "Empresa Tech",
    category: "Tecnología",
    image: "/events/evento1.jpg",
    registered_users: [users[0].id, users[1].id, users[2].id],
    speakers: [
      {
        name: "Ana Gómez",
        rol: "Experta en IA",
      },
      {
        name: "David López",
        rol: "Desarrollador Senior",
      },
    ],
  },
  {
    id: "a1f7b8c1-9e91-4b7a-84fb-6a2cc975b1d7",
    title: "Concierto de Rock",
    description: "Un concierto de las mejores bandas de rock.",
    date: "2024-06-20",
    time: "19:00",
    place: "Estadio Municipal",
    organizer: "Promotora de Conciertos",
    category: "Música",
    image: "/events/evento2.jpg",
    registered_users: [users[0].id, users[1].id],
    speakers: [],
  },
  {
    id: "c7e3f8d2-4a15-492d-872b-6cf028e8e8d9",
    title: "Feria de Arte",
    description: "Una feria de arte con artistas locales y nacionales.",
    date: "2024-07-10",
    time: "11:00",
    place: "Plaza Principal",
    organizer: "Asociación de Artistas",
    category: "Arte",
    image: "/events/evento3.png",
    registered_users: [users[3].id, users[2].id, users[4].id],
    speakers: [
      {
        name: "Carlos Martínez",
        rol: "Artista destacado",
      },
    ],
  },
];

module.exports = {
  users,
  events,
};
