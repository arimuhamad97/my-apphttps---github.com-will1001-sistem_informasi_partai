import React from "react";

import Logo from "../utility/Logo";
import Footer from "./Footer";
import { logoSidebar } from "../utility/icon/LogoSidebar";
import { UserIcon } from "../utility/icon/icon";

function SideBar({ select, setSelect }) {
  return (
    <div className="flex flex-col px-4 mt-2 ">
      <Logo />
      <div className="flex items-center mb-2">
        <UserIcon />
        <div className="flex flex-col pl-2 ">
          <p className="font-semibold text-slate-700">Username</p>
          <p className="text-xs text-slate-700 font-thin">Akun Admin</p>
        </div>
      </div>
      <hr />
      <div className="my-4">
        {logoSidebar.map((res, i) => {
          return (
            <button
              onClick={() => {
                setSelect(res.name);
              }}
              className="flex gap-2 p-2 justify-start w-full"
              key={i}
              style={{
                stroke: select === res.name ? "rgb(234, 88, 12)" : "rgb(51, 65, 85)",
                backgroundColor: select === res.name ? "rgb(255, 247, 237)" : "white",
                WebkitTextFillColor: select === res.name ? "rgb(234, 88, 12)" : "rgb(51, 65, 85)",
              }}
            >
              <span className="">{res.icon} </span> <span className="font-semibold">{res.name}</span>
            </button>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default SideBar;
