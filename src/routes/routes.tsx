import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageHome } from '../pages/Home';
import { PageLogin } from '../pages/Login';
import { PrivateRoutes } from './PrivateRoutes';
import { PageDashboard } from '../pages/Dashboard';

function Sidebar() {

  return (
    <div className="container">
      <nav className="sidebar">
        <h1>Sidebar</h1>
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
