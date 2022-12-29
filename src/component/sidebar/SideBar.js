import React from "react";
import Logo from "../../utility/Logo";
import Footer from "../Footer";

function SideBar({ content }) {
  return (
    <div className="flex flex-col justify-between px-8 mt-2 h-screen">
      <div>
        <Logo />
      </div>
      <div className="mb-auto">{content}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default SideBar;
