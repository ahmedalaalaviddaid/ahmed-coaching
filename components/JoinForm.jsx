"use client";

import { useState } from "react";

export default function JoinForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    plan: "",
    experience: "",
    goal: "",
  });


  function handleSubmit(e) {
    e.preventDefault();

    const message = `
🔥 New Coaching Application

Name: ${form.name}
Age: ${form.age}
Phone: ${form.phone}
Plan: ${form.plan}
Experience: ${form.experience}
Goal: ${form.goal}
`;

    window.open(
      "https://wa.me/201068328134?text=" +
        encodeURIComponent(message),
      "_blank"
    );
  }


  return (
    <section
      id="join"
      className="bg-zinc-950 text-white py-24"
    >

      <div className="max-w-2xl mx-auto px-6">


        <h2 className="text-5xl font-black text-center uppercase">
          Join My Coaching
        </h2>


        <p className="text-center text-gray-400 mt-4">
          Fill your information and start your transformation.
        </p>



        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-7"
        >


          {/* Name */}
          <div>
            <label className="block mb-2 text-gray-300 font-bold">
              Full Name
            </label>

            <input
              placeholder="Enter your name"
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-orange-500 outline-none"
              onChange={(e)=>setForm({...form,name:e.target.value})}
            />
          </div>



          {/* Age */}
          <div>
            <label className="block mb-2 text-gray-300 font-bold">
              Age
            </label>

            <input
              type="number"
              placeholder="Enter your age"
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-orange-500 outline-none"
              onChange={(e)=>setForm({...form,age:e.target.value})}
            />
          </div>



          {/* Phone */}
          <div>
            <label className="block mb-2 text-gray-300 font-bold">
              Phone Number
            </label>

            <input
              placeholder="Enter your phone number"
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-orange-500 outline-none"
              onChange={(e)=>setForm({...form,phone:e.target.value})}
            />
          </div>



          {/* Plan */}
          <div>
            <label className="block mb-2 text-gray-300 font-bold">
              Choose Your Plan
            </label>

            <select
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-orange-500 outline-none"
              onChange={(e)=>setForm({...form,plan:e.target.value})}
            >

              <option>Select Plan</option>

              <option>
                1 Month - 500 EGP
              </option>

              <option>
                3 Months - 1200 EGP
              </option>

              <option>
                6 Months - 2500 EGP
              </option>

            </select>

          </div>



          {/* Experience */}
          <div>

            <label className="block mb-2 text-gray-300 font-bold">
              Training Experience
            </label>

            <select
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-orange-500 outline-none"
              onChange={(e)=>setForm({...form,experience:e.target.value})}
            >

              <option>
                Select Experience
              </option>

              <option>
                Beginner
              </option>

              <option>
                Intermediate
              </option>

              <option>
                Advanced
              </option>

            </select>

          </div>




          {/* Goal */}
          <div>

            <label className="block mb-2 text-gray-300 font-bold">
              Your Goal
            </label>

            <textarea
              rows={5}
              placeholder="Example: Build muscle, lose fat, improve physique..."
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-orange-500 outline-none"
              onChange={(e)=>setForm({...form,goal:e.target.value})}
            />

          </div>




          <button
            className="
              w-full
              bg-orange-500
              hover:bg-orange-600
              py-4
              rounded-xl
              font-bold
              text-lg
              transition
              shadow-lg
              shadow-orange-500/20
            "
          >
            SUBMIT APPLICATION
          </button>


        </form>


      </div>

    </section>
  );
}