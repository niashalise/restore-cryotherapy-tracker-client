import Home from "./components/Home";
import Header from "./shared/Header";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NewSession from "./features/sessions/NewSession";
import CreateClient from "./components/CreateClient";
import SearchForClient from "./components/SearchForClient";
import PreviousSessions from "./features/sessions/PreviousSessions";
import Help from "./components/Help";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const isAuthenticated = user !== null;
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/new-session" element={<NewSession />} />
          <Route
            path="/previous-sessions/:date"
            element={<PreviousSessions />}
          />
        </Route>
        <Route path="/create-client" element={<CreateClient />} />
        <Route path="/client-sessions/:phone" element={<SearchForClient />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
