import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageHome } from '../pages/Home';
import { PageLogin } from '../pages/Login';
import { PrivateRoutes } from './PrivateRoutes';
import { PageDashboard } from '../pages/Dashboard';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/login" element={<PageLogin />} />

        <Route path="/" element={<PrivateRoutes />} >
          <Route path="dashboard" element={<PageDashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
