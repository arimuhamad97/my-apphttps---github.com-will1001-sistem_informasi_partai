import React, { useState } from "react";
import SideBar from "../../component/SideBar";

function Admin() {
  const [select, setSelect] = useState("Dashboard");

  return (
    <>
      <div className="flex">
        <div className="basis-3/12">
          <SideBar select={select} setSelect={setSelect} />
        </div>
        <div className="basis-9/12">
          <h1>dashboard</h1>
        </div>
      </div>
    </>
  );
}

export default Admin;
