import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DaftarSiswa from "../pages/DaftarSiswa";
import ListSiswa from "../pages/ListSiswa";

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daftar" element={<DaftarSiswa />} />
        <Route path="/list" element={<ListSiswa />} />
      </Routes>
    </Router>
  );
}

export default Index;
