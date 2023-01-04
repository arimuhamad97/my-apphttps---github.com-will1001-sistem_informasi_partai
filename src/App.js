import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Mataram from "./pages/admin/Mataram";
import PetaKekuatan from "./pages/admin/PetaKekuatan";
import { Provider } from "react-redux";
import store from "./App/Store";
import DetailKota from "./pages/admin/detailDesa/DetailKota";
import DetailDesa from "./pages/admin/detailDesa/DetailDesa";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          {/* routes admin pages */}
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/peta-kekuatan/*" element={<PetaKekuatan />} />
          <Route path="/mataram/*" element={<Mataram />} />
          <Route path="/mataram/detail-kota/*" element={<DetailKota />} />
          <Route path="/mataram/detail-desa/*" element={<DetailDesa />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
