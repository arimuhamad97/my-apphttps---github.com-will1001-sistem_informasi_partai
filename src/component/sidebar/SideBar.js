import React from "react";
import Logo from "../../utility/Logo";
import Footer from "../Footer";

function SideBar({ content }) {
  return (
    <div className="flex flex-col px-8 mt-2">
      <Logo />
      {content}
      <div className="absolute top-[800px]">
        <Footer />
      </div>
    </div>
  );
}

export default SideBar;
