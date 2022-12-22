import React from "react";
import { Link } from "react-router-dom";
import Button from "../../component/Button";
import JumlahPemilih from "../../component/JumlahPemilih";
import JumlahPenduduk from "../../component/JumlahPenduduk";
import JumlahTPS from "../../component/JumlahTPS";
import { BackIcon, PetaKekuatanIcon } from "../../utility/icon/icon";
import PetaLombok from "../../utility/PetaLombok";

function AdminDashboard() {
  return (
    <div className="bg-orange-50">
      <button>
        <BackIcon />
      </button>
      <div className="pt-4 pl-8 ">
        <h1 className="font-bold text-[32px] text-slate-700 ml-24">Dapil Nusa Tenggara Barat II</h1>
        <div className="flex justify-center item-center gap-4 mt-2">
          <JumlahPenduduk />
          <JumlahPemilih />
          <JumlahTPS />
        </div>
        <div className="ml-24 mt-6 mb-8">
          <Link to={`/peta-kekuatan/`}>
            <Button title={"Peta Kekuatan"} icon={<PetaKekuatanIcon />} w={"[284px]"} h={"[63px]"} />
          </Link>
        </div>
        <div className="ml-24">
          <PetaLombok />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
