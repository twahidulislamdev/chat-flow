import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import DashBoard from "./components/pages/DashBoard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
