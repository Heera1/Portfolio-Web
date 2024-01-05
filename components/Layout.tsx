import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { HiMenu, HiX } from "react-icons/hi";
import MoblieNav from "./MobileNav";
import Background from "./Background";



export default function Layout({ children }: React.PropsWithChildren) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="h-screen bg-center bg-no-repeat bg-cover bg-landingPage border-2 border-red-500">
      <Background />
      <div className="h-full bg-white lg:flex sm:block global border-2 border-green-500 z-30">
        <div className="lg:flex page-layout scroll-container">
          <div className="pb-4">
            <div className="hidden lg:block">
              <NavBar onClick={handleClick} />
            </div>
            <div className="sm:block lg:hidden">
              {click ? (
                <div className="relative z-50 h-full bg-slate-300/50">
                  <HiX
                    size={50}
                    className="pt-2 lg:ml-6"
                    onClick={handleClick}
                  />
                  <NavBar onClick={handleClick} />
                </div>
              ) : (
                <MoblieNav />
              )}
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
