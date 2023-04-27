import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { PageHome } from '../pages/Home';
import { PageLogin } from '../pages/Login';
import { PrivateRoutes } from './PrivateRoutes';
import { PageDashboard } from '../pages/Dashboard';

function Sidebar() {
  const navigation = useNavigate();
  
  return (
    <div className="container">
      <nav className="sidebar">
        <h1>Sidebar</h1>

        <ul>
          <li>
           <button onClick={() => navigation('/')}>Home</button>
          </li>
          <li>
           <button onClick={() => navigation('/dashboard')}>Dashboard</button>
          </li>
          <li>
           <button onClick={() => navigation('/login')}>SignOut</button>
          </li>
        </ul>
      </nav>
      <PrivateRoutes />
    </div>
  )
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/login" element={<PageLogin />} />

        <Route path="/" element={<Sidebar />} >
          <Route path="dashboard" element={<PageDashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
