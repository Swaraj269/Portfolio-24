import { motion } from "motion/react";
import React, { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Contact({ need }) {
  const social = [
    { name: "LinkedIn", icon: <FaLinkedinIn />, link: "" },
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "Github", icon: <FaGithub /> },
  ];
  useEffect(() => {}, [need]);
  return (
    <div className="h-screen w-full relative">
      <div className="bgimage pointer-events-none h-full absolute z-[-1] w-full  ">
        <img
          className="h-full w-full object-cover"
          src="../src/assets/Images/bgImage3.png"
          alt=""
        />
      </div>
      <div className="cotactcontent flex flex-col-reverse lg:flex-row px-6 md:px-12 h-full w-full absolute z-[0]">
        <div className="leftpart leading-[1.22] h-[30%] lg:h-full text-white text-3xl md:text-6xl lg:text-5xl flex flex-col pb-8 lg:pb-20 justify-end md:w-full lg:w-[50%] ">
          <h1 className="font-[helvetica]">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block  font-[helvetica] "
            >
              Thanks for <span>stopping</span>
            </motion.span>
          </h1>
          <h1 className="font-[helvetica]">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block font-[helvetica] "
            >
              by my portfolio!
            </motion.span>{" "}
          </h1>
          <h1 className="font-[helvetica]">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block font-[helvetica] "
            >
              crafted with <span>love</span>
            </motion.span>
          </h1>
          <h1>
            {" "}
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block "
            >
              by me! 🫶
            </motion.span>{" "}
          </h1>
        </div>
        <div className="rightpart h-[70%] lg:h-full flex flex-col pb-8 lg:pb-20 justify-end w-full lg:w-[50%] ">
          <motion.h1 className="Contact text-white overflow-hidden text-[17vw] mb-8 md:mb-0 lg:text-[10vw] leading-[1.2]">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              Contact
            </motion.span>
          </motion.h1>
          <div className="socials ">
            {social.map((elem, idx) => {
              return (
                <a
                  key={idx}
                  href={``}
                  className="link flex gap-8 cursor-pointer active:scale-[0.98] origin-left items-center py-2 md:py-4 text-white text-3xl md:text-4xl lg:text-4xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon">{elem.icon}</div>
                  <div className="socialtext ">
                    <h2 className="main-title cursor-pointer overflow-hidden  ">
                      <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        whileInView={{ y: "0", opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-block font-[helvetica]"
                      >
                        {elem.name}
                      </motion.span>
                    </h2>
                  </div>
                </a>
              );
            })}
          </div>
          <h2 className="text-white mt-4 md:mt-6 md:text-4xl lg:mt-8 text-2xl lg:text-3xl">
            Feel free to reach out for collabs or opportunities!
          </h2>
          <a
            href="mailto:swarajsingh494@gmail.com"
            className="show flex w-fit text-2xl mt-6 md:mt-8 lg:mt-6 lg:text-3xl gap-4 md:gap-4 lg:gap-6 rounded-full items-center text-black bg-white lg:py-2 py-1  px-6 lg:px-8 "
          >
            <div className="dot2 md:h-3 h-2 w-2 md:w-3 "></div>
            <div className="skillset">
              <h2 className="font-[satoshiregular]">SayHello@gmail.com</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
