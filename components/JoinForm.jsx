"use client";

import { useState } from "react";

export default function JoinForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    phone: "",
    plan: "",
    experience: "",
    trainingDays: "",
    goal: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const message = `
🔥 New Coaching Application

👤 Name: ${form.name}
🎂 Age: ${form.age}
📏 Height: ${form.height} cm
⚖️ Weight: ${form.weight} kg
🚻 Gender: ${form.gender}
📱 Phone: ${form.phone}
💼 Plan: ${form.plan}
🏋️ Experience: ${form.experience}
📅 Training Days: ${form.trainingDays}
🎯 Goal: ${form.goal}
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

          {[
            ["Full Name","text","name"],
            ["Age","number","age"],
            ["Height (cm)","number","height"],
            ["Weight (kg)","number","weight"],
            ["Phone Number","text","phone"],
          ].map((item,index)=>(
            <div key={index}>
              <label className="block mb-2 text-gray-300 font-bold">
                {item[0]}
              </label>

              <input
                type={item[1]}
                placeholder={`Enter your ${item[0].toLowerCase()}`}
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-zinc-900
                  border
                  border-zinc-800
                  focus:border-[#D4AF37]
                  outline-none
                "
                onChange={(e)=>
                  setForm({
                    ...form,
                    [item[2]]:e.target.value
                  })
                }
              />
            </div>
          ))}



          <div>
            <label className="block mb-2 text-gray-300 font-bold">
              Gender
            </label>

            <select
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-800
                focus:border-[#D4AF37]
                outline-none
              "
              onChange={(e)=>setForm({...form,gender:e.target.value})}
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>



          <div>
            <label className="block mb-2 text-gray-300 font-bold">
              Choose Your Plan
            </label>

            <select
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-800
                focus:border-[#D4AF37]
                outline-none
              "
              onChange={(e)=>setForm({...form,plan:e.target.value})}
            >
              <option>Select Plan</option>
              <option>1 Month - 300 EGP</option>
              <option>4 Months - 1000 EGP</option>
              <option>6 Months - 1500 EGP</option>
            </select>
          </div>




          <div>
            <label className="block mb-2 text-gray-300 font-bold">
              Training Experience
            </label>

            <select
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-800
                focus:border-[#D4AF37]
                outline-none
              "
              onChange={(e)=>setForm({...form,experience:e.target.value})}
            >
              <option>Select Experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>




          <div>
            <label className="block mb-2 text-gray-300 font-bold">
              Training Days Per Week
            </label>

            <select
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-800
                focus:border-[#D4AF37]
                outline-none
              "
              onChange={(e)=>setForm({...form,trainingDays:e.target.value})}
            >
              <option>Select Days</option>
              <option>2 Days</option>
              <option>3 Days</option>
              <option>4 Days</option>
              <option>5 Days</option>
              <option>6 Days</option>
              <option>7 Days</option>
            </select>
          </div>





          <div>
            <label className="block mb-2 text-gray-300 font-bold">
              Your Goal
            </label>

            <select
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-800
                focus:border-[#D4AF37]
                outline-none
              "
              onChange={(e)=>setForm({...form,goal:e.target.value})}
            >
              <option>Select Your Goal</option>
              <option>💪 Build Muscle</option>
              <option>🔥 Lose Fat</option>
              <option>⚖️ Body Recomposition</option>
              <option>🏋️ Gain Strength</option>
              <option>🏆 Competition Prep</option>
              <option>❤️ General Fitness</option>
              <option>📈 Improve Athletic Performance</option>
              <option>🎯 Other</option>
            </select>
          </div>




          <button
            type="submit"
            className="
              w-full
              bg-[#D4AF37]
              hover:bg-[#B8962E]
              py-4
              rounded-xl
              font-bold
              text-lg
              transition
              shadow-lg
              shadow-[#D4AF37]/20
            "
          >
            SUBMIT APPLICATION
          </button>


        </form>

      </div>
    </section>
  );
}