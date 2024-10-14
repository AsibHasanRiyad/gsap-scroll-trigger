import { Link } from "react-router-dom";

const HorizontalScroll = () => {
  return (
    <div className=" relative bg-black h-full min-h-screen w-full container">
      <nav className=" text-center text-3xl py-5 fixed top-0 left-[15%] bottom-0 right-0 text-white">
        <Link>Horizontal Scroll</Link>
      </nav>
    </div>
  );
};

export default HorizontalScroll;
