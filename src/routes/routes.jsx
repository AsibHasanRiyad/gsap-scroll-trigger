import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/shared/MainLayout";
import Home from "../pages/Home";
import InfiniteGallery from "../pages/InfiniteGallery";
import InfiniteImage from "../pages/InfiniteImage";
import MarqueeAnimation from "../pages/MarqueeAnimation";
import LogoShrinkScroll from "../pages/LogoShrinkScroll";
import NavIconMove from "../pages/NavIconMove";
import RevealOnScroll from "../pages/RevealOnScroll";
import Window from "../pages/Window";
import HorizontalScroll from "../pages/HorizontalScroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/infinite-gallery",
        element: <InfiniteGallery />,
      },
      {
        path: "/infinite-image",
        element: <InfiniteImage />,
      },
      {
        path: "/marquee-animation",
        element: <MarqueeAnimation />,
      },
      {
        path: "/logo-shrink-on-scroll",
        element: <LogoShrinkScroll />,
      },
      {
        path: "/nav-header",
        element: <NavIconMove />,
      },
      {
        path: "/reveal-on-scroll",
        element: <RevealOnScroll />,
      },
      {
        path: "/window",
        element: <Window />,
      },
      {
        path: "/horizontal-scroll",
        element: <HorizontalScroll />,
      },
    ],
  },
]);

export default router;
