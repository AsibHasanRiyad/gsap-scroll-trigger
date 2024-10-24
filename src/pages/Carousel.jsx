import { useState } from "react";
import { motion } from "framer-motion";

// Import your images
import image1 from "../assets/1.webp";
import image2 from "../assets/2.webp";
import image3 from "../assets/3.webp";
import image4 from "../assets/4.webp";
import image5 from "../assets/5.webp";

const images = [image1, image2, image3, image4, image5];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [hoverDirection, setHoverDirection] = useState("left");

  const handleHover = (index) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
    setHoverDirection(index > currentIndex ? "right" : "left");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-semibold text-white bg-black text-8xl">
      <div
        key={prevIndex}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${images[prevIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Current Image */}
      <motion.div
        key={currentIndex}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{
          clipPath:
            hoverDirection === "right"
              ? "polygon(0 0, 0 0, 0 100%, 0 100%)"
              : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        }}
        animate={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        exit={{
          clipPath:
            hoverDirection === "left"
              ? "polygon(0 0, 0 0, 0 100%, 0 100%)"
              : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-between h-screen text-center">
        {images.map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-full h-full border border-white cursor-pointer"
            onMouseEnter={() => handleHover(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
