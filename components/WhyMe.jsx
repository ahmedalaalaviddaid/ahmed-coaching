"use client";

import { motion } from "framer-motion";

export default function WhyMe() {
  const features = [
    {
      title: "Personalized Plans",
      text: "Training and nutrition plans designed specifically for your body and goals.",
      icon: "💪",
    },
    {
      title: "Daily Support",
      text: "Continuous guidance and adjustments to keep you progressing.",
      icon: "🔥",
    },
    {
      title: "Smart Strategy",
      text: "A structured approach focused on building an aesthetic physique.",
      icon: "🎯",
    },
    {
      title: "Real Progress",
      text: "Track your improvements and build long-term results.",
      icon: "📈",
    },
  ];


  return (
    <section
      className="bg-black text-white py-24 px-6 lg:px-24"
    >

      <div className="max-w-7xl mx-auto">


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-orange-500 tracking-[5px] font-bold uppercase">
            Why Choose Me
          </p>

          <h2 className="text-5xl md:text-6xl font-black uppercase mt-5">
            Build Your Best
            <span className="text-orange-500">
              {" "}Physique
            </span>
          </h2>

        </motion.div>



        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


          {features.map((item,index)=>(

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay:index * 0.1 }}
              viewport={{ once:true }}
              className="
                bg-zinc-900
                p-8
                rounded-2xl
                border
                border-zinc-800
                hover:border-orange-500
                transition
                duration-300
                hover:-translate-y-2
              "
            >

              <div className="text-5xl mb-6">
                {item.icon}
              </div>


              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>


              <p className="text-gray-400 leading-7">
                {item.text}
              </p>


            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
}