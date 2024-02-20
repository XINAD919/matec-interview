"use client";
import { useState } from "react";
import useFormData from "../hooks/useFormData";
import Input from "./Input";
import { Tooltip } from "@mui/material";
import X from "./icons/X";
import toast from "react-hot-toast";
import { createEvent } from "../lib/data";

export default function EventForm({ user }) {
  const { form, formData, updateFormData } = useFormData();
  const [speakers, setSpeakers] = useState([]);

  const handleSpeakers = () => {
    const speakerName = document.getElementById("speaker_name");
    const speakerRole = document.getElementById("speaker_role");

    if (speakerName.value && speakerRole.value) {
      const newSpeaker = {
        name: speakerName.value,
        rol: speakerRole.value,
      };

      setSpeakers([...speakers, newSpeaker]);

      speakerName.value = "";
      speakerRole.value = "";
    }
  };

  const deleteSpeaker = (index) => {
    const newSpeakers = [...speakers];
    newSpeakers.splice(index, 1);
    setSpeakers(newSpeakers);
    console.log(speakers);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const linkImage = await fetch(
        `https://api.unsplash.com/photos/random?client_id=4c5C-Pws7Qet4ahhmsaWpFelzSm21u_8_XsyY4sPa6o`
      );
      const response = await linkImage.json();

      delete formData.speaker_name;
      delete formData.speaker_role;
      formData.speakers = [...speakers];
      formData.image = response.urls.raw;
      formData.organizer = user;

      const res = await fetch("/api/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      toast.success("Event submitted successfully");
    } catch (error) {
      console.log("🚀 ~ submitForm ~ error:", error);
      toast.error(`Error while submitting event ${error}`);
    }
  };

  return (
    <div className='flex w-full overflow mt-8 mb-8 justify-center items-center'>
      <form
        ref={form}
        onChange={updateFormData}
        onSubmit={submitForm}
        className='flex flex-col w-1/2 rounded-xl bg-white px-4 py-2'
      >
        <h1 className='text-center text-2xl font-semibold'>Create Event</h1>
        <Input name='title' type='text' label='Event title *' required />
        <Input name='description' type='text' label='Event description *' />
        <Input name='category' type='text' label='Event category *' required />
        <Input name='place' type='text' label='Event place' />
        <div className='flex md:flex-row flex-col md:gap-4 w-full justify-around'>
          <Input
            name='date'
            type='date'
            label='Event date'
            containerClassName='w-full'
          />
          <Input
            name='time'
            type='time'
            label='Event time'
            containerClassName='w-full'
          />
        </div>
        <Input
          name='organizer'
          type='text'
          label='Event organizer'
          defaultValue={user}
          disabled
        />
        <div className='border-'>
          <h2 className='text-xl font-semibold'>Speakers</h2>
          {speakers && speakers.length > 0 && (
            <div className=' grid grid-cols-3 md:grid-cols-6 md:gap-4 gap-2'>
              {speakers.map((speaker, index) => (
                <div className='w-fit' key={crypto.randomUUID()}>
                  <Tooltip
                    title={`${"name:" + speaker.name + " rol:" + speaker.rol}`}
                  >
                    <div className='flex items-center gap-1 w-fit bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded capitalize'>
                      <span className=''>{speaker.name.split(" ")[0]}</span>
                      <div
                        className={"w-fit h-fit"}
                        onClick={() => deleteSpeaker(index)}
                      >
                        <X className='h-3 w-3' />
                      </div>
                    </div>
                  </Tooltip>
                </div>
              ))}
            </div>
          )}
          <div className='flex md:flex-row flex-col md:gap-4 w-full justify-around'>
            <Input
              name='speaker_name'
              type='text'
              label='Speaker Name'
              containerClassName='w-full'
            />
            <Input
              name='speaker_role'
              type='text'
              label='Speaker rol'
              containerClassName='w-full'
            />
          </div>
          <div className='flex justify-center items-center mt-2'>
            <span
              className='cursor-pointer rounded px-2 py-1 font-semibold  bg-slate-900 text-[#FFD200]  hover:ring-2 ring-[#FFD200]'
              onClick={handleSpeakers}
            >
              Add speaker
            </span>
          </div>
        </div>
        <button
          name='submit form'
          className='mt-8 rounded px-2 py-1 font-semibold  bg-slate-900 text-[#FFD200] hover:ring-2 ring-[#FFD200]'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
