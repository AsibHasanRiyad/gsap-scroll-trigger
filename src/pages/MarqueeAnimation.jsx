import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MoveDown } from "lucide-react";
import { useRef } from "react";

const MarqueeAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tweenRef = useRef(null);
  useGSAP(() => {
    const tween = gsap.to(".marquee", {
      xPercent: -100,
      repeat: -1,
      duration: 3,
      ease: "linear",
    });
    tweenRef.current = tween;
    ScrollTrigger.create({
      onUpdate: (item) => {
        if (item.direction === 1) {
          tween.timeScale(1);
          gsap.to(".arrow", {
            rotate: -90,
          });
        } else {
          tween.timeScale(-1);
          gsap.to(".arrow", {
            rotate: 90,
          });
        }
      },
    });
  }, []);
  return (
    <div className=" min-h-[200vh] bg-black flex justify-center items-center text-white">
      <div className="  flex items-center justify-center gap-5 overflow-hidden text-5xl bg-white text-black w-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            className="marquee cursor-none flex items-center justify-center whitespace-nowrap gap-5"
            key={i}
          >
            <p>GSAP is Awesome</p>
            <MoveDown className="arrow w-16 h-24 " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeAnimation;
