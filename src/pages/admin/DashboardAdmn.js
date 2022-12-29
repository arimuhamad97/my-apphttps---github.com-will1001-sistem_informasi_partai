import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../component/Button";
import JumlahPenduduk from "../../component/JumlahPenduduk";

import { BackIcon, PetaKekuatanIcon } from "../../utility/icon/icon";
import PetaLombok from "../../utility/PetaLombok";

function AdminDashboard() {
  const [dataPenduduk, setDataPenduduk] = useState("");
  const [dataPemilih, setDataPemilih] = useState("");
  const [dataTPS, setDataTPS] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/total").then((res) => {
      setDataPenduduk(res.data[0]);
      setDataPemilih(res.data[1]);
      setDataTPS(res.data[2]);
    });
  }, []);

  return (
    <div className="bg-orange-50">
      <button>
        <BackIcon />
      </button>
      <div className="pt-4 pl-8 ">
        <h1 className="font-bold text-[32px] text-slate-700 ml-24">Dapil Nusa Tenggara Barat II</h1>
        <div className="flex ml-24 item-center gap-4 mt-2">
          <JumlahPenduduk total={dataPenduduk} />
          <JumlahPenduduk total={dataPemilih} />
          <JumlahPenduduk total={dataTPS} />
        </div>
        <div className="ml-24 mt-6 mb-8">
          <Link to={`/admin/peta-kekuatan/`}>
            <Button title={"Peta Kekuatan"} icon={<PetaKekuatanIcon />} w={"280px"} h={"63px"} bgColor={"rgb(51, 65, 85)"} />
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
