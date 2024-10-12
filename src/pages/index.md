import { useEffect, useRef } from "react";
import { MoveDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MarqueeAnimation = () => {
const tweenRef = useRef(null);

useEffect(() => {
gsap.registerPlugin(ScrollTrigger);
const tween = gsap.to(".marquee_part", {
xPercent: -100,
repeat: -1,
duration: 5,
ease: "linear",
});

    tweenRef.current = tween;
    ScrollTrigger.create({
      onUpdate: (self) => {
        if (self.direction === 1) {
          tween.timeScale(1);
          gsap.to(".arrow", { rotate: 90, duration: 0.1, ease: "power3.in" });
        } else {
          tween.timeScale(-1);
          gsap.to(".arrow", { rotate: -90, duration: 0.1, ease: "power1.in" });
        }
      },
    });

}, []);

return (
<div className="bg-[#a19f94] h-[200vh] flex justify-center items-center">
<section className="marquee relative bg-[#0f0f0f] text-[#eee] py-8 uppercase overflow-hidden">
<div className="marquee_inner flex flex-auto flex-row">
{Array.from({ length: 20 }).map((\_, i) => (
<div
              key={i}
              className="marquee_part flex items-center text-white shrink-0 px-2"
            >
<span className="text-4xl">Modern Creative Studio</span>
<MoveDown className="arrow w-16 h-20 mx-4 transform transition-all duration-200" />
</div>
))}
</div>
</section>
</div>
);
};

export default MarqueeAnimation;
