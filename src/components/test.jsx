import React from "react";

function test() {
  const [name, setName] = useState(Finance?.name);
  const [username, setUsername] = useState(Finance?.username);
  const [adminId, setAdminId] = useState(Finance?.adminId);
  const [userType, setUserType] = useState(Finance?.userType);
  const [phone, setPhone] = useState(Finance?.phone);
  const [domicile, setDomicile] = useState(Finance?.domicile);
  const [email, setEmail] = useState(Finance?.email);

  const saveChanges = () => {
    const user = JSON.parse(localStorage.getItem("user")) || [];
    const updatedFinance = user.map((Finance) => (Finance.Id === Id ? { ...Finance, name, username, userType, phone, domicile, email } : Finance));
    localStorage.setItem("user", JSON.stringify(updatedFinance));
    setIsModalOpen(true);
  };
  return (
    <>
      <div className=" flex justify-center items-center w-full h-full">
        <div className=" h-[40px] w-full justify-center flex items-center gap-5">
          <span>Email Baru</span>
          <span>:</span>
          <input className="border border-primary outline-none py-3 px-3 h-full w-[400px] rounded-md " type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
    </>
  );
}

export default test;
