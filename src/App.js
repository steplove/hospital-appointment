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
function App() {
  const currentPath = window.location.pathname;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {currentPath !== "/login" &&currentPath !== "/register" && (
        <>
          <Navigation />
          <Routes>
            <Route path="/Agreement" element={<Agreement />} />
            <Route path="/wait" element={<Wait />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/DeliveryMedicine" element={<DeliveryMedicine />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/AppNotify" element={<AppNotify />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/ListDoctors" element={<ListDoctors />} />
            <Route path="/RegisterRecord" element={<RegisterRecord />} />
            <Route path="/Test" element={<Test />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
