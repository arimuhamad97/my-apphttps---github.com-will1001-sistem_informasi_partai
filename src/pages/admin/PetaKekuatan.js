import React from "react";
import PetaKekuatanContent from "../../component/sidebar/PetaKekuatanContent";
import SideBar from "../../component/sidebar/SideBar";

function PetaKekuatan() {
  return (
    <div className="flex">
      <div className="basis-3/12">
        <SideBar content={<PetaKekuatanContent />} />
      </div>
      <div className="basis-9/12 bg-orange-50">content</div>
    </div>
  );
}

export default PetaKekuatan;
