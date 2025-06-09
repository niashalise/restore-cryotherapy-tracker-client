import Home from "./components/Home";
import Header from "./shared/Header";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TodaysSession from "./components/TodaysSession";
import NewSession from "./components/NewSession";
import "./App.css";
import CreateClient from "./components/CreateClient";
import SearchForClient from "./components/SearchForClient";
import PreviousSessions from "./components/PreviousSessions";
import Help from "./components/Help";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // added for private routing
  const [user, setUser] = useState({ id: "", email: "" });
  const handleLogin = () => setUser({ id: "", email: "" });
  const handleLogout = () => setUser(null);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/todays-session" element={<TodaysSession />} />
          <Route path="/new-session" element={<NewSession />} />
          <Route path="/previous-sessions" element={<PreviousSessions />} />
        </Route>
        <Route path="/create-client" element={<CreateClient />} />
        <Route path="/client-sessions" element={<SearchForClient />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
