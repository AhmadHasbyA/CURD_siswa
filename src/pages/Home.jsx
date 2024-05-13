import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className=" bg-black text-white w-full h-screen gap-5 flex justify-center items-center">
        <Link to="/daftar">
          <button className="bg-[red] flex justify-center items-center rounded-md w-[200px] h-[50px]">Daftar Siswa</button>
        </Link>
        <Link to="/list">
          <button className="bg-[red] flex justify-center items-center rounded-md w-[200px] h-[50px]">List Siswa</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
