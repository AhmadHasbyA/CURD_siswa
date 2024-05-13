import { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import User from "../assets/tambah.png";

function DaftarSiswa() {
  const [siswa, setSiswa] = useState({
    nama: "",
    alamat: "",
    noHp: "",
    profilImg: "",
    tanggalLahir: "",
    jenisKelamin: "",
  });
  const navigate = useNavigate();

  const defaultImg = User;
  const [gender, setGender] = useState(false);
  const [selectedUser, setSelectedUser] = useState("pilih gender");
  const handleGender = () => {
    setGender(!gender);
  };

  const handleclose = () => {
    setGender(false);
  };
  const [imgSrc, setImgSrc] = useState(defaultImg);
  const handleRemoveClick = () => {
    setImgSrc(defaultImg); // kembali ke gambar default saat tombol hapus diklik
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgSrc = URL.createObjectURL(file);
      setImgSrc(imgSrc);
      setNewUser({ ...siswa, profilImg: imgSrc });
    }
  };
  const handleSelection = (jenisKelamin) => {
    setSelectedUser(jenisKelamin);
    setSiswa({ ...siswa, jenisKelamin }); // tambahkan jenis pengguna ke objek 'newUser'
  };
  const handleChange = (e) => {
    setSiswa({ ...siswa, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data")) || [];
    data.push(siswa);
    localStorage.setItem("data", JSON.stringify(data));
    navigate("/list");
  };

  return (
    <>
      <div className=" w-full h-screen gap-5 flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className=" w-[100%] h-screen justify-center items-center gap-5 flex flex-col">
            <div className="flex flex-col gap-3 w-[280px] ">
              <span className="text-lg">Nama</span>
              <input className="border border-black rounded-md" name="nama" value={siswa.nama} onChange={handleChange} placeholder="Nama" />
            </div>
            <div className="flex flex-col gap-3 w-[280px] ">
              <span className="text-lg">alamat</span>
              <textarea className="border border-black rounded-md" name="alamat" value={siswa.alamat} onChange={handleChange} placeholder="Alamat" />
            </div>
            <div className="flex flex-col gap-3 w-[280px] ">
              <span className="text-lg">no hp</span>
              <input className="border border-black rounded-md" name="noHp" value={siswa.noHp} onChange={handleChange} placeholder="no_hp" />
            </div>
            <div className="flex items-center font-normal gap-5 text-sm">
              <div onClick={() => document.getElementById("input-field").click()}>
                <input id="input-field" type="file" hidden onChange={handleImageChange} className="" />
                {imgSrc && <img src={imgSrc} alt="profile" className="w-12 h-12 rounded-full object-cover" />}
              </div>
              <button type="button" className="border rounded-md h-7 w-20" onClick={() => document.getElementById("input-field").click()}>
                change
              </button>
              <button type="button" className="text-[red]" onClick={handleRemoveClick}>
                remove
              </button>
            </div>
            <div className="flex flex-col gap-3 w-[280px] ">
              <span className="text-lg">tanggalLahir</span>
              <input className="border border-black rounded-md" type="date" name="tanggalLahir" value={siswa.tanggalLahir} onChange={handleChange} placeholder="tanggal lahir" />
            </div>

            <div className="flex flex-col items-center gap-4 font-bold ">
              <div>
                <span className="text-xl ">pilih Gender </span>
              </div>
              <div className="relative">
                <div className="">
                  <button type="button" onClick={handleGender} className="flex items-center justify-between border border-black rounded-md py-3 px-3 w-[150px] h-8 ">
                    <span>{selectedUser}</span>
                    <IoCaretDown />
                  </button>
                </div>
                <div>
                  {gender && (
                    <div onClick={handleclose} className="absolute cursor-pointer">
                      <span onClick={() => handleSelection("Laki-Laki")} className="flex items-center bg-white justify-center border border-black rounded-md py-3 px-3 w-[150px] h-8 hover:bg-slate-400 ">
                        Laki-Laki
                      </span>
                      <span onClick={() => handleSelection("Wanita")} className="flex items-center bg-white justify-center border border-black rounded-md py-3 px-3 w-[150px] h-8 hover:bg-slate-400 ">
                        Wanita
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <button type="submit">Daftar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default DaftarSiswa;
