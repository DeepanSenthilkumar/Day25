import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardPage from './components/DashboardPage';
import Footer from './components/Footer';
import Forms from './components/Forms';
import Tables from './components/Tables';
import Charts from './components/Charts';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import './App.css';

function App() {
  return (
    <Router>
      
      <div className="container">
        
        <Sidebar />
        <Header />
        
          <div className="main-content">
          <Routes> {/* Use Routes instead of Route */}
            <Route path="/" element={<DashboardPage />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/cards" element={<Cards />} />
          </Routes>
          
        </div>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
