import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="bg-landingPage">
      <div className="flex bg-white global">
        <div>
          <NavBar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
