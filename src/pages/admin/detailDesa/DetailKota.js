import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BackIcon } from "../../../utility/icon/icon";
import PetaLombok from "../../../utility/PetaLombok";
import DetailDesa from "../../../component/sidebar/DetailKotaContent";
import SideBar from "../../../component/sidebar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataWilayah } from "../../../App/features/API/dataWilayahSlice";

const DetailKota = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataWilayah());
  }, [dispatch]);

  const data = useSelector((state) => state.dataWilayah.data[0]);

  return (
    <div className="flex">
      <div className="flex basis-3/12">
        <SideBar content={<DetailDesa data={data} />} />
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

export default DetailKota;
