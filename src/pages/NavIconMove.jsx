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
          y: "50vh",
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
    <div>
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

      <div className=" mt-[200vh] ">
        <img
          src="https://i.ibb.co.com/TTYKZ57/craig-lovelidge-t-Jml-L5-Nn-RDo-unsplash.jpg"
          alt=""
          className=" w-full object-cover"
        />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dicta
        omnis ipsa. Molestias odio aliquam error doloribus aut laborum incidunt
        architecto debitis, iure optio saepe dolorum dolorem numquam. Harum qui
        quas tempora iusto dolores voluptatum expedita amet, at, molestias fugit
        odio rem. Delectus quaerat natus iusto at debitis nulla suscipit facilis
        adipisci ullam dolore neque similique, a sapiente maiores maxime iste
        perspiciatis numquam eius sed, libero, ad odit non? Suscipit ullam
        itaque corrupti dolorum ex id nostrum exercitationem dignissimos, aut
        nihil, aspernatur excepturi similique cum quod ad est molestiae sit
        facere neque consectetur nobis porro ipsam. Blanditiis architecto
        veritatis quia voluptate quos culpa mollitia laborum voluptates maiores,
        aliquam temporibus deleniti distinctio accusamus amet recusandae iure
        nam commodi. Illo, dolore perferendis odio quibusdam reprehenderit
        aliquam. Temporibus eveniet consectetur assumenda ipsa reprehenderit
        placeat cumque accusamus consequuntur. Tempore, alias iste consectetur
        temporibus nulla expedita aut? Assumenda suscipit totam est nihil dolor
        reiciendis ratione accusantium quisquam fugit quae impedit ipsam quod
        labore, perspiciatis distinctio blanditiis minima at fugiat veniam rerum
        in deserunt voluptatem! Nisi officia magni voluptate, nam excepturi
        quasi! Labore, dolorum! Natus quae repellat soluta aspernatur velit
        aliquam at laboriosam obcaecati fugit, labore voluptatum exercitationem
        sapiente vel voluptatibus eius recusandae! Nostrum reiciendis
        repellendus doloribus doloremque. Molestiae repellendus dolore,
        dignissimos voluptates possimus illum minus nesciunt pariatur
        voluptatibus perferendis laboriosam cupiditate recusandae sunt nihil
        magni totam, nulla quo non? Facere molestiae earum maxime excepturi
        nostrum expedita numquam incidunt ipsam, recusandae accusantium. Quasi
        quia possimus voluptatem dignissimos cupiditate inventore illum
        voluptates. Voluptate dolorem vel molestiae ut aliquid ipsa. Eius nisi
        veritatis excepturi ab, maiores, eum laboriosam dolor optio rerum,
        doloremque eligendi quidem iure! Corrupti, voluptatibus! Maiores
        blanditiis eveniet tempora aliquam, laborum ea maxime iste at architecto
        officia quod mollitia fuga saepe amet facere laboriosam placeat ipsam
        earum, repellat illum asperiores! Nulla eum, consequatur nostrum saepe
        nihil veniam, voluptas maxime molestiae reiciendis deserunt veritatis
        impedit libero eius praesentium animi iure unde. Recusandae, totam
        asperiores atque sequi optio necessitatibus eligendi. Id itaque,
        reprehenderit dolor omnis quos aut facere, temporibus corporis quisquam
        nisi eaque culpa officiis. Adipisci quasi vero labore corrupti maxime
        est veritatis hic, excepturi eos, autem, nulla recusandae facilis omnis
        laudantium officia iure fugiat ducimus rerum? Suscipit dignissimos
        assumenda soluta molestiae, itaque enim aliquid numquam dolores, quasi
        eum ratione deleniti. Doloremque a numquam unde ducimus ipsam iure ab
        maiores aut, odio, similique voluptate quia quaerat soluta sunt
        accusamus. Placeat neque praesentium molestias quam aliquid obcaecati
        atque. Enim, debitis deserunt. Ipsum necessitatibus, laudantium
        voluptatum ad aperiam adipisci voluptates accusamus omnis qui hic ullam
        ex nemo nulla eos quasi inventore expedita dolor odit atque dolorum quis
        velit. Itaque aliquam, error voluptas consectetur dolores commodi
        recusandae accusantium perspiciatis amet et molestias autem, maxime rem
        eligendi odio corrupti labore expedita maiores deleniti cum. Asperiores,
        numquam. Assumenda, minus veniam dignissimos soluta a, non suscipit id
        doloribus corrupti, temporibus nihil minima sit cumque. Culpa quod
        quaerat, laudantium dolor eius totam at repudiandae facere eos! Culpa,
        id quia veniam error dicta consequatur dolor ullam tempora unde ab porro
        facilis, quisquam corrupti aut aperiam consectetur?
      </div>
    </div>
  );
};

export default NavIconMove;
