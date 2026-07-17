"use client";

import { motion } from "framer-motion";

export default function Plans() {

  const plans = [
    {
      name: "1 MONTH",
      duration: "1 Month Coaching",
      price: "500 EGP",
      features: [
        "Workout Plan",
        "Nutrition Guidance",
        "Monthly Check-in",
      ],
    },

    {
      name: "3 MONTHS",
      duration: "3 Months Coaching",
      price: "1200 EGP",
      popular: true,
      features: [
        "Customized Workout Plan",
        "Personal Nutrition Plan",
        "Weekly Follow Up",
        "Progress Tracking",
      ],
    },

    {
      name: "6 MONTHS",
      duration: "6 Months Coaching",
      price: "2500 EGP",
      features: [
        "Advanced Coaching",
        "Full Diet Strategy",
        "Priority Support",
        "Complete Guidance",
      ],
    },
  ];


  return (
    <section
      id="coaching"
      className="bg-zinc-950 text-white py-24 px-6 lg:px-24"
    >

      <div className="max-w-7xl mx-auto">


        {/* Title */}

        <div className="text-center mb-16">

          <p className="text-orange-500 tracking-[5px] font-bold uppercase">
            Coaching Plans
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-5 uppercase">
            Choose Your
            <span className="text-orange-500">
              {" "}Plan
            </span>
          </h2>

        </div>



        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 items-center">


          {plans.map((plan, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              viewport={{ once: true }}

              className={`
                relative
                rounded-3xl
                p-8
                border
                ${
                  plan.popular
                    ? "bg-orange-500 text-black border-orange-500 scale-105"
                    : "bg-zinc-900 border-zinc-800"
                }
              `}
            >


              {plan.popular && (

                <div
                  className="
                    absolute
                    -top-4
                    left-1/2
                    -translate-x-1/2
                    bg-black
                    text-orange-500
                    px-5
                    py-2
                    rounded-full
                    font-bold
                    text-sm
                  "
                >
                  MOST POPULAR
                </div>

              )}



              <h3 className="text-3xl font-black">
                {plan.name}
              </h3>


              <p
                className={`
                  mt-3
                  text-sm
                  ${
                    plan.popular
                      ? "text-black/70"
                      : "text-gray-400"
                  }
                `}
              >
                {plan.duration}
              </p>



              <p
                className={`
                  text-5xl
                  font-black
                  mt-6
                  ${
                    plan.popular
                      ? "text-black"
                      : "text-orange-500"
                  }
                `}
              >
                {plan.price}
              </p>




              <div className="mt-8 space-y-4">

                {plan.features.map((feature, i) => (

                  <p
                    key={i}
                    className={
                      plan.popular
                        ? "text-black"
                        : "text-gray-400"
                    }
                  >
                    ✓ {feature}
                  </p>

                ))}

              </div>




              <a
                href="#join"

                className={`
                  block
                  text-center
                  mt-10
                  py-4
                  rounded-xl
                  font-bold
                  uppercase
                  transition

                  ${
                    plan.popular
                      ? "bg-black text-white hover:bg-zinc-800"
                      : "bg-orange-500 text-black hover:bg-orange-600"
                  }
                `}
              >
                Join Now
              </a>



            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
}