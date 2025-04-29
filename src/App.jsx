import Home from './components/Home'
import Header from './shared/Header'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp'
import TodaysSession from './components/TodaysSession';
import NewSession from './components/NewSession'
import "./App.css"
import CreateClient from './components/CreateClient';



function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todays-session" element={<TodaysSession />} />
        <Route path="/new-session" element={<NewSession />} />
        <Route path="/create-client" element={<CreateClient />} />
      </Routes>
    </div>
  );
}

export default App
