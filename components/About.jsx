"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 text-white min-h-screen flex items-center py-24 px-6 lg:px-24"
    >

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >

          <p className="text-[#D4AF37] tracking-[5px] font-bold mb-5 uppercase">
            About Me
          </p>


          <h2 className="text-6xl md:text-8xl font-black uppercase leading-none">

            AHMED

            <br />

            <span className="text-[#D4AF37]">
              ALAA
            </span>

          </h2>


          <p className="mt-10 text-gray-300 text-xl leading-9 max-w-3xl">

            I am an online fitness coach dedicated to helping people
            build stronger, healthier, and more aesthetic physiques.

            <br />
            <br />

            Through personalized training, smart nutrition,
            and continuous guidance, I help you create a physique
            you can be proud of.

          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">


            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#D4AF37] transition">

              <h3 className="text-4xl font-black text-[#D4AF37]">
                100%
              </h3>

              <p className="text-gray-400 mt-3">
                Personalized Plans
              </p>

            </div>



            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#D4AF37] transition">

              <h3 className="text-4xl font-black text-[#D4AF37]">
                24/7
              </h3>

              <p className="text-gray-400 mt-3">
                Support & Follow Up
              </p>

            </div>



            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#D4AF37] transition">

              <h3 className="text-4xl font-black text-[#D4AF37]">
                1:1
              </h3>

              <p className="text-gray-400 mt-3">
                Online Coaching
              </p>

            </div>


          </div>


          <a
            href="#join"
            className="
              inline-block
              mt-12
              bg-[#D4AF37]
              hover:bg-[#B8962E]
              px-10
              py-4
              rounded-xl
              font-bold
              uppercase
              transition
            "
          >
            Start Coaching
          </a>


        </motion.div>


      </div>


    </section>
  );
}