import React from "react";
import { PendudukIcon } from "../utility/icon/icon";

function JumlahPenduduk() {
  return (
    <div className="flex border border-orange-300 px-2 py-4 items-center gap-2 w-[254px] h-[79px]">
      <PendudukIcon />
      <div className="text-center">
        <span className="text-orange-600 text-[32px] font-bold">123.321</span>
        <p className="text-[21px] font-medium text-slate-700">Jumlah Penduduk</p>
      </div>
    </div>
  );
}

export default JumlahPenduduk;
