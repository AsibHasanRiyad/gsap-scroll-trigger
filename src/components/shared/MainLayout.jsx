import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Infinite Gallery", path: "/infinite-gallery" },
    { label: "Infinite Image", path: "/infinite-image" },
    { label: "Logo Shrink on Scroll", path: "/logo-shrink-on-scroll" },
    { label: "Marquee Animation", path: "/marquee-animation" },
  ];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-secondary">
          <div className=" flex w-full flex-col items-center justify-center">
            <img className=" w-20 h-20" src={logo} alt="" />
            <h1 className=" text-center text-primary text-xl pt-4 pb-10">
              Gsap ScrollTrigger
            </h1>
          </div>
          <ul className="space-y-2 font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeSidebar}
                  className={`flex items-center p-2 rounded-lg group ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-text "
                  } hover:bg-primary hover:text-secondary transition-all duration-300 transform `}
                >
                  <span className="ms-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 sm:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
