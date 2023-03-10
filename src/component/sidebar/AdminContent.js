import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserIcon } from "../../utility/icon/icon";
import { logoSidebar } from "../../utility/icon/LogoSidebar";
import SelectPeriode from "../SelectPeriode";

function AdminContent() {
  const [select, setSelect] = useState("Dashboard");
  return (
    <>
      <div className="mt-2 mb-16 h-screen">
        <div className="flex items-center mb-4">
          <UserIcon />
          <div className="flex flex-col pl-2 ">
            <p className="font-semibold text-slate-700">Username</p>
            <p className="text-xs text-slate-700 font-thin">Akun Admin</p>
          </div>
        </div>
        <SelectPeriode />
        <hr />
        <div className="mt-4">
          {logoSidebar.map((res, i) => {
            return (
              <Link key={i} to={`/admin${res.path}`}>
                <button
                  onClick={() => {
                    setSelect(res.name);
                  }}
                  className="flex gap-2 p-2 justify-start w-full"
                  style={{
                    stroke: select === res.name ? "rgb(234, 88, 12)" : "rgb(51, 65, 85)",
                    backgroundColor: select === res.name ? "rgb(255, 247, 237)" : "white",
                    WebkitTextFillColor: select === res.name ? "rgb(234, 88, 12)" : "rgb(51, 65, 85)",
                  }}
                >
                  <span className="">{res.icon} </span> <span className="font-semibold">{res.name}</span>
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AdminContent;
