"use client";

import { useState, useEffect } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);



  return (

    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500

        ${
          scrolled
          ? "bg-black/95 backdrop-blur-lg border-b border-zinc-800 shadow-xl"
          : "bg-transparent"
        }
      `}
    >


      <div
        className="
          max-w-7xl
          mx-auto
          flex
          justify-between
          items-center
          px-8
          lg:px-12
          py-5
        "
      >


        {/* Logo */}

        <div>

          <h1 className="text-3xl font-black tracking-widest uppercase">

            AHMED

            <span className="text-orange-500">
              {" "}ALAA
            </span>

          </h1>


          <p className="text-orange-500 text-sm tracking-[4px] font-semibold">
            ONLINE COACHING
          </p>

        </div>




        {/* Links */}

        <div
          className="
            hidden
            lg:flex
            items-center
            gap-10
            uppercase
            text-sm
            font-semibold
            tracking-wider
          "
        >

          <a
            href="#home"
            className="hover:text-orange-500 hover:-translate-y-1 transition duration-300"
          >
            Home
          </a>


          <a
            href="#about"
            className="hover:text-orange-500 hover:-translate-y-1 transition duration-300"
          >
            About
          </a>


          <a
            href="#coaching"
            className="hover:text-orange-500 hover:-translate-y-1 transition duration-300"
          >
            Coaching
          </a>

<a
  href="https://wa.me/201068328134"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-orange-500 hover:-translate-y-1 transition duration-300"
>
  Contact
</a>
            
          


        </div>




        {/* Button */}

        <a
          href="#join"
          className="
            hidden
            lg:flex
            items-center
            justify-center
            bg-orange-500
            text-black
            px-8
            py-3
            rounded-xl
            uppercase
            font-black
            hover:bg-orange-600
            hover:scale-105
            transition
            duration-300
          "
        >
          Apply Now
        </a>



      </div>


    </nav>

  );
}