import gsap from "gsap";
import { Flip } from "gsap/all";
import { motion } from "motion/react";
import React, { useRef, useState } from "react";
import bgImage5 from "../assets/Images/bgImage5.png";
import chitralok1 from "../assets/Images/chitralok1.png";
import chitralok2 from "../assets/Images/chitralok2.png";
import exoape1 from "../assets/Images/exoape1.png";
import exoape2 from "../assets/Images/exoape2.png";
import obys1 from "../assets/Images/obys1.png";
import obys3 from "../assets/Images/obys3.png";
import obys2 from "../assets/Images/obys2.jpg";
import beast1 from "../assets/Images/beast1.png";
import beast2 from "../assets/Images/beast2.png";
import mivi1 from "../assets/Images/mivi1.png";
import mivi2 from "../assets/Images/mivi3.png";
import mivi3 from "../assets/Images/mivi2.png";

gsap.registerPlugin(Flip);
function Work() {
  gsap.defaults({
    ease: "cubic-bezier(0.625, 0.05, 0, 1)",
    duration: 0.725,
  });
  var titles = [
    "ChitraLok",
    "ExoApe Clone",
    "Obys Agency Clone ",
    " Beast Life Reimagine ",
    "Mivi Reimagine",
  ];
  var overcontent = [
    {
      description:
        "Chitralok is a comprehensive movie and TV show platform where users can explore trending movies, popular TV shows, and celebrity biographies. Each movie and TV show has a dedicated page featuring social media links, availability for rent or purchase, trailers, and related recommendations. For TV shows, users can also view different seasons below the details section. The platform includes a search bar for easy navigation to specific content.",
      tools: ["React", "Tailwind CSS", "Redux", "React NPM packages", "Axios"],
      img1: { chitralok1 },
      img2: { chitralok2 },
      live: "https://chitra-lok.vercel.app/",
    },
    {
      description:
        "A clone of the ExoApe landing page, an award-winning modern website. This project deepened my understanding of creating animated, visually appealing websites using React and GSAP.",
      tools: ["React", "Tailwind CSS", "GSAP", "Locomotive Scroll"],
      img1: { exoape1 },
      img2: { exoape2 },
      live: "https://exo-ape-u7v3.vercel.app/",
    },
    {
      description:
        "This project involved creating a clone of the Obys agency's website, a Ukrainian agency known for its award-winning design. It enhanced my understanding of unique layouts, text animations, and web design concepts.",
      tools: [
        "HTML",
        "CSS",
        "JavaScript",
        "GSAP",
        "Locomotive Scroll",
        "Shery.js",
      ],
      img1: { obys1 },
      img2: { obys3 },
      live: "https://obys-agency-sand.vercel.app/",
    },
    {
      description:
        "This was a project for a national-level front-end hackathon, where we reimagined the website for Beast Life, an Indian brand famous for its high-quality supplements. Our team ranked among the top 25 nationwide. This project focused on redesigning and improving the website’s design, animations, and responsiveness.",
      tools: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll"],
      img1: { beast1 },
      img2: { beast2 },
      live: "https://web-start-reimagine-round1.vercel.app/",
    },
    {
      description:
        "This was another project for the same hackathon, where we reimagined the website for Mivi, a leading Indian brand known for its earphones, speakers, and earbuds. Our team ranked among the top 25 nationwide. This project introduced me to frame animations and further improved my design and responsiveness skills.",
      tools: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll"],
      img1: { mivi1 },
      img2: { mivi2 },
      live: "https://web-start-reimagine-round2.vercel.app/",
    },
  ];
  var imgSrc = [
    "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
    "https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)",
    obys2,
    "https://cdn.shopify.com/s/files/1/0690/7723/7977/files/Image07_51f2d9f3-83af-4192-a58c-bb92525d8efb_720x720.jpg?v=1715278358",
    mivi3,
  ];
  const titlehandler = (idx) => {
    const imageItems = document.querySelectorAll(".main-img-items");
    gsap.set(imageItems, { autoAlpha: 0 });
    gsap.set(imageItems[idx], { autoAlpha: 1 });
  };
  const [num, setNum] = useState(0);
  const activeListItemRef = useRef(null);
  const openoverlay = (idx) => {
    setNum(idx);
    gsap.defaults({
      ease: "cubic-bezier(0.625, 0.05, 0, 1)",
      duration: 0.725,
    });
    const items = document.querySelectorAll(".main-title-item");
    console.log("Items found:", items);
    var title;
    items.forEach((elem) => {
      elem.classList.remove("active");
      activeListItemRef.current = items[idx];
      if (activeListItemRef.current) {
        console.log("Active list item set:", activeListItemRef.current);
      } else {
        console.error("Failed to set activeListItem for index:", idx);
      }
      activeListItemRef.current.classList.add("active");
      title = activeListItemRef.current.querySelector(".main-title");
    });
    const titleState = Flip.getState(title, { props: "fontSize" });

    const imageItems = document.querySelectorAll(".main-img-items");
    const image = imageItems[idx].querySelector(".image");
    const imageState = Flip.getState(image);
    const overlayItems = document.querySelectorAll(".overlay-items");
    const overlayItem = overlayItems[idx];
    const content = overlayItem.querySelector(".overlay-row");
    gsap.set(overlayItem, { display: "block", autoAlpha: 110 });
    gsap.fromTo(content, { autoAlpha: 0 }, { autoAlpha: 1, delay: 0.5 });
    const textTarget = overlayItem.querySelector(
      "[data-overlay='text-target']"
    );
    const imgTarget = overlayItem.querySelector("[data-overlay='img-target']");
    textTarget.appendChild(title);
    imgTarget.appendChild(image);
    Flip.from(titleState);
    Flip.from(imageState);
    gsap.set(".overlay-nav", { display: "flex" });
    gsap.fromTo(
      "[data-overlay='nav-item']",
      {
        yPercent: 110,
      },
      {
        yPercent: 0,
        stagger: 0.1,
      }
    );

    gsap.set(imageItems, { autoAlpha: 0 });

    items.forEach((listItem, i) => {
      if (i !== idx) {
        const otherTitle = listItem.querySelector(".main-title");
        gsap.to(otherTitle, {
          yPercent: 100,
          autoAlpha: 0,
          duration: 0.45,
          delay: 0.2 - i * 0.05,
        });
        gsap.to(".work", {
          yPercent: 100,
          autoAlpha: 0,
          duration: 0.45,
        });
      }
    });
  };
  const closeOverlay = () => {
    gsap.defaults({
      ease: "cubic-bezier(0.625, 0.05, 0, 1)",
      duration: 0.525,
    });
    console.log(activeListItemRef.current);
    const items = document.querySelectorAll(".main-title-item");
    const overlayItems = document.querySelectorAll(".overlay-items");
    const index = Array.from(items).indexOf(activeListItemRef.current);
    const overlayItem = overlayItems[index];
    if (!overlayItem) {
      console.error("Overlay item not found for index:", index);
      return;
    }
    const title = overlayItem.querySelector(
      "[data-overlay='text-target'] .main-title"
    );
    console.log(title);
    const image = overlayItem.querySelector(
      "[data-overlay='img-target'] .image"
    );
    const overlayContent = overlayItem.querySelector(".overlay-row");
    const titleState = Flip.getState(title, { props: "fontSize" });
    const imageState = Flip.getState(image);
    const navItems = document.querySelectorAll("[data-overlay='nav-item']");
    const overlayNav = document.querySelector(".overlay-nav");
    gsap.to(navItems, {
      yPercent: 110,
      onComplete: () => {
        overlayNav.style.display = "none";
      },
    });
    gsap.to(overlayContent, {
      autoAlpha: 0,
      onComplete: () => {
        overlayItem.style.display = "none";
      },
    });
    activeListItemRef.current.appendChild(title);
    const imageItems = document.querySelectorAll(".main-img-items");
    imageItems[index].appendChild(image);
    gsap.set(imageItems[index], { autoAlpha: 1 });
    Flip.from(titleState);
    Flip.from(imageState);
    activeListItemRef.current.classList.remove("active");
    activeListItemRef.current = null;
    gsap.to(".main-title,.work,.main-title::after", {
      yPercent: 0,
      autoAlpha: 1,
      delay: 0.3,
      stagger: 0.05,
    });
  };
  return (
    <div className="works w-full  bg-black relative  flex items-center justify-center">
      <div className="bgimage h-screen w-full ">
        <img className="h-full w-full object-cover" src={bgImage5} alt="" />
      </div>
      <div className="page3container p-6  md:p-12 h-screen w-full top-0 left-0 z-[2] absolute ">
        <div className="main flex flex-col-reverse lg:flex-row  opacity-[1] h-full w-full   ">
          <div className="main-col h-[50%] w-full lg:h-full lg:w-[50%]   ">
            <div className="main-img-list relative h-[60vw] w-[46vw]  lg:h-[35vw] lg:w-[25vw] rounded-md  ">
              {imgSrc.map((elem, idx) => {
                return (
                  <div
                    key={idx}
                    className="main-img-items grayscale overflow-hidden z-[1] absolute h-full w-full "
                  >
                    <motion.img
                      initial={{
                        opacity: 0,
                        scale: 1.3,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="image h-full w-full object-cover"
                      src={elem}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="main-col h-[50%] w-full lg:h-full lg:w-[50%] ">
            <div className="main-title-list pr-12 flex flex-col h-full w-full justify-center items-start pr-0 lg:pr-8  ">
              <motion.h1 className="work text-white overflow-hidden text-[17vw] mb-4 md:mb-0 lg:text-[10vw] leading-[1.2]">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileInView={{ y: "0", opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  Work
                </motion.span>
              </motion.h1>
              {titles.map((elem, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => openoverlay(idx)}
                    onMouseOver={() => titlehandler(idx)}
                    className="main-title-item relative active:scale-[0.98] leading-[1.35] lg:leading-[1.2] origin-left cursor-pointer text-white text-[6.5vw] md:text-[4.4vw] lg:text-[3.5vw]  "
                  >
                    <h2 className="main-title overflow-hidden  ">
                      <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        whileInView={{ y: "0", opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-block font-[helvetica]"
                      >
                        {elem}
                      </motion.span>
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="overlay  h-screen w-full pointer-events-none top-0 left-0 absolute z-[4] ">
          {overcontent.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="overlay-items h-full w-full   z-[3] pointer-events-none absolute hidden "
              >
                <div className="overlay-hero bg-[#091018] w-full flex flex-col items-center justify-start ">
                  <div
                    data-overlay="text-target"
                    className="overlay-text-wrap text-center leading-[1.05]  text-white text-[15vw] py-4 md:py-8 lg:py-12 md:text-[9vw] w-full h-[30%] flex items-center justify-center "
                  ></div>
                  <div
                    data-overlay="img-target"
                    className="overlay-img-wrap h-[100%] w-[80%] md:h-[75%] md:w-[60%] lg:h-[60%] lg:w-[30%]  "
                  ></div>
                </div>
                <div className="overlay-row px-6 md:px-12 pt-12 lg:pb-12 bg-[#091018] h-full w-full ">
                  <div className="rowpart h-[50%] w-full flex flex-col lg:flex-row item-center justify-end ">
                    <div className="rowchild flex flex-col md:flex-row items-start md:items-center justify-between text-white h-full w-full lg:w-[60%]">
                      <div className="textsection flex flex-col gap-5 justify-center h-[50%]  md:h-full w-full md:w-[50%] ">
                        <h1 className="text-3xl md:text-4xl lg:text-3xl">
                          Description
                        </h1>
                        <p className=" text-lg lg:text-lg md:text-xl font-[helvetica] text-pretty leading-[1.15]">
                          {elem.description}
                        </p>
                      </div>
                      <div className="imgsection mt-16 md:mt-0 md:aspect-auto self-center h-[40%] md:h-[80%] md:self-left py-0 md:py-0 rounded-md w-[100%] md:w-[45%] flex items-center justify-end">
                        <img
                          className="h-full w-full object-cover"
                          src={elem.img1}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rowpart h-[50%] w-full flex item-center justify-start">
                    <div className="rowchild flex items-center justify-between text-white h-full w-full lg:w-[40%]">
                      <div className="imgsection h-[30vw] lg:h-[20vw] rounded-md w-[45%] lg:w-[35%] flex items-center justify-end">
                        <img
                          className="h-full w-full object-cover"
                          src={elem.img2}
                          alt=""
                        />
                      </div>
                      <div className="textsection text-left flex flex-col gap-5 justify-center  h-full w-[45%] md:w-[50%] ">
                        <h1 className="text-3xl lg:text-3xl md:text-5xl ">
                          Tools Used
                        </h1>
                        <ul className="text-white md:text-2xl font-[helvetica] ">
                          {elem.tools.map((e, id) => {
                            return <li key={id}>{e}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="overlay-nav  pointer-events-auto  absolute px-12 z-[4] top-[51%]  lg:bottom-[10%] left-0 right-0 overflow-hidden flex items-center justify-between hidden ">
            <h3
              onClick={() => closeOverlay()}
              data-overlay="nav-item"
              className="text-white font-[satoshiregular] cursor-pointer text-2xl"
            >
              Back to list
            </h3>
            {overcontent.map((e, id) => {
              if (id === num) {
                return (
                  <h3
                    key={id}
                    data-overlay="nav-item"
                    className="text-white font-[satoshiregular] cursor-pointer text-2xl"
                  >
                    <a target="_blank" href={e.live}>
                      Live Link
                    </a>
                  </h3>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
