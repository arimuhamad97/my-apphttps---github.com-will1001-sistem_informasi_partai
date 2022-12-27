import React from "react";
import { Link } from "react-router-dom";
import MataramContent from "../../component/sidebar/MataramContent";
import SideBar from "../../component/sidebar/SideBar";
import { BackIcon } from "../../utility/icon/icon";
import PetaLombok from "../../utility/PetaLombok";

const Mataram = () => {
  return (
    <div className="flex">
      <div className="flex basis-3/12">
        <SideBar content={<MataramContent />} />
      </div>
      <div className="basis-9/12 bg-orange-50">
        <Link to={-1}>
          <BackIcon />
        </Link>
        <div className="ml-24">
          <PetaLombok />
        </div>
      </div>
    </div>
  );
};

export default Mataram;
