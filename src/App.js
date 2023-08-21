import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Agreement from "./pages/Agreement";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wait from "./pages/Wait";
import Medical from "./pages/Medical";
import DeliveryMedicine from "./pages/DeliveryMedicine";
import Setting from "./pages/Setting";
import AppNotify from "./pages/AppNotify";
import Registration from "./pages/Registration";
import Test from "./pages/Test";
import ListDoctors from "./pages/ListDoctors";
import RegisterRecord from "./pages/RegisterRecord";
import Appointment from "./pages/Appointment";
import OTP from "./pages/OTP";
import History from "./pages/History";
import ContactMedical from "./pages/ContactMedical";
import LiffComponent from "./pages/LiffComponent";
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
              <Route path="/LiffComponent" element={<LiffComponent />} />
            </Routes>
          </>
        )}
    </Router>
  );
}

export default App;
