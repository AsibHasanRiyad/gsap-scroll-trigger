import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const NavIconMove = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      animation: gsap.from(
        ".logo",
        {
          y: "40vh",
          scale: 4,
          color: "black",
        },
        gsap.to(".logo", {
          color: "primary",
        })
      ),
      scrub: true,
    });
  }, []);
  return (
    <div className="  h-[200vh]">
      <nav className=" flex justify-between items-center p-5 text-lg md:text-xl fixed left-0 md:left-[256px] top-0 z-[1000] bg-black text-primary right-0">
        <div className=" flex gap-5 items-center">
          <h1>Home</h1>
          <h1>Products</h1>
        </div>
        <div className=" flex gap-5 items-center">
          <h1>About</h1>
          <h1>Contact</h1>
        </div>
      </nav>
      <div className=" logo_container">
        <h1 className="logo font-spicy fixed top-5 lg:top-4 text-xl md:text-3xl  lg:text-4xl text-primary left-[40%] md:left-[57%] lg:left-[53%] transform translate-x-[50%] z-[1000]">
          GSAP
        </h1>
      </div>

      <div className=" mt-[300vh] md:mt-[400vh] lg:mt-[200vh] p-10 ">
        <h1 className=" text-5xl text-center">
          Hello I am checking scroll trigger
        </h1>
      </div>
    </div>
  );
};

export default NavIconMove;
