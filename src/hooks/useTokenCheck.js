import { useEffect, useState } from "react";

function useTokenCheck() {
  const [userData, setUserData] = useState({
    identificationNumber: "",
    firstName: "",
    lastname: "",
    hospitalNumber: "",
    customer_status: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/authen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          setUserData({
            identificationNumber: data.decoded.identificationNumber,
            firstName: data.decoded.firstName,
            lastname: data.decoded.lastName,
            hospitalNumber: data.decoded.hospitalNumber,
            customer_status: data.decoded.customer_status,
          });
          console.log(data, "token");
          if (data.decoded.customer_status === "guest") {
            window.location = "/ContactMedical";
            console.log(data.decoded.customer_status);
          }
        } else {
          console.log(data.status);
          alert("Token หมดอายุ");
          localStorage.removeItem("token");
          window.location = "/Login";
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  return [
    userData.identificationNumber,
    userData.lastname,
    userData.hospitalNumber,
    userData.customer_status,
  ];
}
export default useTokenCheck;
