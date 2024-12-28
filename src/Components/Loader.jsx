import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import bgImage2 from "../assets/Images/bgImage2.png"
function Loader( {func} ) {
  const laserref = useRef();
  const loaderref = useRef();
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.to(".firstsetoftext h1", {
      delay: 0.25,
      opacity: 1,
      duration: 0.9,
      ease: "cubic-bezier(0.22, 1, 0.36, 1)",
      stagger: 0.06,
    })
      .to(".firstsetoftext h1", {
        delay: 0.6,
        opacity: 0,
        duration: 0.7,
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        stagger: -0.2,
      })
      .to(
        ".secondsetoftext",
        {
          delay: 0.2,
          duration: 1.2,
          opacity: 1,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        "a"
      )
      .to(
        laserref.current,
        {
          delay: 0.5,
          duration: 3,
          height: "100%",
          ease: "expo.out",
        },
        "a"
      )
      .to(
        loaderref.current,
        {
          delay: 0.5,
          duration: 3,
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          ease: "expo.out",
          onComplete:function(){
            func(true);
          }
        },
        "a"
      );
  });
  return (
    <div ref={loaderref} className="loader pointer-events-none fixed z-[500] top-0 left-0 h-screen w-full ">
      <div className="loadercontainer relative h-full w-full flex items-center justify-center ">
        <div className="bgimage flex absolute z-[0] top-0 left-0  h-full w-full ">
          <img
            className="h-full w-full object-cover"
            src={bgImage2}
            alt=""
          />
        </div>
        <div
          ref={laserref}
          className="laser-loader w-[4px] h-[0%] self-end absolute z-[2] "
        ></div>
        <div className="allcontent  absolute flex items-center justify-center z-[0] top-0 left-0 h-full w-full z-[6] ">
          <div className="loadertexts w-full h-fit   flex items-center justify-center text-center">
            <div className="firstsetoftext absolute  flex flex-col items-center justify-center gap-3 ">
              <h1 className="text-white opacity-0 text-4xl md:text-6xl lg:text-5xl ">
                नमस्ते
              </h1>
              <h1 className="text-white opacity-0 text-2xl md:text-3xl  lg:text-2xl ">
                ( Namaste )
              </h1>
            </div>
            <div className="secondsetoftext opacity-0 ">
              <h1 className="text-white flex items-center  text-2xl md:text-3xl lg:text-4xl  ">
                Your web experience is{" "}
                <span className="inline-block flex items-center justify-start pl-3 md:w-44 h-16 loadingtext">
                  loading
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
