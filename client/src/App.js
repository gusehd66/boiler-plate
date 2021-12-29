import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

export default function App() {
  const NewLandingPage = Auth(LandingPage, null);
  const NewLoginPage = Auth(LoginPage, false);
  const NewRegisterPage = Auth(RegisterPage, false);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<NewRegisterPage />} />
        <Route path="/login" element={<NewLoginPage />} />
        <Route path="/" element={<NewLandingPage />} />
      </Routes>
    </Router>
  );
}
