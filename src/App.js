import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Agreement from "./screens/Agreement";
import Navigation from "./components/Navigation";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Wait from "./screens/Wait";
import Medical from "./screens/Medical";
import DeliveryMedicine from "./screens/DeliveryMedicine";
import Setting from "./screens/Setting";
import AppNotify from "./screens/AppNotify";
import Registration from "./screens/Registration";
import Test from "./screens/Test";
import ListDoctors from "./screens/ListDoctors";
import RegisterRecord from "./screens/RegisterRecord";
import Appointment from "./screens/Appointment";
import OTP from "./screens/OTP";
import History from "./screens/History";
import ContactMedical from "./screens/ContactMedical";
function App() {
  const currentPath = window.location.pathname;

  return (
    <Router>
      <>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/OTP" element={<OTP />} />
          <Route path="/ContactMedical" element={<ContactMedical />} />

        </Routes>
      </>
      {currentPath !== "/Login" &&
        currentPath !== "/Register" &&
        currentPath !== "/" &&
        currentPath !== "/ContactMedical" &&
        currentPath !== "/OTP" && (
          <>
            <Navigation />
            <Routes>
              <Route path="/Agreement" element={<Agreement />} />
              <Route path="/Wait" element={<Wait />} />
              <Route path="/Medical" element={<Medical />} />
              <Route path="/DeliveryMedicine" element={<DeliveryMedicine />} />
              <Route path="/Setting" element={<Setting />} />
              <Route path="/AppNotify" element={<AppNotify />} />
              <Route path="/Registration" element={<Registration />} />
              <Route path="/ListDoctors" element={<ListDoctors />} />
              <Route path="/RegisterRecord" element={<RegisterRecord />} />
              <Route path="/Appointment" element={<Appointment />} />
              <Route path="/History" element={<History />} />
              <Route path="/Test" element={<Test />} />
            </Routes>
          </>
        )}
    </Router>
  );
}

export default App;
