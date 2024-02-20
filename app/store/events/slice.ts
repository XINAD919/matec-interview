// import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
// export type EventId = string;

// export interface Event {
//   title: string;
//   description: string;
//   date: string;
//   time: string;
//   place: string;
//   organizer: string;
//   category: string;
//   image: string;
//   registered_users: string[];
//   speakers: { name: string; rol: string }[];
// }

// export interface EventWithId extends Event {
//   id: EventId;
// }
// const DEFAULT_STATE = [
//   {
//     id: "c7e3f8d2-4a15-492d-872b-6cf028e8e8d9",
//     title: "Feria de Arte",
//     description: "Una feria de arte con artistas locales y nacionales.",
//     date: "2024-07-10",
//     time: "11:00",
//     place: "Plaza Principal",
//     organizer: "Asociación de Artistas",
//     category: "Arte",
//     image: "/events/evento3.png",
//     registered_users: ["uno", "dos"],
//     speakers: [
//       {
//         name: "Carlos Martínez",
//         rol: "Artista destacado",
//       },
//     ],
//   },
// ];

// const initialState: EventWithId[] = (() => {
//   const persistedState = localStorage.getItem("__redux__state__");
//   if (persistedState) return JSON.parse(persistedState).events;
//   return DEFAULT_STATE;
// })();

// export const eventSlice = createSlice({
//   name: "events",
//   initialState,
//   reducers: {
//     deleteEventById: (state, action: PayloadAction<EventId>) => {
//       const id = action.payload;
//       return state.filter((event) => event.id !== id);
//     },
//   },
// });

// export default eventSlice.reducer;

// export const { deleteEventById } = eventSlice.actions;
