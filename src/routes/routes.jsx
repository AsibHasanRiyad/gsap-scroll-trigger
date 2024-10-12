import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/shared/MainLayout";
import Home from "../pages/Home";
import InfiniteGallery from "../pages/InfiniteGallery";
import InfiniteImage from "../pages/InfiniteImage";
import MarqueeAnimation from "../pages/MarqueeAnimation";
import LogoShrinkScroll from "../pages/LogoShrinkScroll";
import NavIconMove from "../pages/NavIconMove";

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
        path: "nav-header",
        element: <NavIconMove />,
      },
    ],
  },
]);

export default router;
