import React from "react"
import { Routes, Route } from "react-router-dom"
import LoginPage from './pages/auth/loginPage'
import RegisterPage from './pages/auth/registerPage'
import Home from './pages/home'
import ProtectRoute from './protectedRoute'

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>

      {/* Protected Routes */}
      <Route path="/" element={<ProtectRoute><Home/></ProtectRoute>}/>
    </Routes>
  )
}

export default App
