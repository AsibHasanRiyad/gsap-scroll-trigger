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

<!--  -->

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const NavIconMove = () => {
useGSAP(() => {
gsap.registerPlugin(ScrollTrigger);
gsap.from(".logo", {
y: "40vh",
scale: 4,
ease: "power4.in",
duration: 10,
scrollTrigger: {
trigger: ".logo",
start: "top 0%",
end: "bottom ",

        scrub: true,
      },
    });

    // ScrollTrigger.create({
    //   animation: gsap.from(
    //     ".logo",
    //     {
    //       y: "40vh",
    //       scale: 3,
    //       color: "black",
    //     },

    //     gsap.to(".logo", {
    //       color: "primary",
    //     })
    //   ),
    //   scrub: true,
    // });

}, []);
return (
<div className="  h-[200vh]">
<nav className=" flex justify-between items-center p-5 text-xl fixed left-0 lg:left-[256px] top-0 z-[1000] bg-black text-primary right-0">
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
<h1 className="logo font-spicy fixed top-4  text-4xl text-primary left-[38%] lg:left-[53%] transform translate-x-[10%] z-[1000]">
GSAP
</h1>
</div>

      <div className=" mt-[100vh] p-10 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum natus
        inventore placeat obcaecati debitis et nostrum ducimus vel. Sed fugit
        atque alias assumenda inventore ea voluptates obcaecati fuga, facere
        earum ullam! Fuga dolore incidunt accusantium maxime officiis! Quibusdam
        optio nam ipsum asperiores repudiandae amet sapiente, molestias quisquam
        rem odio atque excepturi fugit aut inventore dolore delectus ratione
        nesciunt beatae nobis debitis voluptates accusantium similique. Vero
        illo, enim aliquam cumque nam, fugiat iusto veritatis porro assumenda
        quae tempora unde velit aperiam voluptatum itaque laboriosam totam
        temporibus cupiditate, exercitationem natus ullam delectus. Modi
        nesciunt quis recusandae cumque iure accusantium accusamus natus alias
        totam id distinctio inventore nemo debitis ipsa tempora magnam
        repellendus sunt deleniti cupiditate animi, consequuntur doloribus.
        Voluptatibus enim eaque vel odit eos ipsam, repellendus, distinctio
        aliquam nostrum eum cupiditate illum omnis ducimus voluptate magnam,
        amet maiores. Porro voluptatem tempore ea nemo dignissimos reiciendis
        quidem laborum repudiandae, eius nisi animi provident assumenda harum
        quae possimus ad maxime deleniti nostrum in. Beatae odit aliquam nostrum
        accusantium odio, ullam voluptate aspernatur qui soluta illo ea
        assumenda quasi voluptatem excepturi quae? In dolores ducimus recusandae
        id vero ea natus quae consequatur, earum, esse, rerum dignissimos animi
        dicta. Repellat voluptate eos non voluptas ut, debitis esse atque, sunt
        quisquam et delectus eveniet tenetur, totam molestias quos qui aliquam
        consequuntur velit a accusamus! Aut laudantium magnam aliquam dolorem
        rerum, temporibus asperiores cum cupiditate minus nihil quaerat
        inventore eius tempora nulla velit error accusamus ea similique
        assumenda earum facilis laborum autem porro quae. Ad, quod eius
        repellendus, fugiat hic facere debitis, vitae sapiente quibusdam a quasi
        necessitatibus quos iste earum corporis. Amet voluptate optio quis
        dolore nisi ullam excepturi laboriosam unde, suscipit id! Cum fugiat
        blanditiis soluta officiis voluptatum debitis reprehenderit fugit, eaque
        aspernatur asperiores minus, veniam et aperiam. Voluptatum commodi earum
        fugit facere nemo, voluptatibus id aut sunt perspiciatis reiciendis
        placeat facilis harum magni voluptate adipisci quisquam dolor, in culpa
        error ullam modi a! At maiores ipsum sapiente ex vel saepe excepturi
        fuga voluptates nihil quam? Vero vitae voluptas soluta sequi pariatur
        inventore, commodi reiciendis hic, rerum laboriosam eaque ratione sit ad
        consequuntur accusamus ipsam facilis quod fuga repellat illo. Quod odio,
        dicta amet iure saepe eveniet nostrum eum iusto fugiat ut eos maxime
        eius quasi nisi voluptatem nulla magni illo? Dignissimos sed nam,
        laudantium sapiente repellat in nobis laborum veritatis vero natus
        doloribus eaque aliquam molestias, ratione accusamus cum rem enim maxime
        impedit porro aliquid eius culpa obcaecati tempora. Ut atque, cum
        consequatur dolor incidunt eos optio, reprehenderit et officiis eum
        tempora error ullam dolore corporis commodi repellat quo doloremque at.
        Voluptatem, mollitia molestias! Non, quod dignissimos. Ipsa, placeat.
        Nemo sit excepturi ratione deleniti fugit ullam unde, iusto reiciendis
        et. Natus quo ad ratione at sapiente rem nisi doloribus! Eveniet, esse
        voluptas, minima nam eos excepturi in sapiente doloribus voluptates
        magnam illum eum blanditiis deserunt quam! Quos odit accusamus laborum
        ipsa iste architecto sit aliquid praesentium autem, ex obcaecati minus
        dolore. Repellat modi atque dolor numquam iure, dolorum architecto
        omnis, facilis nobis id dicta rem. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Consequuntur non suscipit doloribus nam
        quaerat commodi repellat iure ex. Iusto perferendis facere iste fugit
        eaque, animi maiores natus aliquam culpa ad, nam et magni! Maiores
        veritatis, vel ex ducimus, aperiam libero eveniet eaque nulla cum, nam
        totam voluptates quod! Modi, totam illum. Dolore eligendi repellendus
        repellat maxime necessitatibus facilis modi inventore quae recusandae
        tenetur voluptatem et cum neque iusto, ex, soluta ipsa corrupti nostrum,
        facere aperiam exercitationem reiciendis temporibus provident.
        Voluptates vero voluptatibus dolore asperiores. Amet magnam tempore
        incidunt, laborum ea, et quaerat reiciendis ipsam quidem accusamus quae
        blanditiis doloremque nihil, porro libero itaque. Ea quaerat unde
        possimus omnis, voluptas vero fuga, inventore non nobis excepturi
        similique porro? Dolor similique repellat sequi sunt atque molestiae
        distinctio nam delectus, possimus asperiores temporibus officiis
        veritatis ad corrupti, corporis vero repudiandae reiciendis ducimus
        deserunt eum placeat. Sapiente tempora excepturi, sint consectetur
        consequatur soluta voluptatibus natus nihil corporis autem velit iusto
        corrupti animi cupiditate blanditiis dolores rerum voluptatem facilis
        fugit mollitia. Ipsum autem assumenda voluptas, rem, reiciendis quaerat
        magnam praesentium eaque expedita molestiae ad maiores illo esse eius.
        Excepturi vel quaerat, illum consectetur quidem beatae explicabo debitis
        earum officia minima architecto sunt illo porro ipsum. Enim est sit esse
        soluta quasi ab sunt nulla quidem error, officiis, animi sapiente
        repudiandae. Illo amet est impedit consectetur libero, cumque earum
        repudiandae assumenda, neque reprehenderit at voluptatibus
        exercitationem quis quod sed nisi nostrum ipsa aliquam natus nihil
        delectus omnis laborum. Doloribus ipsum modi corrupti cupiditate tempora
        nihil. Sunt molestiae dignissimos earum omnis! Voluptate ea natus
        aliquam. Iusto reiciendis ipsa animi magnam reprehenderit quas sapiente
        assumenda, asperiores natus illum dolores tempora veritatis maxime
        officiis perferendis nostrum, blanditiis quibusdam ipsam impedit sit.
        Labore explicabo consequuntur voluptatum deleniti eum laudantium nobis
        odit nisi libero eius quos, quas, saepe rem aliquid veniam vitae placeat
        at unde ipsa nesciunt. Animi nisi mollitia repudiandae nemo provident
        doloremque! Vel officia sint animi molestiae reprehenderit! Commodi
        soluta vero, blanditiis quo ad veniam ab modi, impedit qui quae sed
        autem officia nam vitae atque fuga, alias quidem odio enim praesentium?
        Sit eligendi earum quasi vero, molestias maiores possimus quia, officia
        porro reprehenderit repellendus! Fugit iure omnis, est similique laborum
        eum inventore ex aliquam exercitationem molestiae, totam saepe voluptate
        architecto dolor, aliquid impedit sed illo maxime nobis cum voluptates
        praesentium nostrum. Voluptatum distinctio quae dolor odit unde aliquid
        optio doloribus accusamus pariatur eligendi laboriosam, quo debitis
        deserunt, id ipsa facere excepturi? Debitis error possimus magni aperiam
        provident officia expedita aliquam quis asperiores itaque accusantium
        facilis cumque sequi, distinctio fugiat atque mollitia culpa eius? Amet
        aut fugiat soluta, facilis temporibus quis corrupti dolorem dolorum!
        Praesentium, quaerat neque? Repellendus expedita fuga, atque distinctio
        accusantium eaque, magnam obcaecati adipisci commodi totam modi, dolorem
        cum eveniet repudiandae placeat aut explicabo. Officia facilis
        repudiandae quam quia deserunt inventore dolor quas architecto rerum,
        esse incidunt rem reprehenderit libero fugiat quidem fuga ut deleniti
        laudantium obcaecati voluptatum. Esse iure eum eos eaque dolorem quas
        fugit voluptates perferendis itaque repellat cum, magni culpa est cumque
        quod.
      </div>
    </div>

);
};

export default NavIconMove;
