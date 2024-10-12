import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const RevealOnScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".image", {
      rotate: 0,
      scale: 1,
      duration: 5,

      scrollTrigger: {
        trigger: ".image",
        pin: true,
        scrub: true,
        start: "top 30%",
        end: "bottom top",
        // markers: true,
      },
    });
    gsap.to(".textOne", {
      scale: 5,
      translateX: "-400%",
      duration: 5,
      scrollTrigger: {
        trigger: ".textOne",
        pin: true,
        scrub: true,
        start: "top 30%",
        end: "bottom top",
        // markers: true,
      },
    });
    gsap.to(".textTwo", {
      scale: 5,
      translateX: "400%",
      duration: 5,
      scrollTrigger: {
        trigger: ".textTwo",
        pin: true,
        scrub: true,
        start: "top 30%",
        end: "bottom top",
        // markers: true,
      },
    });
    gsap.to(".image2", {
      ease: "bounce.inOut",
      scrollTrigger: {
        trigger: ".paragraph2",
        start: "top 30%",
        end: "bottom 50%",
        scrub: true,
        // markers: true,
        pin: ".image2",
      },
    });

    gsap.to(".image3", {
      ease: "bounce.inOut",
      scrollTrigger: {
        trigger: ".paragraph3",
        start: "top 30%",
        end: "bottom 50%",
        scrub: true,
        // markers: true,

        pin: ".image3",
      },
    });
  }, []);
  return (
    <div className=" bg-black w-full overflow-hidden  ">
      <div className=" relative w-full  min-h-screen justify-center flex items-center">
        <img
          src="https://i.ibb.co.com/XJ14xgy/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-4096x2304-1455.jpg"
          alt=""
          className="  image w-full h-screen object-cover scale-[0.3] lg:scale-[0.2] -rotate-45"
        />
      </div>
      <div className=" text-white absolute overflow-hidden top-[1.9%] md:top-[2%] lg:top-[5%] left-[15%] md:left-[45%] lg:left-[32%] font-bold text-7xl lg:text-[180px] flex items-center justify-center">
        <div className="textOne tracking-widest">SCR</div>
        <div className="textTwo tracking-widest">OLL</div>
      </div>
      <div className=" text-white mt-[70vh]  lg:mt-[85vh] text-2xl leading-relaxed tracking-wider p-10 text-justify">
        <div className=" grid grid-cols-2 gap-10">
          <img
            className=" image2"
            src="https://i.ibb.co.com/dtrsVGR/1-1.jpg"
            alt=""
          />
          <p className="paragraph2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, qui
            repudiandae. Debitis sed, ut tempore fugiat eaque alias corporis,
            similique quaerat saepe voluptates magni dignissimos dolore magnam?
            Voluptas culpa ipsa distinctio voluptates itaque harum dolor beatae
            quidem fugiat incidunt architecto, assumenda sapiente. Assumenda
            voluptatibus non, doloribus ad iste excepturi inventore officia
            laborum architecto minima cum earum sed corporis vel, deleniti
            mollitia, dignissimos tempora ipsum! Officia officiis quibusdam ut
            cumque, ullam pariatur ipsum corrupti hic expedita labore fuga, quod
            perspiciatis, alias molestiae similique facere vitae. Unde optio,
            vel cum deserunt error quis asperiores id at labore minima impedit
            quae corrupti dolorum, vitae laboriosam porro quia incidunt maxime
            illum natus ea. Commodi laborum distinctio quis optio ea, iste nisi
            sapiente cumque saepe error accusantium. Sequi eaque quo quod
            aperiam corporis sapiente suscipit fuga nemo quaerat officia minima,
            beatae autem ipsam ratione praesentium odio voluptatem voluptates
            corrupti, iste blanditiis mollitia placeat ab. Quae tempore, optio
            ab in repellendus recusandae nesciunt quos ad fugit cupiditate, eos
            consequatur suscipit. Sed laudantium, autem totam velit odio
            molestias deserunt delectus officiis ducimus consequatur facilis
            alias dignissimos quibusdam. Sed est consectetur autem expedita, vel
            soluta hic ipsa quaerat nobis facilis. Nemo facere omnis vero
            explicabo laboriosam nesciunt atque cupiditate amet voluptatem,
            adipisci iusto nam aut praesentium est ipsa, officia incidunt
            officiis tenetur quod distinctio quas quia rerum, magni dignissimos.
            Facere iure dicta aperiam optio labore obcaecati minus
            exercitationem asperiores, voluptatem odit, soluta illo et
            distinctio commodi libero blanditiis quo dolorum suscipit a ratione.
            Ad totam officia delectus excepturi quia omnis mollitia consectetur
            repellendus doloribus itaque eius quam, fugiat explicabo debitis est
            minima, fuga quas. Blanditiis repellat, quae numquam hic tenetur
            quaerat, vel illum, reprehenderit totam vitae deserunt praesentium
            perspiciatis ab. Nisi veritatis voluptatibus consectetur non ea
            numquam perspiciatis esse modi laboriosam similique facere ipsa
            quas, harum architecto tempora.
          </p>
        </div>
        <div className=" grid grid-cols-2 mt-20 gap-10">
          <p className="paragraph3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, qui
            repudiandae. Debitis sed, ut tempore fugiat eaque alias corporis,
            similique quaerat saepe voluptates magni dignissimos dolore magnam?
            Voluptas culpa ipsa distinctio voluptates itaque harum dolor beatae
            quidem fugiat incidunt architecto, assumenda sapiente. Assumenda
            voluptatibus non, doloribus ad iste excepturi inventore officia
            laborum architecto minima cum earum sed corporis vel, deleniti
            mollitia, dignissimos tempora ipsum! Officia officiis quibusdam ut
            cumque, ullam pariatur ipsum corrupti hic expedita labore fuga, quod
            perspiciatis, alias molestiae similique facere vitae. Unde optio,
            vel cum deserunt error quis asperiores id at labore minima impedit
            quae corrupti dolorum, vitae laboriosam porro quia incidunt maxime
            illum natus ea. Commodi laborum distinctio quis optio ea, iste nisi
            sapiente cumque saepe error accusantium. Sequi eaque quo quod
            aperiam corporis sapiente suscipit fuga nemo quaerat officia minima,
            beatae autem ipsam ratione praesentium odio voluptatem voluptates
            corrupti, iste blanditiis mollitia placeat ab. Quae tempore, optio
            ab in repellendus recusandae nesciunt quos ad fugit cupiditate, eos
            consequatur suscipit. Sed laudantium, autem totam velit odio
            molestias deserunt delectus officiis ducimus consequatur facilis
            alias dignissimos quibusdam. Sed est consectetur autem expedita, vel
            soluta hic ipsa quaerat nobis facilis. Nemo facere omnis vero
            explicabo laboriosam nesciunt atque cupiditate amet voluptatem,
            adipisci iusto nam aut praesentium est ipsa, officia incidunt
            officiis tenetur quod distinctio quas quia rerum, magni dignissimos.
            Facere iure dicta aperiam optio labore obcaecati minus
            exercitationem asperiores, voluptatem odit, soluta illo et
            distinctio commodi libero blanditiis quo dolorum suscipit a ratione.
            Ad totam officia delectus excepturi quia omnis mollitia consectetur
            repellendus doloribus itaque eius quam, fugiat explicabo debitis est
            minima, fuga quas. Blanditiis repellat, quae numquam hic tenetur
            quaerat, vel illum, reprehenderit totam vitae deserunt praesentium
            perspiciatis ab. Nisi veritatis voluptatibus consectetur non ea
            numquam perspiciatis esse modi laboriosam similique facere ipsa
            quas, harum architecto tempora.
          </p>
          <img
            className=" image3"
            src="https://i.ibb.co.com/dtrsVGR/1-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RevealOnScroll;
