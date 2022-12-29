import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Mataram from "./pages/admin/Mataram";
import PetaKekuatan from "./pages/admin/PetaKekuatan";
import { Provider } from "react-redux";
import store from "./App/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          {/* routes admin pages */}
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/admin/peta-kekuatan/*" element={<PetaKekuatan />} />
          <Route path="/admin/mataram/*" element={<Mataram />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
