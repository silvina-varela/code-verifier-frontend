import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { KatasPage } from './pages/KatasPage';
import { KatasDetail } from './pages/KatasDetailPage';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/katas'>Katas</Link>
            </li>
          </ul>
        </nav>

{/* //TODO: move to Routes folder */}
<Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/register' element={<RegisterPage/>}></Route>
    <Route path='/katas' element={<KatasPage/>}></Route>
    <Route path='/katas/:id' element={<KatasDetail/>}></Route>
    {/* Redirect Page Not Found */}
    <Route path='*' element={<Navigate to='/' replace />}></Route>
</Routes>
      </Router>
    </div>
  );
}

export default App;
