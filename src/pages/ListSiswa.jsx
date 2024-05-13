import React, { useState, useEffect } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsTrash } from "react-icons/bs";
import { motion } from "framer-motion";

function ListSiswa() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")) || []);
  }, []);

  const deleteUser = (nama) => {
    let users = JSON.parse(localStorage.getItem("data")) || [];
    users = users.filter((data) => data.nama !== nama);
    localStorage.setItem("data", JSON.stringify(users));
    setData(users);
  };
  const handleRowClick = (nama) => {
    const selectedAdmin = user.find((user) => user.nama === nama);
    navigate("/detail-profil-admin", { state: { admin: selectedAdmin } });
    // Mengarahkan ke halaman '/detail-profil-admin' dengan data admin yang dipilih
  };
  return (
    <>
      <div className="">
        {/* <h1>List Siswa</h1>
        {data.map((siswa, index) => (
          <div key={index}>
            <p>{siswa.nama}</p>
            <button onClick={() => handleDelete(index)}>Hapus</button>
          </div>
        ))} */}
        <table className="w-full  ">
          <thead>
            <tr className="text-primary text-lg ">
              <th className="">No</th>
              <th className="">Nama </th>
              <th className="">alamat</th>
              <th className="">no hp</th>
              <th className="">tanggalLahir</th>
              <th className="">jenisKelamin</th>
              <th className="">aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((siswa, index) => (
              <tr onClick={() => handleRowClick(siswa.nama)} key={index} className={`text-base text-center ${index % 2 === 0 ? "bg-[#efefef]" : "bg-white"}`}>
                <td
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  {index + 1}
                </td>
                <td
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  {siswa.nama}
                </td>
                <td
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  {siswa.alamat}
                </td>
                <td
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  {siswa.noHp}
                </td>
                <td
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  {siswa.tanggalLahir}
                </td>
                <td
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  {siswa.jenisKelamin}
                </td>
                <td className="p-2 flex gap-3 justify-center  text-xl">
                  <IoDocumentTextOutline className="text-primary cursor-pointer" />
                  <BsTrash
                    onClick={(event) => {
                      event.stopPropagation(); // Mencegah event klik menyebar ke elemen 'tr'
                      deleteUser(siswa.nama);
                    }}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListSiswa;
