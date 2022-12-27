import React from "react";
import { DataPerdesaIcon, KembaliIcon } from "../../utility/icon/icon";
import Button from "../Button";
import mataramImg from "../../utility/mataram.jpg";
const MataramContent = () => {
  return (
    <div>
      <div className="flex gap-2">
        <Button title={"Kembali"} icon={<KembaliIcon />} bgColor={"rgb(51, 65, 85)"} w={"149px"} h={"53px"} />
        <Button title={"Data Per Desa"} icon={<DataPerdesaIcon />} bgColor={"#FF5001"} w={"211px"} h={"53px"} />
      </div>
      <h1 className="text-[32px] font-bold text-slate-700">Kota Mataram</h1>
      <img src={mataramImg} alt="mataram" />
      <p className="text-[18px] text-slate-700 font-bold">Persentase Kekuatan</p>
    </div>
  );
};

export default MataramContent;
