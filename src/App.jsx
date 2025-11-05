import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import DashBoard from "./components/pages/DashBoard";
import Chatting from "./components/pages/Chatting";
import Contact from "./components/pages/Contact";
import Groups from "./components/pages/Groups";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<MainLayout />}>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/chatting" element={<Chatting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
