import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import BuyerDashboard from './components/Dashboard/BuyerDashboard';
import SupplierDashboard from './components/Dashboard/SupplierDashboard';
import FeedForm from './components/FeedForm';
import SupplierForm from './components/SupplierForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/buyer" element={<BuyerDashboard />} />
        <Route path="/supplier" element={<SupplierDashboard />} />
        <Route path="/feed" element={<FeedForm />} />
        <Route path="/register-pet" element={<SupplierForm />} />
      </Routes>
    </Router>
  );
}

export default App;