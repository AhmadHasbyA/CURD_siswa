import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ProfilSiswa() {
  const { id } = useParams();
  //   const [siswa, setSiswa] = useState(null);

  const location = useLocation();
  const siswa = location.state?.siswa;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
  }, [id]);

  const handleUpdate = () => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    data[id] = siswa;
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <div>
      <h1>Profil Siswa</h1>

      <span className="flex gap-4">
        <span>:</span>
        <span>{siswa?.nama}</span>
      </span>
      <span className="flex gap-4">
        <span>:</span>
        <span>{siswa?.alamat}</span>
      </span>
      <span className="flex gap-4">
        <span>:</span>
        <span>{siswa?.noHp}</span>
      </span>
    </div>
  );
}

export default ProfilSiswa;
