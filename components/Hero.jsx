"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >

      {/* Background */}
      <img
        src="/hero.jpg"
        alt="Ahmed Alaa"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
        "
      />


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>


      {/* Left Gradient */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          w-full
          md:w-3/4
          bg-gradient-to-r
          from-black
          via-black/80
          to-transparent
        "
      ></div>



      {/* Content */}
      <div className="relative z-10 h-full flex items-center">


        <motion.div
          initial={{
            opacity: 0,
            x: -60
          }}

          animate={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 0.8
          }}

          className="
            max-w-xl
            px-6
            md:px-0
            md:ml-16
            lg:ml-20
          "
        >


          <p
            className="
              text-orange-500
              tracking-[5px]
              font-bold
              uppercase
              mb-5
              text-sm
              md:text-base
            "
          >
            Online Coaching
          </p>



          <h1
            className="
              text-5xl
              sm:text-6xl
              md:text-8xl
              font-black
              leading-none
              uppercase
            "
          >

            BUILD YOUR

            <br />

            <span className="text-orange-500">
              BEST
            </span>

            {" "}PHYSIQUE

          </h1>




          <p
            className="
              mt-8
              text-gray-300
              text-lg
              leading-8
            "
          >
            Personalized training.
            <br />
            Custom nutrition.
            <br />
            Consistent support.
            <br />
            Real results.
          </p>




          <div className="flex flex-wrap gap-5 mt-10">


            <a
              href="#join"
              className="
                bg-orange-500
                hover:bg-orange-600
                px-8
                py-4
                rounded-xl
                font-black
                uppercase
                transition
                shadow-lg
                shadow-orange-500/30
              "
            >
              Apply Now
            </a>



            <a
  href="https://wa.me/201068328134"
  target="_blank"
  rel="noopener noreferrer"
  className="
    border
    border-white/40
    px-8
    py-4
    rounded-xl
    font-bold
    uppercase
    hover:border-orange-500
    hover:text-orange-500
    transition
  "
>
  Contact
           </a>


          </div>


        </motion.div>


      </div>



      {/* Scroll */}
      <div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          animate-bounce
        "
      >

        <div
          className="
            w-7
            h-12
            border-2
            border-white
            rounded-full
            flex
            justify-center
          "
        >

          <div
            className="
              w-1
              h-3
              bg-white
              rounded-full
              mt-2
            "
          ></div>


        </div>


      </div>


    </section>
  );
}