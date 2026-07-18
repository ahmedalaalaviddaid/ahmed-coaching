"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


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
    <>


      <nav
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-colors
          duration-200

          ${
            scrolled
              ? "bg-black/70 backdrop-blur-xl shadow-xl border-b border-white/10"
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


          {/* Logo Left */}

          <a href="#home">

            <h1 className="text-3xl font-black tracking-widest uppercase">
              AHMED
              <span className="text-orange-500"> ALAA</span>
            </h1>

            <p className="text-orange-500 text-sm tracking-[4px] font-semibold">
              ONLINE COACHING
            </p>

          </a>



          {/* Mobile Button Right */}

          <button
            onClick={() => setMenuOpen(true)}
            className="
              lg:hidden
              text-white
              hover:text-orange-500
            "
          >
            <Menu size={32}/>
          </button>



          {/* Desktop Links */}

          <div
            className="
              hidden
              lg:flex
              gap-10
              uppercase
              text-sm
              font-semibold
            "
          >

            <a href="#home" className="hover:text-orange-500">
              Home
            </a>

            <a href="#about" className="hover:text-orange-500">
              About
            </a>

            <a href="#coaching" className="hover:text-orange-500">
              Coaching
            </a>

            <a
              href="https://wa.me/201068328134"
              target="_blank"
              className="hover:text-orange-500"
            >
              Contact
            </a>

          </div>



          <a
            href="#join"
            className="
              hidden
              lg:flex
              bg-orange-500
              text-black
              px-8
              py-3
              rounded-xl
              font-black
            "
          >
            Apply Now
          </a>


        </div>

      </nav>



      {/* Mobile Drawer */}

      <div
        className={`
          fixed
          inset-0
          z-[60]
          transition
          ${
            menuOpen
              ? "visible bg-black/60"
              : "invisible"
          }
        `}
        onClick={() => setMenuOpen(false)}
      >


        <div
          onClick={(e)=>e.stopPropagation()}
          className={`
            fixed
            right-0
            top-0
            h-full
            w-80
            bg-black
            p-8
            transition-transform

            ${
              menuOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >


          <button
            onClick={()=>setMenuOpen(false)}
          >
            <X size={32}/>
          </button>



          <div className="mt-10 flex flex-col gap-8 uppercase">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#coaching">
              Coaching
            </a>

            <a href="https://wa.me/201068328134">
              Contact
            </a>

            <a
              href="#join"
              className="
                bg-orange-500
                text-black
                text-center
                py-3
                rounded-xl
                font-black
              "
            >
              Apply Now
            </a>

          </div>


        </div>


      </div>


    </>
  );
}