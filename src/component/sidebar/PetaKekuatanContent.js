import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Mataram from "../../pages/admin/Mataram";
import { KembaliIcon, PetaKekuatanIcon } from "../../utility/icon/icon";
import Button from "../Button";
import SideBar from "./SideBar";

function PetaKekuatanContent() {
  const [mataram, setMataram] = useState("");
  const [lombokTimur, setLombokTimur] = useState("");
  const [lombokBarat, setLombokBarat] = useState("");
  const [lombokTengah, setLombokTengah] = useState("");
  const [lombokUtara, setLombokUtara] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/wilayah").then((res) => {
      setMataram(res.data[0].kabupaten);
      setLombokBarat(res.data[2].kabupaten);
      setLombokTengah(res.data[3].kabupaten);
      setLombokTimur(res.data[1].kabupaten);
      setLombokUtara(res.data[4].kabupaten);
      console.log(res.data[0]);
    });
  }, []);

  return (
    <div className="mt-4">
      <Link to={-1}>
        <Button title={"Kembali"} icon={<KembaliIcon />} w={"260px"} h={"53px"} bgColor={"rgb(51, 65, 85)"} />
      </Link>
      <div className="mt-8 text-[20px] flex flex-col gap-2 text-slate-700">
        <Link>
          <p>Kabupaten {lombokBarat}</p>
        </Link>
        <Link>
          <p>Kabupaten {lombokTengah}</p>
        </Link>
        <Link>
          <p>Kabupaten {lombokTimur}</p>
        </Link>
        <Link>
          <p>Kabupaten {lombokUtara}</p>
        </Link>
        <Link to={`/admin/mataram/`}>
          <p>Kota {mataram}</p>
        </Link>
      </div>
    </div>
  );
}

export default PetaKekuatanContent;
