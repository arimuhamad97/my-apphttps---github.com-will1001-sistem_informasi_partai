import React from "react";
import { Link } from "react-router-dom";
import PetaKekuatanContent from "../../component/sidebar/PetaKekuatanContent";
import SideBar from "../../component/sidebar/SideBar";
import { BackIcon } from "../../utility/icon/icon";
import PetaLombok from "../../utility/PetaLombok";

function PetaKekuatan() {
  return (
    <div className="flex">
      <div className="flex basis-3/12 ">
        <SideBar content={<PetaKekuatanContent />} />
      </div>
      <div className="basis-9/12 bg-orange-50">
        <Link to={-1}>
          <BackIcon />
        </Link>
        <p className="text-slate-700 font-bold text-[32px] ml-12">Peta Kekuatan SJP Berkhidmat</p>
        <div className="ml-24">
          <PetaLombok />
        </div>
      </div>
    </div>
  );
}

export default PetaKekuatan;
