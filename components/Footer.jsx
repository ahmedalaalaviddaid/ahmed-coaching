export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-zinc-800">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">


        <div>
          <h2 className="text-3xl font-black">
            AHMED <span className="text-[#D4AF37]">ALAA</span>
          </h2>

          <p className="text-gray-400 mt-2">
            Online Fitness Coach
          </p>
        </div>



        <div className="flex gap-8 text-gray-400">

          <a
            href="#home"
            className="hover:text-[#D4AF37] transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-[#D4AF37] transition"
          >
            About
          </a>

          <a
            href="#coaching"
            className="hover:text-[#D4AF37] transition"
          >
            Coaching
          </a>

          <a
            href="#join"
            className="hover:text-[#D4AF37] transition"
          >
            Join
          </a>

        </div>


      </div>



      <p className="text-center text-gray-600 mt-10 text-sm">
        © 2026 Ahmed Alaa Coaching. All rights reserved.
      </p>


    </footer>
  );
}