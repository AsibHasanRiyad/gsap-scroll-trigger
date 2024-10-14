import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Window = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".icon", {
      scale: 1,
      ease: "back.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: ".icon",
        start: "top top",
        end: "bottom end",
        scrub: 1,
      },
    });
    gsap.to(".image", {
      scale: 5,
      duration: 5,
      opacity: 0,

      transformOrigin: "center bottom",
      scrollTrigger: {
        trigger: ".image",
        start: "top 0%",
        end: "bottom end ",
        scrub: 1,
        pin: ".image",
        // markers: true,
      },
    });
  }, []);
  return (
    <div className=" bg-black">
      <div className="   image-container  z-20">
        <img
          className=" relative  image w-full scale-100 object-cover h-screen"
          src="https://i.ibb.co.com/Fm85QXC/3199747.jpg"
          alt=""
        />
      </div>
      {/* <div className=" w-48 h-20 bg-red-600 absolute top-[28%] left-[20%]"></div> */}
      <div className=" text-4xl bg-black text-white text-justify mt-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt
        tempora atque id reprehenderit ipsam eum aspernatur in labore! Sunt
        blanditiis eligendi officiis assumenda debitis rem possimus inventore
        corrupti animi est labore porro non dolorum nam, cum itaque incidunt ea
        suscipit aliquam nostrum vitae voluptas vel. Voluptatibus voluptatum,
        quibusdam et voluptate ipsam nemo impedit reprehenderit accusamus
        ratione ex consequatur magnam sapiente, ducimus quam laudantium
        distinctio! Laboriosam excepturi et at fuga exercitationem rerum,
        officia eius nesciunt repudiandae accusamus iure modi numquam asperiores
        fugiat rem aspernatur earum doloribus! Perspiciatis explicabo possimus
        deleniti debitis beatae maxime repudiandae totam excepturi officia ea
        labore ad ratione, eaque minima voluptates. Eligendi alias, laboriosam
        optio vero animi totam culpa quaerat explicabo minima impedit unde
        accusamus facilis! Alias unde eum nostrum, beatae quos amet similique
        minima in modi molestias nobis asperiores esse pariatur ea magnam atque
        maiores. Necessitatibus nam, vel, voluptate modi nostrum accusantium
        repudiandae quaerat laboriosam sed quos aut maiores labore veniam
        suscipit dolore, aliquid quia beatae corrupti! Incidunt atque veniam
        libero quod architecto itaque quae magni, maxime aut magnam ipsa nam
        quisquam aliquid hic quo. Omnis nostrum, itaque quae perferendis
        molestias eaque ut minima vero animi inventore, qui ipsum alias labore
        deleniti necessitatibus, expedita in. Necessitatibus!
      </div>
    </div>
  );
};

export default Window;
