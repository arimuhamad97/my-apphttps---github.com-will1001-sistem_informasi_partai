import React from "react";
import { Link } from "react-router-dom";
import { KembaliIcon } from "../../utility/icon/icon";
import Button from "../Button";

function PetaKekuatanContent() {
  return (
    <div className="mt-4">
      <Link to={-1}>
        <Button title={"Kembali"} icon={<KembaliIcon />} w={"260px"} h={"53px"} bgColor={"rgb(51, 65, 85)"} />
      </Link>
      <div className="mt-8 text-[20px] flex flex-col gap-2 text-slate-700">
        <Link>
          <p>Kabupaten Lombok Barat</p>
        </Link>
        <Link>
          <p>Kabupaten Lombok Tengah</p>
        </Link>
        <Link>
          <p>Kabupaten Lombok Timur</p>
        </Link>
        <Link>
          <p>Kabupaten Lombok Utara</p>
        </Link>
        <Link to={`/admin/mataram/`}>
          <p>Kota Mataram</p>
        </Link>
      </div>
    </div>
  );
}

export default PetaKekuatanContent;
