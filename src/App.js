import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyComponent from './components/Header';
import SignInPage from './components/SignInPage';
import MainContent2 from './components/MainContent2';
import MainContent3 from './components/MainContent3';
import MainContent4 from './components/MainContent4';
import MainContent5 from './components/MainContent5';
import MyComponent2 from './components/Footer';
import JoinInPage from './components/JoinInPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <MyComponent />
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/joinin" element={<JoinInPage />} /> 
        </Routes>
        <MainContent2 />
        <MainContent3 />
        <MainContent4 />
        <MainContent5 />
        <MyComponent2 />
        
      </div>
    </Router>
  );
}

export default App;
