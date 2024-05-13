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
      <div>test</div>
    </>
  );
}

export default test;
