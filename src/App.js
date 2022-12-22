import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import PetaKekuatan from "./pages/admin/PetaKekuatan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/peta-kekuatan/*" element={<PetaKekuatan />} />
      </Routes>
    </>
  );
}

export default App;
