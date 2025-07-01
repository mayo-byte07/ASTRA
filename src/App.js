import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UserDashboard from './pages/UserDashboard';
import GuardianDashboard from './pages/GuardianDashboard';
import AIIntegration from './pages/AIIntegration';
import EmergencyDemo from './pages/EmergencyDemo';
import TechHardware from './pages/TechHardware';
import PartnersDeployment from './pages/PartnersDeployment';
import AdminPanel from './pages/AdminPanel';
import FeedbackSupport from './pages/FeedbackSupport';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/guardian" element={<GuardianDashboard />} />
          <Route path="/ai" element={<AIIntegration />} />
          <Route path="/demo" element={<EmergencyDemo />} />
          <Route path="/tech" element={<TechHardware />} />
          <Route path="/partners" element={<PartnersDeployment />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/support" element={<FeedbackSupport />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 